<?php
// 1. CORS Headers: Taaki front-end se request allow ho
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json');

// 2. Handle OPTIONS request (CORS preflight)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}

// 3. Get Input
$input = json_decode(file_get_contents('php://input'), true);
$apiKey = $input['key'] ?? '';
$text = $input['text'] ?? '';
$intensity = $input['intensity'] ?? '50';

if (empty($apiKey) || empty($text)) {
    echo json_encode(['result' => 'ERROR: API Key or Input missing.']);
    exit;
}

// 4. Grok API Configuration
$url = "https://api.x.ai/v1/chat/completions";

$payload = [
    "model" => "grok-beta",
    "messages" => [
        [
            "role" => "system", 
            "content" => "You are an expert humanizer. Rewrite the text to sound natural, human-written, and engaging. Target a humanization intensity of " . $intensity . "%."
        ],
        ["role" => "user", "content" => $text]
    ],
    "temperature" => 0.7
];

// 5. Initialize cURL
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "Authorization: Bearer " . $apiKey
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));

// 6. Execute Request
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error = curl_error($ch);
curl_close($ch);

// 7. Process Response
if ($httpCode == 200) {
    $data = json_decode($response, true);
    if (isset($data['choices'][0]['message']['content'])) {
        echo json_encode(['result' => $data['choices'][0]['message']['content']]);
    } else {
        echo json_encode(['result' => 'ERROR: Unexpected response format from Grok.']);
    }
} else {
    // Return detailed error for debugging
    echo json_encode(['result' => "API FAILED (Code $httpCode): " . $response]);
}
?>

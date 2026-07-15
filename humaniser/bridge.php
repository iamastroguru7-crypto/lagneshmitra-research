<?php
header('Content-Type: application/json');

// Get the input from the frontend
$data = json_decode(file_get_contents('php://input'), true);
$apiKey = $data['key'] ?? '';
$text = $data['text'] ?? '';
$intensity = $data['intensity'] ?? '50';

if (!$apiKey || !$text) {
    echo json_encode(['result' => 'ERROR: Missing API Key or Input Text']);
    exit;
}

// Grok API endpoint
$url = "https://api.x.ai/v1/chat/completions";

$payload = [
    "model" => "grok-beta",
    "messages" => [
        ["role" => "system", "content" => "You are an expert editor. Rewrite the provided text to sound human, natural, and engaging. Target a humanization level of $intensity%."],
        ["role" => "user", "content" => $text]
    ]
];

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "Authorization: Bearer " . $apiKey
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));

$response = curl_exec($ch);
curl_close($ch);

$resultData = json_decode($response, true);

// Extracting the rewritten text
if (isset($resultData['choices'][0]['message']['content'])) {
    echo json_encode(['result' => $resultData['choices'][0]['message']['content']]);
} else {
    echo json_encode(['result' => 'ERROR: Grok API failed to respond. Check your API Key.']);
}
?>


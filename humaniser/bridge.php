<?php
// Force error reporting to catch issues
error_reporting(E_ALL);
ini_set('display_errors', 1);

// CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { exit; }

// Get JSON Input
$json = file_get_contents('php://input');
$input = json_decode($json, true);

if (!$input) {
    echo json_encode(['result' => 'ERROR: No input received. Check JSON format.']);
    exit;
}

$apiKey = $input['key'] ?? '';
$text = $input['text'] ?? '';

if (empty($apiKey) || empty($text)) {
    echo json_encode(['result' => 'ERROR: Key or Text is empty.']);
    exit;
}

// Prepare Grok request
$data = [
    "model" => "grok-beta",
    "messages" => [
        ["role" => "system", "content" => "You are a professional editor. Rewrite text to be natural and human-like."],
        ["role" => "user", "content" => $text]
    ],
    "stream" => false
];

$ch = curl_init("https://api.x.ai/v1/chat/completions");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "Authorization: Bearer " . $apiKey
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_TIMEOUT, 30); // 30 second timeout

$response = curl_exec($ch);
$err = curl_error($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

curl_close($ch);

// Return result
if ($err) {
    echo json_encode(['result' => 'CURL ERROR: ' . $err]);
} elseif ($httpCode !== 200) {
    echo json_encode(['result' => 'API ERROR (HTTP ' . $httpCode . '): ' . $response]);
} else {
    // Successfully got a response
    $decoded = json_decode($response, true);
    if (isset($decoded['choices'][0]['message']['content'])) {
        echo json_encode(['result' => $decoded['choices'][0]['message']['content']]);
    } else {
        echo json_encode(['result' => 'ERROR: Could not parse Grok response.']);
    }
}
?>

<?php
   //Process a new form submission in HubSpot in order to create a new Contact.

$hubspotutk      = $_COOKIE['hubspotutk']; //grab the cookie from the visitors browser.
$ip_addr         = $_SERVER['REMOTE_ADDR']; //IP address too.
$hs_context      = array(
    'hutk' => $hubspotutk,
    'ipAddress' => $ip_addr,
    'pageUrl' => $_SERVER['HTTP_REFERER'],
    'pageName' => $_POST['pagename']
);
$hs_context_json = json_encode($hs_context);
$key = $_POST['key'];
$firstname = trim($_POST['firstname']);
$lastname = trim($_POST['lastname']);
$email = trim($_POST['email']);
$phone = trim($_POST['phone']);
$title = trim($_POST['title']);
$school_name = trim($_POST['school_name']);
if (!empty($firstname) && !empty($lastname) && !empty($email) && !empty($phone) && !empty($school_name)) {
    //Need to populate these varilables with values from the form.
    $str_post = "firstname=" . urlencode($firstname)
        . "&lastname=" . urlencode($lastname)
        . "&email=" . urlencode($email)
        . "&phone=" . urlencode($phone)
        . "&school_name=" . urlencode($school_name)
        . "&title_drop_down=" . urlencode($title)
        . "&hs_context=" . urlencode($hs_context_json); //Leave this one be

    //replace the values in this URL with your portal ID and your form GUID
    $endpoint = 'https://forms.hubspot.com/uploads/form/v2/182596/'.$key;

    $ch = @curl_init();
    @curl_setopt($ch, CURLOPT_POST, true);
    @curl_setopt($ch, CURLOPT_POSTFIELDS, $str_post);
    @curl_setopt($ch, CURLOPT_URL, $endpoint);
    @curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/x-www-form-urlencoded'
    ));
    @curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response    = @curl_exec($ch); //Log the response from HubSpot as needed.
    $status_code = @curl_getinfo($ch, CURLINFO_HTTP_CODE); //Log the response status code
    @curl_close($ch);
    header('Location: survey-confirmation');
}
else {
    header('Location: '.$_SERVER['HTTP_REFERER']);
}
?>

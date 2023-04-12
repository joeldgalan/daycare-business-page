<?php
    $p1_name = $_POST['p-1-name'];
    $p1_number = $_POST['p-1-phone-number'];
    $p1_email = $_POST['p-1-email'];
    $p2_name = $_POST['p-2-name'];
    $p2_number = $_POST['p-2-phone-number'];
    $p2_email = $_POST['p-2-email'];
    $street_address = $_POST['street-address'];
    $apt_num = $_POST['apt-num'];
    $city = $_POST['city'];
    $state = $_POST['state'];
    $zip_code = $_POST['zip'];
    $num_of_children = $_POST['num-of-children'];
    $names_ages = $_POST['name-and-age'];
    $start_care = $_POST['start-care'];
    $allergies = $_POST['allergies'];
    $subsidy = $_POST['subsidy'];
    $discover_method = $_POST['discover-method'];
    $comments = $_POST['comments'];

    $email_from = "yourchildcare_alert@ycc.com";
    $email_subject = "Alert! New Form Submission";
    $email_body = "Parent 1 Name: $p1_name\n".
                    "Parent 1 Phone Number: $p1_number\n".
                    "Parent 1 Email: $p1_email\n".
                    "Parent 2 Name: $p2_name\n".
                    "Parent 2 Phone Number: $p2_number\n".
                    "Parent 2 Email: $p2_email\n".
                    "Home Address: $street_address $apt_num $city, $state $zip_code\n".
                    "Number of Children, Names, and Ages: $num_of_children\n$names_ages\n".
                    "Desired Start Date: $start_care\n".
                    "Allergies/Dietary Restrictions: $allergies\n".
                    "Child Care Scholarship: $subsidy\n".
                    "Method of Discovery: $discover_method\n".
                    "Additional Comments: $comments\n";

    $to = $p1_email;

    $headers = "From: $email_from \r\n";

    $headers .= "Reply To: $p1_email \r\n";

    mail($to,$email_subject,$email_body,$headers);
    header("Location: contact-form.html");
?>

<?php


$dbName = realpath("C:\Program Files (x86)\ZKTeco\att2000.mdb");
// echo $dbName;
if (!file_exists($dbName)) {
    die("Could not find database file.");
}
$db = new PDO("odbc:DRIVER={Microsoft Access Driver (*.mdb, *.accdb)}; DBQ=$dbName; Uid=; Pwd=;");
// $conn = new PDO("odbc:att2000", "", "");
// print_r($db);
$sql = "SELECT  TOP 20 CHECKTIME , * FROM CHECKINOUT 
RIGHT JOIN USERINFO on USERINFO.USERID = CHECKINOUT.USERID
order by CHECKTIME desc"; 
$accstmt = $db->query($sql);
$accstmt->setFetchMode(PDO::FETCH_ASSOC); 

while($row = $accstmt->fetch()) {

    echo "<pre>";
    print_r($row);

    echo "</pre>";

    // echo "employee_id = ".$row['USERID'];
    // echo "<br>";

    // echo "Y = ".date('Y',strtotime($row['CHECKTIME']));
    // echo "<br>";

    // echo "m = ".date('m',strtotime($row['CHECKTIME']));
    // echo "<br>";

    // echo "d = ".date('d',strtotime($row['CHECKTIME']));
    // echo "<br>";

    // echo "H:i:s = ".date('H:i:s',strtotime($row['CHECKTIME']));
    // echo "<br>";

    echo "-------------<br>";

//  }
// SELECT `attendance_id`, `att_employee_id`, `att_check_in_time`, `att_check_out_time`, `att_check_in_status`, `att_check_out_status`, `att_check_overall_status`, `att_executer_image`, `att_for_date`, `att_for_month`, `att_for_year` FROM `tbl_attendance` WHERE 1

$curl = curl_init();

if($row['CHECKTYPE'] == 'O'){
$url = "http://127.0.0.1:8000/api/checkinattendance";
}elseif($row['CHECKTYPE'] == 'i'){
    $url = "http://127.0.0.1:8000/api/checkoutattendance";
}else{
    continue;
}
$row['Badgenumber'] = "0068";
curl_setopt_array($curl, array(
  CURLOPT_URL => $url,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
    "employee_id":"'.$row['Badgenumber'].'",
    "datetime":"'.$row['CHECKTIME'].'",
    "employee_password":"Super"

}',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json'  
),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;



}


// Check In = O
// Check Out = i

// Overtime In = o
// Overtime out = 0

// Break out = 1
// Break In = I


?>
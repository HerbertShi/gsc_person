<?php
header("Content-type: text/html; charset=utf-8");
$action  = isset($_REQUEST['act']) ? trim($_REQUEST['act']) : '';
$action_arr = array('register');

if(!in_array($action, $action_arr)){
	echo '无权访问!';
	return false;
}

$mobile = trim($_POST['mobile']);
$pattern = "/^(13|15|18)\d{9}$/";
if ($mobile && !preg_match($pattern,$mobile)){
    die('手机格式:15866668888!');
}
require_once('config.php');
$con = mysql_connect($db_host,$db_users,$db_pass);
mysql_select_db($db_name, $con);
mysql_query("SET CHARACTER SET UTF8"); 

$result  = mysql_query("select mobile from users where mobile='".$mobile."'",$con);
$have_one = mysql_num_rows($result);
if($have_one){
	die('手机号码已被注册!');
}

if($action == 'register'){
	$name = $_POST['name'] ? trim($_POST['name']) : '';
	$age = $_POST['age'] ? trim($_POST['age']) : '';
	$recommend = $_POST['recommend'] ? trim($_POST['recommend']) : '';
	$profession = $_POST['profession'] ? trim($_POST['profession']) : '';
	if(!$name){
		die('姓名不能为空!');
	}
	
	if(!is_numeric($age)){
		die('年龄请填写整数!');
	}
	 
	$res  = mysql_query("insert into users(name,age,mobile,profession,recommend)values('".$name."','".$age."','".$mobile."','".$profession."','".$recommend."')",$con);
	mysql_close($con);
	if($res){
		die('恭喜，您已报名成功!');
	}else{
		die('抱歉,系统繁忙，请稍后再试!');
	}
}

?>
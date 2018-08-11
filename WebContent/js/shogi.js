//初期配置
$('#tbody-board tr:eq(0) td:eq(0)').append('<img title=\"kyousha1a\" src=\"img\\kyousha1a.png\">');
$('#tbody-board tr:eq(0) td:eq(1)').append('<img title=\"keima1a\" src=\"img\\keima1a.png\">');
$('#tbody-board tr:eq(0) td:eq(2)').append('<img title=\"gin1a\" src=\"img\\gin1a.png\">');
$('#tbody-board tr:eq(0) td:eq(3)').append('<img title=\"kin1\" src=\"img\\kin1.png\">');
$('#tbody-board tr:eq(0) td:eq(4)').append('<img title=\"ou1\" src=\"img\\ou1.png\">');
$('#tbody-board tr:eq(0) td:eq(5)').append('<img title=\"kin1\" src=\"img\\kin1.png\">');
$('#tbody-board tr:eq(0) td:eq(6)').append('<img title=\"gin1a\" src=\"img\\gin1a.png\">');
$('#tbody-board tr:eq(0) td:eq(7)').append('<img title=\"keima1a\" src=\"img\\keima1a.png\">');
$('#tbody-board tr:eq(0) td:eq(8)').append('<img title=\"kyousha1a\" src=\"img\\kyousha1a.png\">');

$('#tbody-board tr:eq(1) td:eq(1)').append('<img title=\"hisha1a\" src=\"img\\hisha1a.png\">');
$('#tbody-board tr:eq(1) td:eq(7)').append('<img title=\"kaku1a\" src=\"img\\kaku1a.png\">');

for (var i=0;i<9;i++){
	$('#tbody-board tr:eq(2) td:eq('+i+')').append('<img title=\"hu1a\" src=\"img\\hu1a.png\">');
}


$('#tbody-board tr:eq(8) td:eq(0)').append('<img title=\"kyousha0a\" src=\"img\\kyousha0a.png\">');
$('#tbody-board tr:eq(8) td:eq(1)').append('<img title=\"keima0a\" src=\"img\\keima0a.png\">');
$('#tbody-board tr:eq(8) td:eq(2)').append('<img title=\"gin0a\" src=\"img\\gin0a.png\">');
$('#tbody-board tr:eq(8) td:eq(3)').append('<img title=\"kin0\" src=\"img\\kin0.png\">');
$('#tbody-board tr:eq(8) td:eq(4)').append('<img title=\"ou0\" src=\"img\\ou0.png\">');
$('#tbody-board tr:eq(8) td:eq(5)').append('<img title=\"kin0\" src=\"img\\kin0.png\">');
$('#tbody-board tr:eq(8) td:eq(6)').append('<img title=\"gin0a\" src=\"img\\gin0a.png\">');
$('#tbody-board tr:eq(8) td:eq(7)').append('<img title=\"keima0a\" src=\"img\\keima0a.png\">');
$('#tbody-board tr:eq(8) td:eq(8)').append('<img title=\"kyousha0a\" src=\"img\\kyousha0a.png\">');

$('#tbody-board tr:eq(7) td:eq(7)').append('<img title=\"hisha0a\" src=\"img\\hisha0a.png\">');
$('#tbody-board tr:eq(7) td:eq(1)').append('<img title=\"kaku0a\" src=\"img\\kaku0a.png\">');

for (var i=0;i<9;i++){
	$('#tbody-board tr:eq(6) td:eq('+i+')').append('<img title=\"hu0a\" src=\"img\\hu0a.png\">');
}



//駒の配列
//玉側の駒
var koma0=['kyousha0a','keima0a','gin0a','kin0','ou0','hisha0a','kaku0a','hu0a','kyousha0b','keima0b','gin0b','hisha0b','kaku0b','hu0b'];
//成る
var koma0a=['kyousha0a','keima0a','gin0a','hisha0a','kaku0a','hu0a'];
var koma0b=['kyousha0b','keima0b','gin0b','hisha0b','kaku0b','hu0b'];

//王側の駒
var koma1=['kyousha1a','keima1a','gin1a','kin1','ou1','hisha1a','kaku1a','hu1a','kyousha1b','keima1b','gin1b','hisha1b','kaku1b','hu1b'];
//成る
var koma1a=['kyousha1a','keima1a','gin1a','hisha1a','kaku1a','hu1a'];
var koma1b=['kyousha1b','keima1b','gin1b','hisha1b','kaku1b','hu1b'];


//使う変数定義
var koma;//初めてクリックした駒、背景は青ではないもの
var komatable;//駒のいるテーブル
var komalocation;//駒のtdの位置
var a,b;//komaのTDの段、筋
var turn = 0;//先手玉か後手王かのターン
var komataked;//取られる駒、背景は青いもの
var komatakedlocation;//取られる駒の位置、移動先の位置
var ta,tb;//取られる駒の段筋
var komaget;//boxに入れる駒
var komacheck = [];//駒が行けるマス、配列
var basertable;//詰んできた駒の元のtable

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

//駒がクリックされたら

$('#tbody-board').on('click','img',function(){
	if ($(this).parents('td').css('background-color')!='rgb(153, 217, 234)'){//背景が青でない、移動元の駒
		koma = $(this).attr('title');//駒名
		komatable = $(this).parents('table').attr('id');//駒の位置はboxかboardか
		
		if (komatable == 'tbody-board'){//board上の駒、駒の移動ルールに従い移動する
			a = $('#tbody-board tr').index($(this).parents('tr'));//段
			b = $('#tbody-board tr:eq('+a+') td').index($(this).parents('td'));//筋
			komalocation = $('#tbody-board tr:eq('+a+') td:eq('+b+')');
		}
		
		
		$('td').css('background','rgb(239, 228, 176)');//前まで変えた背景色を全部リセット
		$(this).parents('td').css('background','rgb(237, 28, 36)');//クリックした駒の背景を赤に
		
		if (turn==0){//玉側
			if (koma=='kyousha0a'){
				kyousha0a();
			} else if (koma == 'keima0a' ){	
				keima0a();
			} else if (koma == 'gin0a' ){	
				gin0a();
			} else if (koma == 'kin0'){
				kin0();
			} else if (koma == 'ou0'){
				ou0();
			} else if (koma == 'hisha0a'){
				hisha0a();
			} else if (koma == 'kaku0a'){
				kaku0a();
			} else if (koma == 'hu0a'){
				hu0a();
			} else if (koma=='kyousha0b'){
				kyousha0b();
			} else if (koma == 'keima0b' ){	
				keima0b();
			} else if (koma == 'gin0b' ){	
				gin0b();
			} else if (koma == 'hisha0b'){
				hisha0b();
			} else if (koma == 'kaku0b'){
				kaku0b();
			} else if (koma == 'hu0b'){
					hu0b();
			} 
		} else if (turn==1){//王側
			if (koma=='kyousha1a'){
				kyousha1a();
			} else if (koma == 'keima1a' ){	
				keima1a();
			} else if (koma == 'gin1a' ){	
				gin1a();
			} else if (koma == 'kin1'){
				kin1();
			} else if (koma == 'ou1'){
				ou1();
			} else if (koma == 'hisha1a'){
				hisha1a();
			} else if (koma == 'kaku1a'){
				kaku1a();
			} else if (koma == 'hu1a'){
				hu1a();
			} else if (koma=='kyousha1b'){
				kyousha1b();
			} else if (koma == 'keima1b' ){	
				keima1b();
			} else if (koma == 'gin1b' ){	
				gin1b();
			} else if (koma == 'hisha1b'){
				hisha1b();
			} else if (koma == 'kaku1b'){
				kaku1b();
			} else if (koma == 'hu1b'){
				hu1b();
			} 
		}
	}
})

//箱から打つ
$('#tbody-box0').on('click','img',function(){
	if ($(this).parents('td').css('background-color')!='rgb(153, 217, 234)'){//背景が青でない、移動元の駒
		koma = $(this).attr('title');//駒名
		komatable = $(this).parents('table').attr('id');//駒の位置はboxかboardか

		if (komatable == 'tbody-board'){//board上の駒、駒の移動ルールに従い移動する
			a = $('#tbody-board tr').index($(this).parents('tr'));//段
			b = $('#tbody-board tr:eq('+a+') td').index($(this).parents('td'));//筋
			komalocation = $('#tbody-board tr:eq('+a+') td:eq('+b+')');
		}

		$('td').css('background','rgb(239, 228, 176)');//前まで変えた背景色を全部リセット
		$(this).parents('td').css('background','rgb(237, 28, 36)');//クリックした駒の背景を赤に

		if (turn==0){//玉側
			if (koma=='kyousha0a'){
				kyousha0a();
			} else if (koma == 'keima0a' ){	
				keima0a();
			} else if (koma == 'gin0a' ){	
				gin0a();
			} else if (koma == 'kin0'){
				kin0();
			} else if (koma == 'ou0'){
				ou0();
			} else if (koma == 'hisha0a'){
				hisha0a();
			} else if (koma == 'kaku0a'){
				kaku0a();
			} else if (koma == 'hu0a'){
				hu0a();
			} else if (koma=='kyousha0b'){
				kyousha0b();
			} else if (koma == 'keima0b' ){	
				keima0b();
			} else if (koma == 'gin0b' ){	
				gin0b();
			} else if (koma == 'hisha0b'){
				hisha0b();
			} else if (koma == 'kaku0b'){
				kaku0b();
			} else if (koma == 'hu0b'){
					hu0b();
			} 
		} else if (turn==1){//王側
			if (koma=='kyousha1a'){
				kyousha1a();
			} else if (koma == 'keima1a' ){	
				keima1a();
			} else if (koma == 'gin1a' ){	
				gin1a();
			} else if (koma == 'kin1'){
				kin1();
			} else if (koma == 'ou1'){
				ou1();
			} else if (koma == 'hisha1a'){
				hisha1a();
			} else if (koma == 'kaku1a'){
				kaku1a();
			} else if (koma == 'hu1a'){
				hu1a();
			} else if (koma=='kyousha1b'){
				kyousha1b();
			} else if (koma == 'keima1b' ){	
				keima1b();
			} else if (koma == 'gin1b' ){	
				gin1b();
			} else if (koma == 'hisha1b'){
				hisha1b();
			} else if (koma == 'kaku1b'){
				kaku1b();
			} else if (koma == 'hu1b'){
				hu1b();
			} 
		}
	}
})

$('#tbody-box1').on('click','img',function(){
	if ($(this).parents('td').css('background-color')!='rgb(153, 217, 234)'){//背景が青でない、移動元の駒
		koma = $(this).attr('title');//駒名
		komatable = $(this).parents('table').attr('id');//駒の位置はboxかboardか
		
		if (komatable == 'tbody-board'){//board上の駒、駒の移動ルールに従い移動する
			a = $('#tbody-board tr').index($(this).parents('tr'));//段
			b = $('#tbody-board tr:eq('+a+') td').index($(this).parents('td'));//筋
			komalocation = $('#tbody-board tr:eq('+a+') td:eq('+b+')');
		}
		
		
		$('td').css('background','rgb(239, 228, 176)');//前まで変えた背景色を全部リセット
		$(this).parents('td').css('background','rgb(237, 28, 36)');//クリックした駒の背景を赤に
		
		if (turn==0){//玉側
			if (koma=='kyousha0a'){
				kyousha0a();
			} else if (koma == 'keima0a' ){	
				keima0a();
			} else if (koma == 'gin0a' ){	
				gin0a();
			} else if (koma == 'kin0'){
				kin0();
			} else if (koma == 'ou0'){
				ou0();
			} else if (koma == 'hisha0a'){
				hisha0a();
			} else if (koma == 'kaku0a'){
				kaku0a();
			} else if (koma == 'hu0a'){
				hu0a();
			} else if (koma=='kyousha0b'){
				kyousha0b();
			} else if (koma == 'keima0b' ){	
				keima0b();
			} else if (koma == 'gin0b' ){	
				gin0b();
			} else if (koma == 'hisha0b'){
				hisha0b();
			} else if (koma == 'kaku0b'){
				kaku0b();
			} else if (koma == 'hu0b'){
					hu0b();
			} 
		} else if (turn==1){//王側
			if (koma=='kyousha1a'){
				kyousha1a();
			} else if (koma == 'keima1a' ){	
				keima1a();
			} else if (koma == 'gin1a' ){	
				gin1a();
			} else if (koma == 'kin1'){
				kin1();
			} else if (koma == 'ou1'){
				ou1();
			} else if (koma == 'hisha1a'){
				hisha1a();
			} else if (koma == 'kaku1a'){
				kaku1a();
			} else if (koma == 'hu1a'){
				hu1a();
			} else if (koma=='kyousha1b'){
				kyousha1b();
			} else if (koma == 'keima1b' ){	
					keima1b();
			} else if (koma == 'gin1b' ){	
				gin1b();
			} else if (koma == 'hisha1b'){
				hisha1b();
			} else if (koma == 'kaku1b'){
				kaku1b();
			} else if (koma == 'hu1b'){
				hu1b();
			} 
		}
	}
})

//駒の動き
//香車
function kyousha0a(){
	if (komatable=='tbody-box0'){//駒はbox0にある
	for (var i=1; i<9; i++) {
				$('#tbody-board tr:eq('+i+') td:not(:has(img))').css('background','rgb(153, 217, 234)');
		}
	} else if (komatable == 'tbody-board'){//駒はboardにある
		//動ける位置
			for (var i=0; i<a; i++ ){
				if($('#tbody-board tr:eq('+(a-1-i)+') td:eq('+b+')').children('img').length==0){
					$('#tbody-board tr:eq('+(a-1-i)+') td:eq('+b+')').css('background','rgb(153, 217, 234)');
				} else if (koma0.indexOf($('#tbody-board tr:eq('+(a-1-i)+') td:eq('+b+')').children('img').attr('title'))!=-1){//自分の駒
					break;
				} else if (koma0.indexOf($('#tbody-board tr:eq('+(a-1-i)+') td:eq('+b+')').children('img').attr('title'))==-1){//相手の駒
					$('#tbody-board tr:eq('+(a-1-i)+') td:eq('+b+')').css('background','rgb(153, 217, 234)');
					break;
				}
			}
	}
}

//成香
function kyousha0b(){
	//動ける位置
	if (a!=0&&b!=0){
		komacheck = [
			$('#tbody-board tr:eq('+(a-1)+') td:eq('+(b-1)+')'),
			$('#tbody-board tr:eq('+(a-1)+') td:eq('+b+')'),
			$('#tbody-board tr:eq('+(a-1)+') td:eq('+(b+1)+')'),
			$('#tbody-board tr:eq('+(a)+') td:eq('+(b-1)+')'),
			$('#tbody-board tr:eq('+(a)+') td:eq('+(b+1)+')'),
			$('#tbody-board tr:eq('+(a+1)+') td:eq('+b+')')
			];
	} else if (a!=0&&b==0){
		komacheck = [
			$('#tbody-board tr:eq('+(a-1)+') td:eq('+b+')'),
			$('#tbody-board tr:eq('+(a-1)+') td:eq('+(b+1)+')'),
			$('#tbody-board tr:eq('+(a)+') td:eq('+(b+1)+')'),
			$('#tbody-board tr:eq('+(a+1)+') td:eq('+b+')')
			];
	} else if (a==0&&b!=0){
		komacheck = [
			$('#tbody-board tr:eq('+(a)+') td:eq('+(b-1)+')'),
			$('#tbody-board tr:eq('+(a)+') td:eq('+(b+1)+')'),
			$('#tbody-board tr:eq('+(a+1)+') td:eq('+b+')')
			];
	} else if (a==0&&b==0){
		komacheck = [
			$('#tbody-board tr:eq('+(a)+') td:eq('+(b+1)+')'),
			$('#tbody-board tr:eq('+(a+1)+') td:eq('+b+')')
			];
	}
	
	for (var i=0; i<komacheck.length; i++){
		if((komacheck[i].children('img').length==0)||koma0.indexOf(komacheck[i].children('img').attr('title'))==-1){
			komacheck[i].css('background','rgb(153, 217, 234)');
		} 
	}
}	
	
//桂馬
function keima0a(){
	if (komatable=='tbody-box0'){//駒はbox0にある
	for (var i=2; i<9; i++) {
				$('#tbody-board tr:eq('+i+') td:not(:has(img))').css('background','rgb(153, 217, 234)');
		}
	} else if (komatable == 'tbody-board'){//駒はboardにある

		//動ける位置
		if (b!=0){
			komacheck = [
			$('#tbody-board tr:eq('+(a-2)+') td:eq('+(b-1)+')'),
			$('#tbody-board tr:eq('+(a-2)+') td:eq('+(b+1)+')')
			];
		} else {
			komacheck = [$('#tbody-board tr:eq('+(a-2)+') td:eq('+(b+1)+')')]
		}
		
		for (var i=0; i<komacheck.length; i++){
			if((komacheck[i].children('img').length==0)||koma0.indexOf(komacheck[i].children('img').attr('title'))==-1){
				komacheck[i].css('background','rgb(153, 217, 234)');
			} 
		}
	}
}

//成桂
function keima0b(){
	//動ける位置
	if (a!=0&&b!=0){
		komacheck = [
			$('#tbody-board tr:eq('+(a-1)+') td:eq('+(b-1)+')'),
			$('#tbody-board tr:eq('+(a-1)+') td:eq('+b+')'),
			$('#tbody-board tr:eq('+(a-1)+') td:eq('+(b+1)+')'),
			$('#tbody-board tr:eq('+(a)+') td:eq('+(b-1)+')'),
			$('#tbody-board tr:eq('+(a)+') td:eq('+(b+1)+')'),
			$('#tbody-board tr:eq('+(a+1)+') td:eq('+b+')')
			];
	} else if (a!=0&&b==0){
		komacheck = [
			$('#tbody-board tr:eq('+(a-1)+') td:eq('+b+')'),
			$('#tbody-board tr:eq('+(a-1)+') td:eq('+(b+1)+')'),
			$('#tbody-board tr:eq('+(a)+') td:eq('+(b+1)+')'),
			$('#tbody-board tr:eq('+(a+1)+') td:eq('+b+')')
			];
	} else if (a==0&&b!=0){
		komacheck = [
			$('#tbody-board tr:eq('+(a)+') td:eq('+(b-1)+')'),
			$('#tbody-board tr:eq('+(a)+') td:eq('+(b+1)+')'),
			$('#tbody-board tr:eq('+(a+1)+') td:eq('+b+')')
			];
	} else if (a==0&&b==0){
		komacheck = [
			$('#tbody-board tr:eq('+(a)+') td:eq('+(b+1)+')'),
			$('#tbody-board tr:eq('+(a+1)+') td:eq('+b+')')
			];
	}
	
	for (var i=0; i<komacheck.length; i++){
		if((komacheck[i].children('img').length==0)||koma0.indexOf(komacheck[i].children('img').attr('title'))==-1){
			komacheck[i].css('background','rgb(153, 217, 234)');
		} 
	}
}	

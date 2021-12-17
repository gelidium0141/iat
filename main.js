var repo_site = "https://gelidium0141.github.io/iat/";


var fullscreen_start ={
  type: 'fullscreen',
  message: '<p>これからは全画面表示で課題を行います。下のボタンをクリックしてください。</p>',
  button_label:"全画面表示に切り替え",
  fullscreen_mode: true
};

var experimentstart = {
    type: 'instructions',
    pages: ["<p style = text-align: center'>"+"<img src='" + repo_site + "experiment/me_notme.png' width='55%'></img>"+"<p>これから、画面中央に表示される単語について自分に当てはまるかを判断する課題を行っていただきます<br></p>"+"<p><strong>ここでは、自分について判断するのであり、先ほど思い浮かべた友人についての判断ではありません</strong>"+
            "<p>課題は全部で4回あります</p>"+"<p>準備ができたら次へを押して回答して下さい</p>"
    ],
    allow_backward: false,
    show_clickable_nav: true,
    button_label_next: "次へ",
  };


var instructions_block1 = {
    type: 'html-keyboard-response',
    stimulus:"<p style = text-align: center'>"+"<img src='" + repo_site + "experiment/me_notme.png' width='55%'></img>"+"<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'><strong>これは練習です</strong><br>"+"表示された単語が自分に当てはまると思ったら左手の中指で<strong>E</strong>キーを押してください<br>"+"表示された単語が自分には当てはまらないと思ったら右手の中指で<strong>I</strong>キーを押してください<br>"+"単語は一度に一つだけ出てきます。<br><br>" +" できるだけ早く、正確にキーを押してください<br> " +"<p><strong>ここでは、自分について判断するのであり、先ほど思い浮かべた友人についての判断ではありません</strong><br><br>"+"準備ができたらスペースキーを押して始めて下さい</div>",
    choices: [' ']
  };

var trial_block1 = {
    timeline:[
     {
       type: 'html-keyboard-response',
       stimulus: jsPsych.timelineVariable('stimulus'),
       choices: ['E', 'I'],
       prompt:"<p style='position: absolute; top: 15%; left: 20%'><font size='6'>自分に当てはまるなら<br><br></font>" + "<font size='7'><strong>E</strong>キー</font></p>"+"<font size='6'><p style='position: absolute; top: 15%; right: 20%'>自分に当てはまらないなら<br><br></font>"+"<font size='7'><strong>I</strong>キー</font></p>",
       post_trial_gap: 50,
       data: { iat_type: 'practice_1',
               number: jsPsych.timelineVariable('number')
      }
    }
   ],
timeline_variables: [
{stimulus: '<p style="font-size: 60px">社交的な</p>', stim_key_association: "right", number:"1"},
{stimulus: '<p style="font-size: 60px">活力のある</p>', stim_key_association: "left", number:"2"},
{stimulus: '<p style="font-size: 60px">話好きな</p>', stim_key_association: "right", number:"3"},
{stimulus: '<p style="font-size: 60px">愛想のよい</p>', stim_key_association: "left", number:"4"},
{stimulus: '<p style="font-size: 60px">陽気な</p>', stim_key_association: "right", number:"5"},
{stimulus: '<p style="font-size: 60px">退屈な</p>', stim_key_association: "left", number:"6"},
{stimulus: '<p style="font-size: 60px">静かな</p>', stim_key_association: "right", number:"7"},
{stimulus: '<p style="font-size: 60px">反社会的な</p>', stim_key_association: "left", number:"8"},
{stimulus: '<p style="font-size: 60px">恥ずかしがりやな</p>', stim_key_association: "right", number:"9"},
{stimulus: '<p style="font-size: 60px">内向的な</p>', stim_key_association: "left", number:"10"},
{stimulus: '<p style="font-size: 60px">まめな</p>', stim_key_association: "right", number:"11"},
{stimulus: '<p style="font-size: 60px">几帳面な</p>', stim_key_association: "left", number:"12"},
{stimulus: '<p style="font-size: 60px">勤勉な</p>', stim_key_association: "right", number:"13"},
{stimulus: '<p style="font-size: 60px">慎重な</p>', stim_key_association: "left", number:"14"},
{stimulus: '<p style="font-size: 60px">落ち着いた</p>', stim_key_association: "right", number:"15"},
{stimulus: '<p style="font-size: 60px">責任感のない</p>', stim_key_association: "left", number:"16"},
{stimulus: '<p style="font-size: 60px">不注意な</p>', stim_key_association: "right", number:"17"},
{stimulus: '<p style="font-size: 60px">怠惰な</p>', stim_key_association: "left", number:"18"},
{stimulus: '<p style="font-size: 60px">だらしない</p>', stim_key_association: "right", number:"19"},
{stimulus: '<p style="font-size: 60px">わがままな</p>', stim_key_association: "left", number:"20"},
{stimulus: '<p style="font-size: 60px">正直な</p>', stim_key_association: "right", number:"21"},
{stimulus: '<p style="font-size: 60px">信頼できる</p>', stim_key_association: "left", number:"22"},
{stimulus: '<p style="font-size: 60px">寛大な</p>', stim_key_association: "right", number:"23"},
{stimulus: '<p style="font-size: 60px">やさしい</p>', stim_key_association: "left", number:"24"},
{stimulus: '<p style="font-size: 60px">あたたかい</p>', stim_key_association: "right", number:"25"},
{stimulus: '<p style="font-size: 60px">自己中心的な</p>', stim_key_association: "left", number:"26"},
{stimulus: '<p style="font-size: 60px">きざな</p>', stim_key_association: "right", number:"27"},
{stimulus: '<p style="font-size: 60px">欲張りな</p>', stim_key_association: "left", number:"28"},
{stimulus: '<p style="font-size: 60px">偉そうな</p>', stim_key_association: "right", number:"29"},
{stimulus: '<p style="font-size: 60px">つまらない</p>', stim_key_association: "left", number:"30"},
{stimulus: '<p style="font-size: 60px">感じのいい</p>', stim_key_association: "right", number:"31"},
{stimulus: '<p style="font-size: 60px">情け深い</p>', stim_key_association: "left", number:"32"},
{stimulus: '<p style="font-size: 60px">忍耐強い</p>', stim_key_association: "right", number:"33"},
{stimulus: '<p style="font-size: 60px">気取らない</p>', stim_key_association: "left", number:"34"},
{stimulus: '<p style="font-size: 60px">愉快な</p>', stim_key_association: "right", number:"35"},
{stimulus: '<p style="font-size: 60px">短気な</p>', stim_key_association: "left", number:"36"},
{stimulus: '<p style="font-size: 60px">攻撃的な</p>', stim_key_association: "right", number:"37"},
{stimulus: '<p style="font-size: 60px">不愛想な</p>', stim_key_association: "left", number:"38"},
{stimulus: '<p style="font-size: 60px">頑固な</p>', stim_key_association: "right", number:"39"},
{stimulus: '<p style="font-size: 60px">起伏の激しい</p>', stim_key_association: "left", number:"40"},
{stimulus: '<p style="font-size: 60px">繊細な</p>', stim_key_association: "right", number:"41"},
{stimulus: '<p style="font-size: 60px">神経質な</p>', stim_key_association: "left", number:"42"},
{stimulus: '<p style="font-size: 60px">不機嫌な</p>', stim_key_association: "right", number:"43"},
{stimulus: '<p style="font-size: 60px">気まぐれな</p>', stim_key_association: "left", number:"44"},
{stimulus: '<p style="font-size: 60px">依存的な</p>', stim_key_association: "right", number:"45"},
{stimulus: '<p style="font-size: 60px">勇敢な</p>', stim_key_association: "left", number:"46"},
{stimulus: '<p style="font-size: 60px">無情な</p>', stim_key_association: "right", number:"47"},
{stimulus: '<p style="font-size: 60px">自信のある</p>', stim_key_association: "left", number:"48"},
{stimulus: '<p style="font-size: 60px">冷たい</p>', stim_key_association: "right", number:"49"},
{stimulus: '<p style="font-size: 60px">無神経な</p>', stim_key_association: "left", number:"50"},
{stimulus: '<p style="font-size: 60px">開放的な</p>', stim_key_association: "right", number:"51"},
{stimulus: '<p style="font-size: 60px">洞察力のある</p>', stim_key_association: "left", number:"52"},
{stimulus: '<p style="font-size: 60px">明瞭な</p>', stim_key_association: "right", number:"53"},
{stimulus: '<p style="font-size: 60px">異端な</p>', stim_key_association: "left", number:"54"},
{stimulus: '<p style="font-size: 60px">直感的な</p>', stim_key_association: "right", number:"55"},
{stimulus: '<p style="font-size: 60px">知性的な</p>', stim_key_association: "left", number:"56"},
{stimulus: '<p style="font-size: 60px">想像力豊かな</p>', stim_key_association: "right", number:"57"},
{stimulus: '<p style="font-size: 60px">素朴な</p>', stim_key_association: "left", number:"58"},
{stimulus: '<p style="font-size: 60px">保守的な</p>', stim_key_association: "right", number:"59"},
{stimulus: '<p style="font-size: 60px">狭量な</p>', stim_key_association: "left", number:"60"}
],
randomize_order:true,
repetitions: 1
};



var instructions_block2 = {
     type: 'html-keyboard-response',
     stimulus:"<p style = text-align: center'>"+"<img src='" + repo_site + "experiment/me_notme.png' width='55%'></img>"+"<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'><strong>これは本番です</strong><br>"+"表示された単語が自分に当てはまると思ったら左手の中指で<strong>E</strong>キーを押してください<br>"+"表示された単語が自分には当てはまらないと思ったら右手の中指で<strong>I</strong>キーを押してください<br>"+"単語は一度に一つだけ出てきます。<br><br>" +" できるだけ早く、正確にキーを押してください<br> " +"<p><strong>ここでは、自分について判断するのであり、先ほど思い浮かべた友人についての判断ではありません</strong><br><br>"+"準備ができたらスペースキーを押して始めて下さい</div>",
     choices: [' ']
    };

    var trial_block2 = {
        timeline:[
         {
           type: 'html-keyboard-response',
           stimulus: jsPsych.timelineVariable('stimulus'),
           choices: ['E', 'I'],
           prompt:"<p style='position: absolute; top: 15%; left: 20%'><font size='6'>自分に当てはまるなら<br><br></font>" + "<font size='7'><strong>E</strong>キー</font></p>"+"<font size='6'><p style='position: absolute; top: 15%; right: 20%'>自分に当てはまらないなら<br><br></font>"+"<font size='7'><strong>I</strong>キー</font></p>",
           post_trial_gap: 50,
           data: { 
             iat_type: 'main_1',
             number:jsPsych.timelineVariable('number')
           }
         }
        ],
     timeline_variables: [
    {stimulus: '<p style="font-size: 60px">社交的な</p>', stim_key_association: "right", number:"1"},
    {stimulus: '<p style="font-size: 60px">活力のある</p>', stim_key_association: "left", number:"2"},
    {stimulus: '<p style="font-size: 60px">話好きな</p>', stim_key_association: "right", number:"3"},
    {stimulus: '<p style="font-size: 60px">愛想のよい</p>', stim_key_association: "left", number:"4"},
    {stimulus: '<p style="font-size: 60px">陽気な</p>', stim_key_association: "right", number:"5"},
    {stimulus: '<p style="font-size: 60px">退屈な</p>', stim_key_association: "left", number:"6"},
    {stimulus: '<p style="font-size: 60px">静かな</p>', stim_key_association: "right", number:"7"},
    {stimulus: '<p style="font-size: 60px">反社会的な</p>', stim_key_association: "left", number:"8"},
    {stimulus: '<p style="font-size: 60px">恥ずかしがりやな</p>', stim_key_association: "right", number:"9"},
    {stimulus: '<p style="font-size: 60px">内向的な</p>', stim_key_association: "left", number:"10"},
    {stimulus: '<p style="font-size: 60px">まめな</p>', stim_key_association: "right", number:"11"},
    {stimulus: '<p style="font-size: 60px">几帳面な</p>', stim_key_association: "left", number:"12"},
    {stimulus: '<p style="font-size: 60px">勤勉な</p>', stim_key_association: "right", number:"13"},
    {stimulus: '<p style="font-size: 60px">慎重な</p>', stim_key_association: "left", number:"14"},
    {stimulus: '<p style="font-size: 60px">落ち着いた</p>', stim_key_association: "right", number:"15"},
    {stimulus: '<p style="font-size: 60px">責任感のない</p>', stim_key_association: "left", number:"16"},
    {stimulus: '<p style="font-size: 60px">不注意な</p>', stim_key_association: "right", number:"17"},
    {stimulus: '<p style="font-size: 60px">怠惰な</p>', stim_key_association: "left", number:"18"},
    {stimulus: '<p style="font-size: 60px">だらしない</p>', stim_key_association: "right", number:"19"},
    {stimulus: '<p style="font-size: 60px">わがままな</p>', stim_key_association: "left", number:"20"},
    {stimulus: '<p style="font-size: 60px">正直な</p>', stim_key_association: "right", number:"21"},
    {stimulus: '<p style="font-size: 60px">信頼できる</p>', stim_key_association: "left", number:"22"},
    {stimulus: '<p style="font-size: 60px">寛大な</p>', stim_key_association: "right", number:"23"},
    {stimulus: '<p style="font-size: 60px">やさしい</p>', stim_key_association: "left", number:"24"},
    {stimulus: '<p style="font-size: 60px">あたたかい</p>', stim_key_association: "right", number:"25"},
    {stimulus: '<p style="font-size: 60px">自己中心的な</p>', stim_key_association: "left", number:"26"},
    {stimulus: '<p style="font-size: 60px">きざな</p>', stim_key_association: "right", number:"27"},
    {stimulus: '<p style="font-size: 60px">欲張りな</p>', stim_key_association: "left", number:"28"},
    {stimulus: '<p style="font-size: 60px">偉そうな</p>', stim_key_association: "right", number:"29"},
    {stimulus: '<p style="font-size: 60px">つまらない</p>', stim_key_association: "left", number:"30"},
    {stimulus: '<p style="font-size: 60px">感じのいい</p>', stim_key_association: "right", number:"31"},
    {stimulus: '<p style="font-size: 60px">情け深い</p>', stim_key_association: "left", number:"32"},
    {stimulus: '<p style="font-size: 60px">忍耐強い</p>', stim_key_association: "right", number:"33"},
    {stimulus: '<p style="font-size: 60px">気取らない</p>', stim_key_association: "left", number:"34"},
    {stimulus: '<p style="font-size: 60px">愉快な</p>', stim_key_association: "right", number:"35"},
    {stimulus: '<p style="font-size: 60px">短気な</p>', stim_key_association: "left", number:"36"},
    {stimulus: '<p style="font-size: 60px">攻撃的な</p>', stim_key_association: "right", number:"37"},
    {stimulus: '<p style="font-size: 60px">不愛想な</p>', stim_key_association: "left", number:"38"},
    {stimulus: '<p style="font-size: 60px">頑固な</p>', stim_key_association: "right", number:"39"},
    {stimulus: '<p style="font-size: 60px">起伏の激しい</p>', stim_key_association: "left", number:"40"},
    {stimulus: '<p style="font-size: 60px">繊細な</p>', stim_key_association: "right", number:"41"},
    {stimulus: '<p style="font-size: 60px">神経質な</p>', stim_key_association: "left", number:"42"},
    {stimulus: '<p style="font-size: 60px">不機嫌な</p>', stim_key_association: "right", number:"43"},
    {stimulus: '<p style="font-size: 60px">気まぐれな</p>', stim_key_association: "left", number:"44"},
    {stimulus: '<p style="font-size: 60px">依存的な</p>', stim_key_association: "right", number:"45"},
    {stimulus: '<p style="font-size: 60px">勇敢な</p>', stim_key_association: "left", number:"46"},
    {stimulus: '<p style="font-size: 60px">無情な</p>', stim_key_association: "right", number:"47"},
    {stimulus: '<p style="font-size: 60px">自信のある</p>', stim_key_association: "left", number:"48"},
    {stimulus: '<p style="font-size: 60px">冷たい</p>', stim_key_association: "right", number:"49"},
    {stimulus: '<p style="font-size: 60px">無神経な</p>', stim_key_association: "left", number:"50"},
    {stimulus: '<p style="font-size: 60px">開放的な</p>', stim_key_association: "right", number:"51"},
    {stimulus: '<p style="font-size: 60px">洞察力のある</p>', stim_key_association: "left", number:"52"},
    {stimulus: '<p style="font-size: 60px">明瞭な</p>', stim_key_association: "right", number:"53"},
    {stimulus: '<p style="font-size: 60px">異端な</p>', stim_key_association: "left", number:"54"},
    {stimulus: '<p style="font-size: 60px">直感的な</p>', stim_key_association: "right", number:"55"},
    {stimulus: '<p style="font-size: 60px">知性的な</p>', stim_key_association: "left", number:"56"},
    {stimulus: '<p style="font-size: 60px">想像力豊かな</p>', stim_key_association: "right", number:"57"},
    {stimulus: '<p style="font-size: 60px">素朴な</p>', stim_key_association: "left", number:"58"},
    {stimulus: '<p style="font-size: 60px">保守的な</p>', stim_key_association: "right", number:"59"},
    {stimulus: '<p style="font-size: 60px">狭量な</p>', stim_key_association: "left", number:"60"}
    ],
    randomize_order:true,
    repetitions: 2
    };

var instructions_block3 = {
        type: 'html-keyboard-response',
        stimulus:"<p style = text-align: center'>"+"<img src='" + repo_site + "experiment/notme_me.png' width='55%'></img>"+"<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'><strong>先ほどの課題とは名前の位置が逆になっています。</strong><br>"+"<strong>これは練習です</strong><br>"+"表示された単語が自分には当てはまらないと思ったら左手の中指で<strong>E</strong>キーを押してください<br>"+"表示された単語が自分に当てはまると思ったら右手の中指で<strong>I</strong>キーを押してください<br>"+"単語は一度に一つだけ出てきます。<br><br>" +" できるだけ早く、正確にキーを押してください<br> " +"<p><strong>ここでは、自分について判断するのであり、先ほど思い浮かべた友人についての判断ではありません</strong><br><br>"+"準備ができたらスペースキーを押して始めて下さい</div>",
        choices: [' ']
       };
     
var trial_block3 = {
        timeline:[
         {
           type: 'html-keyboard-response',
           stimulus: jsPsych.timelineVariable('stimulus'),
           choices: ['E', 'I'],
           prompt:"<p style='position: absolute; top: 15%; left: 20%'><font size='6'>自分に当てはまらないなら<br><br></font>" + "<font size='7'><strong>E</strong>キー</font></p>"+"<font size='6'><p style='position: absolute; top: 15%; right: 20%'>自分に当てはまるなら<br><br></font>"+"<font size='7'><strong>I</strong>キー</font></p>",
           post_trial_gap: 50,
           data: { iat_type: 'practice_2',
           number:jsPsych.timelineVariable('number')
          }
        }
       ],
    timeline_variables: [
   {stimulus: '<p style="font-size: 60px">社交的な</p>', stim_key_association: "right", number:"1"},
   {stimulus: '<p style="font-size: 60px">活力のある</p>', stim_key_association: "left", number:"2"},
   {stimulus: '<p style="font-size: 60px">話好きな</p>', stim_key_association: "right", number:"3"},
   {stimulus: '<p style="font-size: 60px">愛想のよい</p>', stim_key_association: "left", number:"4"},
   {stimulus: '<p style="font-size: 60px">陽気な</p>', stim_key_association: "right", number:"5"},
   {stimulus: '<p style="font-size: 60px">退屈な</p>', stim_key_association: "left", number:"6"},
   {stimulus: '<p style="font-size: 60px">静かな</p>', stim_key_association: "right", number:"7"},
   {stimulus: '<p style="font-size: 60px">反社会的な</p>', stim_key_association: "left", number:"8"},
   {stimulus: '<p style="font-size: 60px">恥ずかしがりやな</p>', stim_key_association: "right", number:"9"},
   {stimulus: '<p style="font-size: 60px">内向的な</p>', stim_key_association: "left", number:"10"},
   {stimulus: '<p style="font-size: 60px">まめな</p>', stim_key_association: "right", number:"11"},
   {stimulus: '<p style="font-size: 60px">几帳面な</p>', stim_key_association: "left", number:"12"},
   {stimulus: '<p style="font-size: 60px">勤勉な</p>', stim_key_association: "right", number:"13"},
   {stimulus: '<p style="font-size: 60px">慎重な</p>', stim_key_association: "left", number:"14"},
   {stimulus: '<p style="font-size: 60px">落ち着いた</p>', stim_key_association: "right", number:"15"},
   {stimulus: '<p style="font-size: 60px">責任感のない</p>', stim_key_association: "left", number:"16"},
   {stimulus: '<p style="font-size: 60px">不注意な</p>', stim_key_association: "right", number:"17"},
   {stimulus: '<p style="font-size: 60px">怠惰な</p>', stim_key_association: "left", number:"18"},
   {stimulus: '<p style="font-size: 60px">だらしない</p>', stim_key_association: "right", number:"19"},
   {stimulus: '<p style="font-size: 60px">わがままな</p>', stim_key_association: "left", number:"20"},
   {stimulus: '<p style="font-size: 60px">正直な</p>', stim_key_association: "right", number:"21"},
   {stimulus: '<p style="font-size: 60px">信頼できる</p>', stim_key_association: "left", number:"22"},
   {stimulus: '<p style="font-size: 60px">寛大な</p>', stim_key_association: "right", number:"23"},
   {stimulus: '<p style="font-size: 60px">やさしい</p>', stim_key_association: "left", number:"24"},
   {stimulus: '<p style="font-size: 60px">あたたかい</p>', stim_key_association: "right", number:"25"},
   {stimulus: '<p style="font-size: 60px">自己中心的な</p>', stim_key_association: "left", number:"26"},
   {stimulus: '<p style="font-size: 60px">きざな</p>', stim_key_association: "right", number:"27"},
   {stimulus: '<p style="font-size: 60px">欲張りな</p>', stim_key_association: "left", number:"28"},
   {stimulus: '<p style="font-size: 60px">偉そうな</p>', stim_key_association: "right", number:"29"},
   {stimulus: '<p style="font-size: 60px">つまらない</p>', stim_key_association: "left", number:"30"},
   {stimulus: '<p style="font-size: 60px">感じのいい</p>', stim_key_association: "right", number:"31"},
   {stimulus: '<p style="font-size: 60px">情け深い</p>', stim_key_association: "left", number:"32"},
   {stimulus: '<p style="font-size: 60px">忍耐強い</p>', stim_key_association: "right", number:"33"},
   {stimulus: '<p style="font-size: 60px">気取らない</p>', stim_key_association: "left", number:"34"},
   {stimulus: '<p style="font-size: 60px">愉快な</p>', stim_key_association: "right", number:"35"},
   {stimulus: '<p style="font-size: 60px">短気な</p>', stim_key_association: "left", number:"36"},
   {stimulus: '<p style="font-size: 60px">攻撃的な</p>', stim_key_association: "right", number:"37"},
   {stimulus: '<p style="font-size: 60px">不愛想な</p>', stim_key_association: "left", number:"38"},
   {stimulus: '<p style="font-size: 60px">頑固な</p>', stim_key_association: "right", number:"39"},
   {stimulus: '<p style="font-size: 60px">起伏の激しい</p>', stim_key_association: "left", number:"40"},
   {stimulus: '<p style="font-size: 60px">繊細な</p>', stim_key_association: "right", number:"41"},
   {stimulus: '<p style="font-size: 60px">神経質な</p>', stim_key_association: "left", number:"42"},
   {stimulus: '<p style="font-size: 60px">不機嫌な</p>', stim_key_association: "right", number:"43"},
   {stimulus: '<p style="font-size: 60px">気まぐれな</p>', stim_key_association: "left", number:"44"},
   {stimulus: '<p style="font-size: 60px">依存的な</p>', stim_key_association: "right", number:"45"},
   {stimulus: '<p style="font-size: 60px">勇敢な</p>', stim_key_association: "left", number:"46"},
   {stimulus: '<p style="font-size: 60px">無情な</p>', stim_key_association: "right", number:"47"},
   {stimulus: '<p style="font-size: 60px">自信のある</p>', stim_key_association: "left", number:"48"},
   {stimulus: '<p style="font-size: 60px">冷たい</p>', stim_key_association: "right", number:"49"},
   {stimulus: '<p style="font-size: 60px">無神経な</p>', stim_key_association: "left", number:"50"},
   {stimulus: '<p style="font-size: 60px">開放的な</p>', stim_key_association: "right", number:"51"},
   {stimulus: '<p style="font-size: 60px">洞察力のある</p>', stim_key_association: "left", number:"52"},
   {stimulus: '<p style="font-size: 60px">明瞭な</p>', stim_key_association: "right", number:"53"},
   {stimulus: '<p style="font-size: 60px">異端な</p>', stim_key_association: "left", number:"54"},
   {stimulus: '<p style="font-size: 60px">直感的な</p>', stim_key_association: "right", number:"55"},
   {stimulus: '<p style="font-size: 60px">知性的な</p>', stim_key_association: "left", number:"56"},
   {stimulus: '<p style="font-size: 60px">想像力豊かな</p>', stim_key_association: "right", number:"57"},
   {stimulus: '<p style="font-size: 60px">素朴な</p>', stim_key_association: "left", number:"58"},
   {stimulus: '<p style="font-size: 60px">保守的な</p>', stim_key_association: "right", number:"59"},
   {stimulus: '<p style="font-size: 60px">狭量な</p>', stim_key_association: "left", number:"60"}
   ],
   randomize_order:true,
   repetitions: 1
   };

var instructions_block4 = {
            type: 'html-keyboard-response',
            stimulus:"<p style = text-align: center'>"+"<img src='" + repo_site + "experiment/notme_me.png' width='55%'></img>"+"<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'><strong>これは本番です</strong><br>"+"表示された単語が自分には当てはまらないと思ったら左手の中指で<strong>E</strong>キーを押してください<br>"+"表示された単語が自分に当てはまると思ったら右手の中指で<strong>I</strong>キーを押してください<br>"+"単語は一度に一つだけ出てきます。<br><br>" +" できるだけ早く、正確にキーを押してください<br> " +"<p><strong>ここでは、自分について判断するのであり、先ほど思い浮かべた友人についての判断ではありません</strong><br><br>"+"準備ができたらスペースキーを押して始めて下さい</div>",
            choices: [' ']
           };
         
var trial_block4 = {
            timeline:[
             {
               type: 'html-keyboard-response',
               stimulus: jsPsych.timelineVariable('stimulus'),
               choices: ['E', 'I'],
               prompt:"<p style='position: absolute; top: 15%; left: 20%'><font size='6'>自分に当てはまらないなら<br><br></font>" + "<font size='7'><strong>E</strong>キー</font></p>"+"<font size='6'><p style='position: absolute; top: 15%; right: 20%'>自分に当てはまるなら<br><br></font>"+"<font size='7'><strong>I</strong>キー</font></p>",
               post_trial_gap: 50,
               data: { iat_type: 'main_2',
               number:jsPsych.timelineVariable('number')
              }
            }
           ],
        timeline_variables: [
       {stimulus: '<p style="font-size: 60px">社交的な</p>', stim_key_association: "right", number:"1"},
       {stimulus: '<p style="font-size: 60px">活力のある</p>', stim_key_association: "left", number:"2"},
       {stimulus: '<p style="font-size: 60px">話好きな</p>', stim_key_association: "right", number:"3"},
       {stimulus: '<p style="font-size: 60px">愛想のよい</p>', stim_key_association: "left", number:"4"},
       {stimulus: '<p style="font-size: 60px">陽気な</p>', stim_key_association: "right", number:"5"},
       {stimulus: '<p style="font-size: 60px">退屈な</p>', stim_key_association: "left", number:"6"},
       {stimulus: '<p style="font-size: 60px">静かな</p>', stim_key_association: "right", number:"7"},
       {stimulus: '<p style="font-size: 60px">反社会的な</p>', stim_key_association: "left", number:"8"},
       {stimulus: '<p style="font-size: 60px">恥ずかしがりやな</p>', stim_key_association: "right", number:"9"},
       {stimulus: '<p style="font-size: 60px">内向的な</p>', stim_key_association: "left", number:"10"},
       {stimulus: '<p style="font-size: 60px">まめな</p>', stim_key_association: "right", number:"11"},
       {stimulus: '<p style="font-size: 60px">几帳面な</p>', stim_key_association: "left", number:"12"},
       {stimulus: '<p style="font-size: 60px">勤勉な</p>', stim_key_association: "right", number:"13"},
       {stimulus: '<p style="font-size: 60px">慎重な</p>', stim_key_association: "left", number:"14"},
       {stimulus: '<p style="font-size: 60px">落ち着いた</p>', stim_key_association: "right", number:"15"},
       {stimulus: '<p style="font-size: 60px">責任感のない</p>', stim_key_association: "left", number:"16"},
       {stimulus: '<p style="font-size: 60px">不注意な</p>', stim_key_association: "right", number:"17"},
       {stimulus: '<p style="font-size: 60px">怠惰な</p>', stim_key_association: "left", number:"18"},
       {stimulus: '<p style="font-size: 60px">だらしない</p>', stim_key_association: "right", number:"19"},
       {stimulus: '<p style="font-size: 60px">わがままな</p>', stim_key_association: "left", number:"20"},
       {stimulus: '<p style="font-size: 60px">正直な</p>', stim_key_association: "right", number:"21"},
       {stimulus: '<p style="font-size: 60px">信頼できる</p>', stim_key_association: "left", number:"22"},
       {stimulus: '<p style="font-size: 60px">寛大な</p>', stim_key_association: "right", number:"23"},
       {stimulus: '<p style="font-size: 60px">やさしい</p>', stim_key_association: "left", number:"24"},
       {stimulus: '<p style="font-size: 60px">あたたかい</p>', stim_key_association: "right", number:"25"},
       {stimulus: '<p style="font-size: 60px">自己中心的な</p>', stim_key_association: "left", number:"26"},
       {stimulus: '<p style="font-size: 60px">きざな</p>', stim_key_association: "right", number:"27"},
       {stimulus: '<p style="font-size: 60px">欲張りな</p>', stim_key_association: "left", number:"28"},
       {stimulus: '<p style="font-size: 60px">偉そうな</p>', stim_key_association: "right", number:"29"},
       {stimulus: '<p style="font-size: 60px">つまらない</p>', stim_key_association: "left", number:"30"},
       {stimulus: '<p style="font-size: 60px">感じのいい</p>', stim_key_association: "right", number:"31"},
       {stimulus: '<p style="font-size: 60px">情け深い</p>', stim_key_association: "left", number:"32"},
       {stimulus: '<p style="font-size: 60px">忍耐強い</p>', stim_key_association: "right", number:"33"},
       {stimulus: '<p style="font-size: 60px">気取らない</p>', stim_key_association: "left", number:"34"},
       {stimulus: '<p style="font-size: 60px">愉快な</p>', stim_key_association: "right", number:"35"},
       {stimulus: '<p style="font-size: 60px">短気な</p>', stim_key_association: "left", number:"36"},
       {stimulus: '<p style="font-size: 60px">攻撃的な</p>', stim_key_association: "right", number:"37"},
       {stimulus: '<p style="font-size: 60px">不愛想な</p>', stim_key_association: "left", number:"38"},
       {stimulus: '<p style="font-size: 60px">頑固な</p>', stim_key_association: "right", number:"39"},
       {stimulus: '<p style="font-size: 60px">起伏の激しい</p>', stim_key_association: "left", number:"40"},
       {stimulus: '<p style="font-size: 60px">繊細な</p>', stim_key_association: "right", number:"41"},
       {stimulus: '<p style="font-size: 60px">神経質な</p>', stim_key_association: "left", number:"42"},
       {stimulus: '<p style="font-size: 60px">不機嫌な</p>', stim_key_association: "right", number:"43"},
       {stimulus: '<p style="font-size: 60px">気まぐれな</p>', stim_key_association: "left", number:"44"},
       {stimulus: '<p style="font-size: 60px">依存的な</p>', stim_key_association: "right", number:"45"},
       {stimulus: '<p style="font-size: 60px">勇敢な</p>', stim_key_association: "left", number:"46"},
       {stimulus: '<p style="font-size: 60px">無情な</p>', stim_key_association: "right", number:"47"},
       {stimulus: '<p style="font-size: 60px">自信のある</p>', stim_key_association: "left", number:"48"},
       {stimulus: '<p style="font-size: 60px">冷たい</p>', stim_key_association: "right", number:"49"},
       {stimulus: '<p style="font-size: 60px">無神経な</p>', stim_key_association: "left", number:"50"},
       {stimulus: '<p style="font-size: 60px">開放的な</p>', stim_key_association: "right", number:"51"},
       {stimulus: '<p style="font-size: 60px">洞察力のある</p>', stim_key_association: "left", number:"52"},
       {stimulus: '<p style="font-size: 60px">明瞭な</p>', stim_key_association: "right", number:"53"},
       {stimulus: '<p style="font-size: 60px">異端な</p>', stim_key_association: "left", number:"54"},
       {stimulus: '<p style="font-size: 60px">直感的な</p>', stim_key_association: "right", number:"55"},
       {stimulus: '<p style="font-size: 60px">知性的な</p>', stim_key_association: "left", number:"56"},
       {stimulus: '<p style="font-size: 60px">想像力豊かな</p>', stim_key_association: "right", number:"57"},
       {stimulus: '<p style="font-size: 60px">素朴な</p>', stim_key_association: "left", number:"58"},
       {stimulus: '<p style="font-size: 60px">保守的な</p>', stim_key_association: "right", number:"59"},
       {stimulus: '<p style="font-size: 60px">狭量な</p>', stim_key_association: "left", number:"60"}
       ],
       randomize_order:true,
       repetitions: 2
       };


var fullscreen_end ={
  type: 'fullscreen',
  message: '<p>以下のボタンをクリックすると、全画面表示を終了します。</p>',
  button_label:"全画面表示を終了",
  fullscreen_mode: false
};

var experimentend = {
    type: 'instructions',
    pages: ["<p>お疲れ様でした。これで単語の振り分け課題は終わりです。</p>"+"<p>次に進んでください。</p>"
    ],
    allow_backward: false,
    show_clickable_nav: true,
    button_label_next: "次へ",
};

var timeline =[];
timeline.push(fullscreen_start);
timeline.push(experimentstart);
timeline.push(instructions_block1);
timeline.push(trial_block1);
timeline.push(instructions_block2);
timeline.push(trial_block2);
timeline.push(instructions_block3);
timeline.push(trial_block3);
timeline.push(instructions_block4);
timeline.push(trial_block4);
timeline.push(fullscreen_end);
timeline.push(experimentend);

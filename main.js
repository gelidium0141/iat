var fullscreen ={
  type: 'fullscreen',
  message: '<p>以下のボタンをクリックすると、画面は全画面表示に切り替わります。実験の際は全画面表示で参加してください。</p>',
  button_label:"全画面表示に切り替え",
  fullscreen_mode: true
};


//名前の取得


var oname_up_options = ["菊池", "佐伯", "笠井", "須知", "希月"];
  var oname_do_options = ["紀史", "悠理", "一昌", "武一","晴乃", "文香", "紘香","千子"];
  
  var name_options_get = {
    type: 'survey-multi-choice',
    questions: [
      {prompt: '<p>次に行う実験で使用します。</p>'+'<b>最もききなじみのない名字</b>を選択してください', name: 'oname_up1', options: oname_up_options, required: true, horizontal: true},
      {prompt: '<b>2番目にききなじみのない名字</b>を選択してください', name: 'oname_up2', options: oname_up_options, required: true, horizontal: true}, 
      {prompt: '<b>最もききなじみのない同性の名前</b>を選択してください', name: 'oname_do1', options: oname_do_options, required: true, horizontal: true},
      {prompt: '<b>２番目にききなじみのない同性の名前</b>を選択してください', name: 'oname_do2', options: oname_do_options, required: true, horizontal: true}
    ],
    button_label: '次へ',
    on_finish: function(data){
      onameup1 = jsPsych.data.get().last(1).values()[0].response.oname_up1;
      onameup2 = jsPsych.data.get().last(1).values()[0].response.oname_up2;
      onamedo1 = jsPsych.data.get().last(1).values()[0].response.oname_do1;
      onamedo2 = jsPsych.data.get().last(1).values()[0].response.oname_do2;
      jsPsych.data.addProperties({name07: onameup1});
      jsPsych.data.addProperties({name08: onameup2});
      jsPsych.data.addProperties({name09: onamedo1});
      jsPsych.data.addProperties({name10: onamedo2});
    }
  };

//練習試行
var instructions_block1 = {
  type: 'html-keyboard-response',
  stimulus:  "<div style='position: absolute; top: 18%; left: 20%'><p>次の概念が出たらeキーを押して下さい :<br><strong>虫</strong>or<strong>わるい</strong></p></div>" +
  "<div style='position: absolute; top: 18%; right: 20%'><p>次の概念が出たらiキーを押してください:<br><strong>よい</strong></p></div>" +
  "<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'><strong>これは練習です</strong><br>"+"虫もしくはわるい意味の単語が出てきたときは左手の中指で<strong>e</strong>キーを押してください。<br>" + "よい意味の単語が出てきたときは右手の中指で<strong>i</strong>キーを押してください<br>"+"単語は一度に一つだけ出てきます。<br><br>" + "もし"+"間違えた場合は、赤い文字でxが表示されます。正しいキーを押しなおしてください<br>" +" できるだけ早く、正確にキーを押してください<br><br> " +"準備ができたらエンターキーを押して始めて下さい</div>",
  choices:["enter"]
};

var trial_block1 = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
      bottom_instructions:'<p>間違えると赤いバツが表示されます。反対のキーを押してください。</p>',
      force_correct_key_press: true,
      display_feedback: true,
      trial_duration: 3000,
      left_category_key: 'e',
      right_category_key: 'i',
      left_category_label: ['むし<br><br>わるい'],
      right_category_label: ['よい'],
      response_ends_trial: true,
      data: {iat_type:'practice'}
    }
  ],
  timeline_variables: [
    {stimulus: "すてきな", stim_key_association: "right"},
    {stimulus: "カブトムシ", stim_key_association: "left"},
    {stimulus: "ひどい", stim_key_association: "left"},
    {stimulus: "卑しい", stim_key_association: "left"},
    {stimulus: "バッタ", stim_key_association: "left"},
    {stimulus: "汚い", stim_key_association: "left"},
    {stimulus: "愚かな", stim_key_association: "left"},
    {stimulus: "優秀な", stim_key_association: "right"},
    {stimulus: "クワガタ", stim_key_association: "left"},
    {stimulus: "素晴らしい", stim_key_association: "right"},
    {stimulus: "美しい", stim_key_association: "right"},
    {stimulus: "ハチ", stim_key_association: "left"}
    ],
  randomize_order:true,
  repetitions: 2
};


//SC-IAT_practice:self+friend_vs_other

var instructions_block2 = {
  type: 'html-keyboard-response',
  stimulus: "<div style='position: absolute; top: 18%; left: 20%'>:次の名前がでてきたらeキーを押してください<br> " +
  "<strong>自分の名前</strong><br>" + "or<br>" + "<strong>友人の名前</strong></div>" + "<div style='position: absolute; top: 18%; right: 20%'>" +
  "次の名前が出てきたらiキーを押してください:<br>"  + "<strong>聞きなじみのない人の名前</strong></div>" +
  "<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'><strong> ここからが本番です</strong>" +"自分もしくは友人の名前が出てきたときは左手の中指で<strong>e</strong>キーを押してください。 <br>" + "聞きなじみのない人の名前が出てきたときは右手の中指で<strong>i</strong>キーを押してください。<br><br>" + "もし" +
 "間違えた場合は、赤い文字でxが表示されます。正しいキーを押しなおしてください。<br>" +
  "できるだけ早く、正確にキーを押してください。<br><br> " +
  "準備ができたらエンターキーを押して始めて下さい</div>",
   choices:["enter"]
};

var trial_block2 = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
      bottom_instructions: '<p>もし間違ったキーを押したら、赤い文字でXが表示されます。正しいキーを押しなおしてください。</p>',
      force_correct_key_press: true,
      display_feedback: true,
      trial_duration: 3000, 
      left_category_key: 'e',
      right_category_key: 'i',
      left_category_label: ['自分の名前<br><br>友人の名前'],
      right_category_label: ['聞きなじみのない人の名前'],
      response_ends_trial: true,
      data: { iat_type: 'practice' }
    }
  ],
  timeline_variables: [
    {stimulus:"asd", stim_key_association: 'left'},
    {stimulus: "jhd", stim_key_association: 'left'},
    {stimulus: "iir", stim_key_association: 'left'},
   {stimulus: "ltitit", stim_key_association: 'left'},
    {stimulus: "pqpqpq", stim_key_association: 'left'},
    {stimulus: "bcvnvhdf", stim_key_association: 'left'},
    {stimulus: function(){
      return onameup1;
      }, stim_key_association: 'right'},
    {stimulus: function(){
      return onameup2;
      }, stim_key_association: 'right'},
    {stimulus: function(){
      return onamedo1;
      }, stim_key_association: 'right'},
    {stimulus: function(){
      return onamedo2;
      }, stim_key_association: 'right'}
  ],
  randomize_order:true,
  repetitions: 2
};

var timeline =[];
timeline.push({
  type: 'fullscreen',
  fullscreen_mode: true
});
timeline.push(name_options_get);
timeline.push(instructions_block1);
timeline.push(trial_block1);
timeline.push(instructions_block2);
timeline.push(trial_block2);
timeline.push({
  type: 'fullscreen',
  fullscreen_mode: false
});
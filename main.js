var repo_site = "https://gelidium0141.github.io/iat/";


var fullscreen_start ={
  type: 'fullscreen',
  message: '<p>以下のボタンをクリックすると、画面は全画面表示に切り替わります。実験の際は全画面表示で参加してください。</p>',
  button_label:"全画面表示に切り替え",
  fullscreen_mode: true
};


//名前の取得
var name_get = {
  type: 'survey-text',
  questions: [
        {prompt: '<p>次に行う課題で刺激として利用するため名前の記入をお願いしております。</p>'+'<p>ここで収集した名前については、次の課題でのみ使用し、分析には使用致しません。</p><br>'+'<b>あなたの名字（例：山田太郎さんなら山田）</b>を入力してください', name: 'name_up', required:'True'},
        {prompt: '<b>あなたの名前（例：山田太郎さんなら太郎）</b>を入力してください', name: 'name_do', required:'True'},
        {prompt: '<b>あなたのあだな</b>を入力してください', name: 'name_sc', required:'True'},
        ],
  button_label: '次へ',
  on_finish: function(data){
    nameup = jsPsych.data.get().last(1).values()[0].response.name_up;
    namedo = jsPsych.data.get().last(1).values()[0].response.name_do;
    namesc = jsPsych.data.get().last(1).values()[0].response.name_sc;
    jsPsych.data.addProperties({name01: nameup});
    jsPsych.data.addProperties({name02: namedo});
    jsPsych.data.addProperties({name05: namesc});
  }
};

var oname_get = {
  type: 'survey-text',
  questions: [
        {prompt: '<p>次に行う課題で刺激として利用するため名前の記入をお願いしております。</p>'+'<p>ここで収集した名前については、次の課題でのみ使用し、分析には使用致しません。<br><br></p>'+'<p>先ほど思い浮かべた友人の名前を入力してください。</p>'+'<p>名前の漢字がどうしてもわからない場合は、ひらがなでお答えください</p><br>'+'<b>先ほど思い浮かべた友人の名字（例：山田太郎さんなら山田）</b>を入力してください', name: 'fname_up', required:'True'},
      　{prompt: '<b>先ほど思い浮かべた友人の名前 （例：山田太郎さんなら太郎）</b>を入力してください', name: 'fname_do', required:'True'},
        {prompt: '<b>先ほど思い浮かべた友人のあだな</b>を入力してください <strong>（あなたが日ごろその人に対して使用するあだなを入力してください）</strong>', name: 'fname_sc', required:'True'},
        ],
  button_label: '次へ',
  on_finish: function(data){
    fnameup = jsPsych.data.get().last(1).values()[0].response.fname_up;
    fnamedo = jsPsych.data.get().last(1).values()[0].response.fname_do;
    fnamesc = jsPsych.data.get().last(1).values()[0].response.fname_sc;
    jsPsych.data.addProperties({name03: fnameup}); 
    jsPsych.data.addProperties({name04: fnamedo});
    jsPsych.data.addProperties({name06: fnamesc});
  }
};


//練習試行
var instructions_block1 = {
  type: "html-keyboard-response",
  stimulus:"<img src='" + repo_site + "experiment/iat_test.png' width='60%'></img>"+"<p style = text-align: center'><strong>これは練習です</strong></p>"+"<p>キーボードを利用した単語の分類課題を行います。</p>"+"<p>画面中央に表示される単語が、左上の<b>「わるい」</b>または<b>「むし」</b>のカテゴリーに当てはまると思ったら<b>「E」</b>キーを、<br>右上の<b>「よい」</b>のカテゴリーに当てはまると思ったら<b>「I」</b>キーを押してください。</p>"+ "<p><b>左右のカテゴリーは固定で、中央の単語が変わります。</b></p>"+"<p>間違えるとX（バツ）が中央に表示されるので、押したキーと反対のキーを押してください</br><b>スペースキー</b>を押すと開始します。</p>"+"<p style = 'font-size: 1.5em;'>単語が表示されたら、なるべく早く回答してください。</p>",
  choices: [" "]
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
      left_category_key: 'E',
      right_category_key: 'I',
      left_category_label: ['わるい<br><br>むし'],
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


//SC-IAT_practice:friend&self_vs_other

var instructions_block2 = {
  type: 'html-keyboard-response',
  stimulus:"<img src='" + repo_site + "experiment/iat_cor.png' width='60%'></img>"+"<p style = text-align: center'><strong>ここからが本番です</strong><br>" +"親友もしくは自分の名前が出てきたときは左手の中指で<strong>E</strong>キーを押してください。 <br>" + "先ほど入力した名前以外の名前が出てきたときは右手の中指で<strong>I</strong>キーを押してください。<br><br>" + "もし" +
 "間違えた場合は、赤い文字でxが表示されます。正しいキーを押しなおしてください。<br>" +
  "できるだけ早く、正確にキーを押してください。<br><br> " +
  "準備ができたらスペースキーを押して始めて下さい</p>",
  choices: [' ']
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
      left_category_key: 'E',
      right_category_key: 'I',
      left_category_label: ['親友<br><br>自分'],
      right_category_label: ['見知らぬ人'],
      response_ends_trial: true,
      data: { iat_type: 'practice' }
    }
  ],
  timeline_variables: [
    {stimulus: function(){
      return nameup;
      }, stim_key_association: 'left'},
    {stimulus: "紀ノ定", stim_key_association: 'right'},
    {stimulus: function(){
        return fnameup;
        }, stim_key_association: 'left'},
    {stimulus: "きりり", stim_key_association: 'right'},
    {stimulus: "いくぽん", stim_key_association: 'right'},
  　{stimulus: function(){
      return namedo;
      }, stim_key_association: 'left'},
    {stimulus: function(){
      return fnamedo;
      }, stim_key_association :'left'},
    {stimulus: "縄田", stim_key_association: 'right'},
    {stimulus: function(){
      return namesc;
      }, stim_key_association: 'left'},
    {stimulus: "きのっち", stim_key_association: 'right'},
    {stimulus: function(){
        return fnamesc;
      }, stim_key_association: 'left'},
    {stimulus: "郁夫", stim_key_association: 'right'},
    {stimulus: "なわちゃん", stim_key_association: 'right'},
    {stimulus: "桐子", stim_key_association: 'right'},
  ],
  repetitions: 2
};

//SC-IAT_main:self+friend_vs_other

var instructions_block3 = {
  type: 'html-keyboard-response',
  stimulus:"<img src='" + repo_site + "experiment/iat_cor.png' width='60%'></img>"+"<p style = text-align: center'><strong>これは先ほどと同じ課題です</strong><br>" +"親友もしくは自分の名前が出てきたときは左手の中指で<strong>E</strong>キーを押してください。 <br>" + "先ほど入力した名前以外の名前が出てきたときは見知らぬ人として右手の中指で<strong>I</strong>キーを押してください。<br><br>" + "もし" +
 "間違えた場合は、赤い文字でxが表示されます。正しいキーを押しなおしてください。<br>" +
  "できるだけ早く、正確にキーを押してください。<br><br> " +
  "準備ができたらスペースキーを押して始めて下さい</p>",
  choices: [' ']
};

var trial_block3 = {
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
      left_category_key: 'E',
      right_category_key: 'I',
      left_category_label: ['親友<br><br>自分'],
      right_category_label: ['見知らぬ人'],
      response_ends_trial: true,
      data: { iat_type: 'main' }
    }
  ],
  timeline_variables: [
    {stimulus: function(){
      return nameup;
      }, stim_key_association: 'left'},
    {stimulus: "紀ノ定", stim_key_association: 'right'},
    {stimulus: function(){
        return fnameup;
        }, stim_key_association: 'left'},
    {stimulus: "きりり", stim_key_association: 'right'},
    {stimulus: "いくぽん", stim_key_association: 'right'},
  　{stimulus: function(){
      return namedo;
      }, stim_key_association: 'left'},
    {stimulus: function(){
      return fnamedo;
      }, stim_key_association :'left'},
    {stimulus: "縄田", stim_key_association: 'right'},
    {stimulus: function(){
      return namesc;
      }, stim_key_association: 'left'},
    {stimulus: "きのっち", stim_key_association: 'right'},
    {stimulus: function(){
        return fnamesc;
      }, stim_key_association: 'left'},
    {stimulus: "郁夫", stim_key_association: 'right'},
    {stimulus: "なわちゃん", stim_key_association: 'right'},
    {stimulus: "桐子", stim_key_association: 'right'},
  ],
  randomize_order:true,
  repetitions: 5
};


//SC-IAT_practice:self+other_vs_friend

var instructions_block4 = {
  type: 'html-keyboard-response',
  stimulus: "<img src='" + repo_site + "experiment/chamge.png' width='60%'></img>"+"<p style = text-align: center'><strong>先ほどとは自己の位置が逆になっています</strong><br>"+"親友の名前が出てきたときは左手の中指で<strong>E</strong>キーを押してください。 <br>" + "先ほど入力した名前以外の名前もしくは自分の名前が出てきたときは右手の中指で<strong>I</strong>キーを押してください。<br><br>" + "もし" +
 "間違えた場合は、赤い文字でxが表示されます。正しいキーを押しなおしてください。<br>" +
  "できるだけ早く、正確にキーを押してください。<br><br> " +
  "準備ができたらスペースキーを押して始めて下さい</p>",
  choices: [' ']
};

var trial_block4 = {
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
      left_category_key: 'E',
      right_category_key: 'I',
      left_category_label: ['親友'],
      right_category_label: ['見知らぬ人<br><br>自分'],
      response_ends_trial: true,
      data: { iat_type: 'practice' }
    }
  ],
  timeline_variables: [
    {stimulus: function(){
      return nameup;
      }, stim_key_association: 'right'},
    {stimulus: "紀ノ定", stim_key_association: 'right'},
    {stimulus: function(){
        return fnameup;
        }, stim_key_association: 'left'},
    {stimulus: "きりり", stim_key_association: 'right'},
    {stimulus: "いくぽん", stim_key_association: 'right'},
  　{stimulus: function(){
      return namedo;
      }, stim_key_association: 'right'},
    {stimulus: function(){
      return fnamedo;
      }, stim_key_association :'left'},
    {stimulus: "縄田", stim_key_association: 'right'},
    {stimulus: function(){
      return namesc;
      }, stim_key_association: 'right'},
    {stimulus: "きのっち", stim_key_association: 'right'},
    {stimulus: function(){
        return fnamesc;
      }, stim_key_association: 'left'},
    {stimulus: "郁夫", stim_key_association: 'right'},
    {stimulus: "なわちゃん", stim_key_association: 'right'},
    {stimulus: "桐子", stim_key_association: 'right'},
  ],
  repetitions: 2
};

//SC-IAT_main:self+other_vs_friend

var instructions_block5 = {
  type: 'html-keyboard-response',
  stimulus:"<img src='" + repo_site + "experiment/iat_inc.png' width='60%'></img>"+"<p style = text-align: center'><strong>これは先ほどと同じ課題です。</strong><br>" + "親友の名前が出てきたときは左手の中指で<strong>E</strong>キーを押してください。 <br>" + "先ほど入力した名前以外の名前もしくは自分の名前が出てきたときは右手の中指で<strong>I</strong>キーを押してください。<br><br>" + "もし" +
  "間違えた場合は、赤い文字でxが表示されます。正しいキーを押しなおしてください。<br>" +
  "できるだけ早く、正確にキーを押してください。<br><br> " +
  "準備ができたらスペースキーを押して始めて下さい</div>",
  choices: [' ']
};

var trial_block5 = {
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
      left_category_key: 'E',
      right_category_key: 'I',
      left_category_label: ['親友'],
      right_category_label: ['見知らぬ人<br><br>自分'],
      response_ends_trial: true,
      data: { iat_type: 'main' }
    }
  ],
  timeline_variables: [
    {stimulus: function(){
      return nameup;
      }, stim_key_association: 'right'},
    {stimulus: "紀ノ定", stim_key_association: 'right'},
    {stimulus: function(){
        return fnameup;
        }, stim_key_association: 'left'},
    {stimulus: "きりり", stim_key_association: 'right'},
    {stimulus: "いくぽん", stim_key_association: 'right'},
  　{stimulus: function(){
      return namedo;
      }, stim_key_association: 'right'},
    {stimulus: function(){
      return fnamedo;
      }, stim_key_association :'left'},
    {stimulus: "縄田", stim_key_association: 'right'},
    {stimulus: function(){
      return namesc;
      }, stim_key_association: 'right'},
    {stimulus: "きのっち", stim_key_association: 'right'},
    {stimulus: function(){
        return fnamesc;
      }, stim_key_association: 'left'},
    {stimulus: "郁夫", stim_key_association: 'right'},
    {stimulus: "なわちゃん", stim_key_association: 'right'},
    {stimulus: "桐子", stim_key_association: 'right'},
  ],
  randomize_order:true,
  repetitions: 5
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
timeline.push(fullscreen_start)
timeline.push(name_get);
timeline.push(oname_get);
timeline.push(instructions_block1);
timeline.push(trial_block1);
timeline.push(instructions_block2);
timeline.push(trial_block2);
timeline.push(instructions_block3);
timeline.push(trial_block3);
timeline.push(instructions_block4);
timeline.push(trial_block4);
timeline.push(instructions_block5);
timeline.push(trial_block5);
timeline.push(fullscreen_end);
timeline.push(experimentend);

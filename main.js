var repo_site = "https://gelidium0141.github.io/iat/";

var stim = []

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
     },
    }
   ],
timeline_variables: [
  {stimulus: '社交的な', stim_key_association: "right", number:"1"},
  {stimulus: '愛想のよい', stim_key_association: "left", number:"2"},
  {stimulus: '陽気な', stim_key_association: "right", number:"3"},
  {stimulus: '退屈な', stim_key_association: "left", number:"4"},
  {stimulus: '恥ずかしがりやな', stim_key_association: "right", number:"5"},
  {stimulus: '内向的な', stim_key_association: "left", number:"6"},
  {stimulus: 'まめな', stim_key_association: "right", number:"7"},
  {stimulus: '几帳面な', stim_key_association: "left", number:"8"},
  {stimulus: '礼儀正しい', stim_key_association: "right", number:"9"},
  {stimulus: '責任感のない', stim_key_association: "left", number:"10"},
  {stimulus: 'だらしない', stim_key_association: "right", number:"11"},
  {stimulus: 'わがままな', stim_key_association: "left", number:"12"},
  {stimulus: '正直な', stim_key_association: "right", number:"13"},
  {stimulus: '寛大な', stim_key_association: "left", number:"14"},
  {stimulus: 'やさしい', stim_key_association: "right", number:"15"},
  {stimulus: '自己中心的な', stim_key_association: "left", number:"16"},
  {stimulus: '偉そうな', stim_key_association: "right", number:"17"},
  {stimulus: 'つまらない', stim_key_association: "left", number:"18"},
  {stimulus: '落ち着いた', stim_key_association: "right", number:"19"},
  {stimulus: '感じのいい', stim_key_association: "left", number:"20"},
  {stimulus: '忍耐強い', stim_key_association: "right", number:"21"},
  {stimulus: '短気な', stim_key_association: "left", number:"22"},
  {stimulus: '不愛想な', stim_key_association: "right", number:"23"},
  {stimulus: '厳しい', stim_key_association: "left", number:"24"},
  {stimulus: '感情的な', stim_key_association: "right", number:"25"},
  {stimulus: '神経質な', stim_key_association: "left", number:"26"},
  {stimulus: '心配性な', stim_key_association: "right", number:"27"},
  {stimulus: '勇敢な', stim_key_association: "left", number:"28"},
  {stimulus: 'たくましい', stim_key_association: "right", number:"29"},
  {stimulus: '無神経な', stim_key_association: "left", number:"30"},
  {stimulus: '明瞭な', stim_key_association: "left", number:"31"},
  {stimulus: '異端な', stim_key_association: "left", number:"32"},
  {stimulus: '直感的な', stim_key_association: "left", number:"33"},
  {stimulus: '素朴な', stim_key_association: "left", number:"34"},
  {stimulus: '頑固な', stim_key_association: "left", number:"35"},
  ],
randomize_order:true,
repetitions: 1
};

var debrief1 = {
  type: "html-keyboard-response",
  stimulus:"<font size='5'><p>先ほどの課題では分類を行う時間が早すぎます。</P>"+"<p>適当に回答せず、もっと慎重に、かつ素早く回答してください。</font></p>"+"<p>上の文章を読んだ方はスペースキーを押して次へ進んでください。</font></p>",
  choices: [' ']
};


var debrief_node1 = {
  timeline: [debrief1],
  conditional_function: function(){
    if(stim[1] <= 350){
      return true;
    } else {
      return false;
  } 
}
}

  

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
          {stimulus: '社交的な', stim_key_association: "right", number:"1"},
          {stimulus: '愛想のよい', stim_key_association: "left", number:"2"},
          {stimulus: '陽気な', stim_key_association: "right", number:"3"},
          {stimulus: '退屈な', stim_key_association: "left", number:"4"},
          {stimulus: '恥ずかしがりやな', stim_key_association: "right", number:"5"},
          {stimulus: '内向的な', stim_key_association: "left", number:"6"},
          {stimulus: 'まめな', stim_key_association: "right", number:"7"},
          {stimulus: '几帳面な', stim_key_association: "left", number:"8"},
          {stimulus: '礼儀正しい', stim_key_association: "right", number:"9"},
          {stimulus: '責任感のない', stim_key_association: "left", number:"10"},
          {stimulus: 'だらしない', stim_key_association: "right", number:"11"},
          {stimulus: 'わがままな', stim_key_association: "left", number:"12"},
          {stimulus: '正直な', stim_key_association: "right", number:"13"},
          {stimulus: '寛大な', stim_key_association: "left", number:"14"},
          {stimulus: 'やさしい', stim_key_association: "right", number:"15"},
          {stimulus: '自己中心的な', stim_key_association: "left", number:"16"},
          {stimulus: '偉そうな', stim_key_association: "right", number:"17"},
          {stimulus: 'つまらない', stim_key_association: "left", number:"18"},
          {stimulus: '落ち着いた', stim_key_association: "right", number:"19"},
          {stimulus: '感じのいい', stim_key_association: "left", number:"20"},
          {stimulus: '忍耐強い', stim_key_association: "right", number:"21"},
          {stimulus: '短気な', stim_key_association: "left", number:"22"},
          {stimulus: '不愛想な', stim_key_association: "right", number:"23"},
          {stimulus: '厳しい', stim_key_association: "left", number:"24"},
          {stimulus: '感情的な', stim_key_association: "right", number:"25"},
          {stimulus: '神経質な', stim_key_association: "left", number:"26"},
          {stimulus: '心配性な', stim_key_association: "right", number:"27"},
          {stimulus: '勇敢な', stim_key_association: "left", number:"28"},
          {stimulus: 'たくましい', stim_key_association: "right", number:"29"},
          {stimulus: '無神経な', stim_key_association: "left", number:"30"},
          {stimulus: '明瞭な', stim_key_association: "left", number:"31"},
          {stimulus: '異端な', stim_key_association: "left", number:"32"},
          {stimulus: '直感的な', stim_key_association: "left", number:"33"},
          {stimulus: '素朴な', stim_key_association: "left", number:"34"},
          {stimulus: '頑固な', stim_key_association: "left", number:"35"},
          ],
    randomize_order:true,
    repetitions: 3
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
        {stimulus: '社交的な', stim_key_association: "right", number:"1"},
          {stimulus: '愛想のよい', stim_key_association: "left", number:"2"},
          {stimulus: '陽気な', stim_key_association: "right", number:"3"},
          {stimulus: '退屈な', stim_key_association: "left", number:"4"},
          {stimulus: '恥ずかしがりやな', stim_key_association: "right", number:"5"},
          {stimulus: '内向的な', stim_key_association: "left", number:"6"},
          {stimulus: 'まめな', stim_key_association: "right", number:"7"},
          {stimulus: '几帳面な', stim_key_association: "left", number:"8"},
          {stimulus: '礼儀正しい', stim_key_association: "right", number:"9"},
          {stimulus: '責任感のない', stim_key_association: "left", number:"10"},
          {stimulus: 'だらしない', stim_key_association: "right", number:"11"},
          {stimulus: 'わがままな', stim_key_association: "left", number:"12"},
          {stimulus: '正直な', stim_key_association: "right", number:"13"},
          {stimulus: '寛大な', stim_key_association: "left", number:"14"},
          {stimulus: 'やさしい', stim_key_association: "right", number:"15"},
          {stimulus: '自己中心的な', stim_key_association: "left", number:"16"},
          {stimulus: '偉そうな', stim_key_association: "right", number:"17"},
          {stimulus: 'つまらない', stim_key_association: "left", number:"18"},
          {stimulus: '落ち着いた', stim_key_association: "right", number:"19"},
          {stimulus: '感じのいい', stim_key_association: "left", number:"20"},
          {stimulus: '忍耐強い', stim_key_association: "right", number:"21"},
          {stimulus: '短気な', stim_key_association: "left", number:"22"},
          {stimulus: '不愛想な', stim_key_association: "right", number:"23"},
          {stimulus: '厳しい', stim_key_association: "left", number:"24"},
          {stimulus: '感情的な', stim_key_association: "right", number:"25"},
          {stimulus: '神経質な', stim_key_association: "left", number:"26"},
          {stimulus: '心配性な', stim_key_association: "right", number:"27"},
          {stimulus: '勇敢な', stim_key_association: "left", number:"28"},
          {stimulus: 'たくましい', stim_key_association: "right", number:"29"},
          {stimulus: '無神経な', stim_key_association: "left", number:"30"},
          {stimulus: '明瞭な', stim_key_association: "left", number:"31"},
          {stimulus: '異端な', stim_key_association: "left", number:"32"},
          {stimulus: '直感的な', stim_key_association: "left", number:"33"},
          {stimulus: '素朴な', stim_key_association: "left", number:"34"},
          {stimulus: '頑固な', stim_key_association: "left", number:"35"},
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
            {stimulus: '社交的な', stim_key_association: "right", number:"1"},
          {stimulus: '愛想のよい', stim_key_association: "left", number:"2"},
          {stimulus: '陽気な', stim_key_association: "right", number:"3"},
          {stimulus: '退屈な', stim_key_association: "left", number:"4"},
          {stimulus: '恥ずかしがりやな', stim_key_association: "right", number:"5"},
          {stimulus: '内向的な', stim_key_association: "left", number:"6"},
          {stimulus: 'まめな', stim_key_association: "right", number:"7"},
          {stimulus: '几帳面な', stim_key_association: "left", number:"8"},
          {stimulus: '礼儀正しい', stim_key_association: "right", number:"9"},
          {stimulus: '責任感のない', stim_key_association: "left", number:"10"},
          {stimulus: 'だらしない', stim_key_association: "right", number:"11"},
          {stimulus: 'わがままな', stim_key_association: "left", number:"12"},
          {stimulus: '正直な', stim_key_association: "right", number:"13"},
          {stimulus: '寛大な', stim_key_association: "left", number:"14"},
          {stimulus: 'やさしい', stim_key_association: "right", number:"15"},
          {stimulus: '自己中心的な', stim_key_association: "left", number:"16"},
          {stimulus: '偉そうな', stim_key_association: "right", number:"17"},
          {stimulus: 'つまらない', stim_key_association: "left", number:"18"},
          {stimulus: '落ち着いた', stim_key_association: "right", number:"19"},
          {stimulus: '感じのいい', stim_key_association: "left", number:"20"},
          {stimulus: '忍耐強い', stim_key_association: "right", number:"21"},
          {stimulus: '短気な', stim_key_association: "left", number:"22"},
          {stimulus: '不愛想な', stim_key_association: "right", number:"23"},
          {stimulus: '厳しい', stim_key_association: "left", number:"24"},
          {stimulus: '感情的な', stim_key_association: "right", number:"25"},
          {stimulus: '神経質な', stim_key_association: "left", number:"26"},
          {stimulus: '心配性な', stim_key_association: "right", number:"27"},
          {stimulus: '勇敢な', stim_key_association: "left", number:"28"},
          {stimulus: 'たくましい', stim_key_association: "right", number:"29"},
          {stimulus: '無神経な', stim_key_association: "left", number:"30"},
          {stimulus: '明瞭な', stim_key_association: "left", number:"31"},
          {stimulus: '異端な', stim_key_association: "left", number:"32"},
          {stimulus: '直感的な', stim_key_association: "left", number:"33"},
          {stimulus: '素朴な', stim_key_association: "left", number:"34"},
          {stimulus: '頑固な', stim_key_association: "left", number:"35"},
          ],
       randomize_order:true,
       repetitions: 3
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
timeline.push(debrief_node1);
timeline.push(instructions_block2);
timeline.push(trial_block2);
timeline.push(instructions_block3);
timeline.push(trial_block3);
timeline.push(debrief_node1);
timeline.push(instructions_block4);
timeline.push(trial_block4);
timeline.push(fullscreen_end);
timeline.push(experimentend);

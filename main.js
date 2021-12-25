var repo_site = "https://gelidium0141.github.io/iat/";

var stim = []

var fullscreen_start ={
  type: 'fullscreen',
  message: '<p>これからは全画面表示で課題を行います。下のボタンをクリックしてください。</p>',
  button_label:"全画面表示に切り替え",
  fullscreen_mode: true
};

var experimentstart1 = {
    type: 'instructions',
    pages: ["<p style = text-align: center'>"+"<img src='" + repo_site + "experiment/me_notme.png' width='55%'></img>"+"<p>これから、画面中央に表示される単語について<br><br>"+"<strong>先ほど思い浮かべた友人に当てはまるかどうか</strong><br><br>"+"判断する課題を行っていただきます<br><br></p>"+
            "<p>課題は全部で3回あります</p>"+"<p>準備ができたら次へを押して回答して下さい</p>"
    ],
    allow_backward: false,
    show_clickable_nav: true,
    button_label_next: "次へ",
  };


var instructions_block1 = {
    type: 'html-keyboard-response',
    stimulus:"<p style = text-align: center'>"+"<img src='" + repo_site + "experiment/me_notme.png' width='55%'></img>"+"<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'><strong>これは練習です</strong><br><br>"+"表示された単語が<strong>先ほど思い浮かべた友人に当てはまる</strong>と思ったら左手の中指で<strong>E</strong>キーを押してください<br>"+"表示された単語が<strong>先ほど思い浮かべた友人に当てはまらない</strong>と思ったら右手の中指で<strong>I</strong>キーを押してください<br>"+"単語は一度に一つだけ出てきます。<br><br>" +" できるだけ早く、正確にキーを押してください<br> " +"<p><strong>ここでは、先ほど思い浮かべた友人について判断してください</strong><br><br>"+"準備ができたらスペースキーを押して始めて下さい</div>",
    choices: [' ']
  };


var trial_block1 = {
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
      left_category_label: ['<font size="6"><p>友人に<br>'+'当てはまる</p></font>'],
      right_category_label: ['<font size="6"><p>友人に<br>'+'当てはまらない</p></font>'],
      response_ends_trial: true,
      data: { iat_type: 'practice_1' }
    }
  ],
timeline_variables: [
    {stimulus: '社交的な', stim_key_association: function(){
      if(selectedRecode1 == 1){
      return "left"
    }else{
      return "right"} ;
    }, number:"1"},
    {stimulus: '愛想のよい', stim_key_association: function(){
      if(selectedRecode2 == 1){
      return "left"
    }else{
      return "right"} ;
    }, number:"2"},
    {stimulus: '陽気な', stim_key_association: function(){
      if(selectedRecode3 == 1){
      return "left"
    }else{
      return "right"} ;
    }, number:"3"},
    {stimulus: '退屈な', stim_key_association: function(){
      if(selectedRecode4 == 1){
      return "left"
    }else{
      return "right"} ;
    }, number:"4"},
    {stimulus: '恥ずかしがりな', stim_key_association: function(){
      if(selectedRecode5 == 1){
      return "left"
    }else{
      return "right"} ;
    }, number:"5"},
    {stimulus: '内向的な', stim_key_association: function(){
      if(selectedRecode6 == 1){
      return "left"
    }else{
      return "right"} ;
    }, number:"6"}, 
    {stimulus: '感情的な', stim_key_association: function(){
      if(selectedRecode25 == 1){
      return "left"
    }else{
      return "right"} ;
    }, number:"25"},
    {stimulus: '神経質な', stim_key_association: function(){
      if(selectedRecode26 == 1){
      return "left"
    }else{
      return "right"} ;
    }, number:"26"},
    {stimulus: '心配性な', stim_key_association: function(){
      if(selectedRecode27 == 1){
      return "left"
    }else{
      return "right"} ;
    }, number:"27"},
    {stimulus: '勇敢な', stim_key_association: function(){
      if(selectedRecode28 == 1){
      return "left"
    }else{
      return "right"} ;
    }, number:"28"},
    {stimulus: 'たくましい', stim_key_association: function(){
      if(selectedRecode29 == 1){
      return "left"
    }else{
      return "right"} ;
    }, number:"29"},
    {stimulus: '無神経な', stim_key_association: function(){
      if(selectedRecode30 == 1){
      return "left"
    }else{
      return "right"} ;
    }, number:"30"},
    {stimulus: '明瞭な', stim_key_association: function(){
      if(selectedRecode31 == 1){
      return "left"
    }else{
      return "right"} ;
    }, number:"31"},
    {stimulus: '素朴な', stim_key_association: function(){
      if(selectedRecode34 == 1){
      return "left"
    }else{
      return "right"} ;
    }, number:"34"},
    {stimulus: '頑固な', stim_key_association: function(){
      if(selectedRecode35 == 1){
      return "left"
    }else{
      return "right"} ;
    }, number:"35"},
],
randomize_order:true,
repetitions: 1
};  

var instructions_block2 = {
     type: 'html-keyboard-response',
     stimulus:"<p style = text-align: center'>"+"<img src='" + repo_site + "experiment/me_notme.png' width='55%'></img>"+"<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'><strong>これは本番です</strong><br><br>"+"表示された単語が<strong>先ほど思い浮かべた友人に当てはまる</strong>と思ったら左手の中指で<strong>E</strong>キーを押してください<br>"+"表示された単語が<strong>先ほど思い浮かべた友人に当てはまらない</strong>と思ったら右手の中指で<strong>I</strong>キーを押してください<br>"+"単語は一度に一つだけ出てきます。<br><br>" +" できるだけ早く、正確にキーを押してください<br> " +"<p><strong>ここでは、先ほど思い浮かべた友人について判断してください</strong><br><br>"+"準備ができたらスペースキーを押して始めて下さい</div>",
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
          left_category_label: ['<font size="6"><p>友人に<br>'+'当てはまる</p></font>'],
          right_category_label: ['<font size="6"><p>友人に<br>'+'当てはまらない</p></font>'],
          response_ends_trial: true,
          data: { iat_type: 'main_1' }
        }
      ],
        timeline_variables: [
          {stimulus: '社交的な', stim_key_association: function(){
            if(selectedRecode1 == 1){
            return "left"
          }else{
            return "right"} ;
          }, number:"1"},
          {stimulus: '愛想のよい', stim_key_association: function(){
            if(selectedRecode2 == 1){
            return "left"
          }else{
            return "right"} ;
          }, number:"2"},
          {stimulus: '陽気な', stim_key_association: function(){
            if(selectedRecode3 == 1){
            return "left"
          }else{
            return "right"} ;
          }, number:"3"},
          {stimulus: '退屈な', stim_key_association: function(){
            if(selectedRecode4 == 1){
            return "left"
          }else{
            return "right"} ;
          }, number:"4"},
          {stimulus: '恥ずかしがりな', stim_key_association: function(){
            if(selectedRecode5 == 1){
            return "left"
          }else{
            return "right"} ;
          }, number:"5"},
          {stimulus: '内向的な', stim_key_association: function(){
            if(selectedRecode6 == 1){
            return "left"
          }else{
            return "right"} ;
          }, number:"6"},
          {stimulus: 'まめな', stim_key_association: function(){
            if(selectedRecode7 == 1){
            return "left"
          }else{
            return "right"} ;
          }, number:"7"},
          {stimulus: '几帳面な', stim_key_association: function(){
            if(selectedRecode8 == 1){
            return "left"
          }else{
            return "right"} ;
          }, number:"8"},
          {stimulus: '礼儀正しい', stim_key_association: function(){
            if(selectedRecode9 == 1){
            return "left"
          }else{
            return "right"} ;
          }, number:"9"},
          {stimulus: '責任感がある', stim_key_association: function(){
            if(selectedRecode10 == 1){
            return "left"
          }else{
            return "right"} ;
          }, number:"10"},
          {stimulus: 'だらしない', stim_key_association: function(){
            if(selectedRecode11 == 1){
            return "left"
          }else{
            return "right"} ;
          }, number:"11"},
          {stimulus: 'わがままな', stim_key_association: function(){
            if(selectedRecode12 == 1){
            return "left"
          }else{
            return "right"} ;
          }, number:"12"},
          {stimulus: '正直な', stim_key_association: function(){
            if(selectedRecode13 == 1){
            return "left"
          }else{
            return "right"} ;
          }, number:"13"},
          {stimulus: '寛大な', stim_key_association: function(){
            if(selectedRecode14 == 1){
            return "left"
          }else{
            return "right"} ;
          }, number:"14"},
          {stimulus: 'やさしい', stim_key_association: function(){
            if(selectedRecode15 == 1){
            return "left"
          }else{
            return "right"} ;
          }, number:"15"},
          {stimulus: '自己中心的な', stim_key_association: function(){
            if(selectedRecode16 == 1){
            return "left"
          }else{
            return "right"} ;
          }, number:"16"},
          {stimulus: '偉そうな', stim_key_association: function(){
            if(selectedRecode17 == 1){
            return "left"
          }else{
            return "right"} ;
          }, number:"17"},
          {stimulus: 'つまらない', stim_key_association: function(){
            if(selectedRecode18 == 1){
            return "left"
          }else{
            return "right"} ;
          }, number:"18"},
          {stimulus: '落ち着いた', stim_key_association: function(){
            if(selectedRecode19 == 1){
            return "left"
          }else{
            return "right"} ;
          }, number:"19"},
          {stimulus: '感じのいい', stim_key_association: function(){
            if(selectedRecode20 == 1){
            return "left"
          }else{
            return "right"} ;
          }, number:"20"},
          {stimulus: '忍耐強い', stim_key_association: function(){
            if(selectedRecode21 == 1){
            return "left"
          }else{
            return "right"} ;
          }, number:"21"},
          {stimulus: '短気な', stim_key_association: function(){
            if(selectedRecode22 == 1){
            return "left"
          }else{
            return "right"} ;
          }, number:"22"},
          {stimulus: '無愛想な', stim_key_association: function(){
            if(selectedRecode23 == 1){
            return "left"
          }else{
            return "right"} ;
          }, number:"23"},
          {stimulus: '厳しい', stim_key_association: function(){
            if(selectedRecode24 == 1){
            return "left"
          }else{
            return "right"} ;
          }, number:"24"},
          {stimulus: '感情的な', stim_key_association: function(){
            if(selectedRecode25 == 1){
            return "left"
          }else{
            return "right"} ;
          }, number:"25"},
          {stimulus: '神経質な', stim_key_association: function(){
            if(selectedRecode26 == 1){
            return "left"
          }else{
            return "right"} ;
          }, number:"26"},
          {stimulus: '心配性な', stim_key_association: function(){
            if(selectedRecode27 == 1){
            return "left"
          }else{
            return "right"} ;
          }, number:"27"},
          {stimulus: '勇敢な', stim_key_association: function(){
            if(selectedRecode28 == 1){
            return "left"
          }else{
            return "right"} ;
          }, number:"28"},
          {stimulus: 'たくましい', stim_key_association: function(){
            if(selectedRecode29 == 1){
            return "left"
          }else{
            return "right"} ;
          }, number:"29"},
          {stimulus: '無神経な', stim_key_association: function(){
            if(selectedRecode30 == 1){
            return "left"
          }else{
            return "right"} ;
          }, number:"30"},
          {stimulus: '明瞭な', stim_key_association: function(){
            if(selectedRecode31 == 1){
            return "left"
          }else{
            return "right"} ;
          }, number:"31"},
          {stimulus: '異端な',stim_key_association: function(){
            if(selectedRecode32 == 1){
            return "left"
          }else{
            return "right"} ;
          }, number:"32"},
          {stimulus: '直感的な', stim_key_association: function(){
            if(selectedRecode33 == 1){
            return "left"
          }else{
            return "right"} ;
          }, number:"33"},
          {stimulus: '素朴な', stim_key_association: function(){
            if(selectedRecode34 == 1){
            return "left"
          }else{
            return "right"} ;
          }, number:"34"},
          {stimulus: '頑固な', stim_key_association: function(){
            if(selectedRecode35 == 1){
            return "left"
          }else{
            return "right"} ;
          }, number:"35"},
        ],
        randomize_order:true,
        repetitions: 1
        };

var instructions_block3 = {
          type: 'html-keyboard-response',
          stimulus:"<p style = text-align: center'>"+"<img src='" + repo_site + "experiment/me_notme.png' width='55%'></img>"+"<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'><strong>この画面は休憩画面です</strong><br>"+"<strong>先ほどと同じ課題をもう一度行います</strong><br><br>"+"表示された単語が<strong>先ほど思い浮かべた友人に当てはまる</strong>と思ったら左手の中指で<strong>E</strong>キーを押してください<br>"+"表示された単語が<strong>先ほど思い浮かべた友人に当てはまらない</strong>と思ったら右手の中指で<strong>I</strong>キーを押してください<br><br>"+"単語は一度に一つだけ出てきます。<br><br>" +" できるだけ早く、正確にキーを押してください<br> " +"<p><strong>ここでは先ほど思い浮かべた友人について判断してください</strong><br><br>"+'準備ができたらスペースキーを押して始めて下さい</div>',
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
               left_category_label: ['<font size="6"><p>友人に<br>'+'当てはまる</p></font>'],
               right_category_label: ['<font size="6"><p>友人に<br>'+'当てはまらない</p></font>'],
               response_ends_trial: true,
               data: { iat_type: 'main_1' }
             }
           ],
             timeline_variables: [
               {stimulus: '社交的な', stim_key_association: function(){
                 if(selectedRecode1 == 1){
                 return "left"
               }else{
                 return "right"} ;
               }, number:"1"},
               {stimulus: '愛想のよい', stim_key_association: function(){
                 if(selectedRecode2 == 1){
                 return "left"
               }else{
                 return "right"} ;
               }, number:"2"},
               {stimulus: '陽気な', stim_key_association: function(){
                 if(selectedRecode3 == 1){
                 return "left"
               }else{
                 return "right"} ;
               }, number:"3"},
               {stimulus: '退屈な', stim_key_association: function(){
                 if(selectedRecode4 == 1){
                 return "left"
               }else{
                 return "right"} ;
               }, number:"4"},
               {stimulus: '恥ずかしがりな', stim_key_association: function(){
                 if(selectedRecode5 == 1){
                 return "left"
               }else{
                 return "right"} ;
               }, number:"5"},
               {stimulus: '内向的な', stim_key_association: function(){
                 if(selectedRecode6 == 1){
                 return "left"
               }else{
                 return "right"} ;
               }, number:"6"},
               {stimulus: 'まめな', stim_key_association: function(){
                 if(selectedRecode7 == 1){
                 return "left"
               }else{
                 return "right"} ;
               }, number:"7"},
               {stimulus: '几帳面な', stim_key_association: function(){
                 if(selectedRecode8 == 1){
                 return "left"
               }else{
                 return "right"} ;
               }, number:"8"},
               {stimulus: '礼儀正しい', stim_key_association: function(){
                 if(selectedRecode9 == 1){
                 return "left"
               }else{
                 return "right"} ;
               }, number:"9"},
               {stimulus: '責任感がある', stim_key_association: function(){
                 if(selectedRecode10 == 1){
                 return "left"
               }else{
                 return "right"} ;
               }, number:"10"},
               {stimulus: 'だらしない', stim_key_association: function(){
                 if(selectedRecode11 == 1){
                 return "left"
               }else{
                 return "right"} ;
               }, number:"11"},
               {stimulus: 'わがままな', stim_key_association: function(){
                 if(selectedRecode12 == 1){
                 return "left"
               }else{
                 return "right"} ;
               }, number:"12"},
               {stimulus: '正直な', stim_key_association: function(){
                 if(selectedRecode13 == 1){
                 return "left"
               }else{
                 return "right"} ;
               }, number:"13"},
               {stimulus: '寛大な', stim_key_association: function(){
                 if(selectedRecode14 == 1){
                 return "left"
               }else{
                 return "right"} ;
               }, number:"14"},
               {stimulus: 'やさしい', stim_key_association: function(){
                 if(selectedRecode15 == 1){
                 return "left"
               }else{
                 return "right"} ;
               }, number:"15"},
               {stimulus: '自己中心的な', stim_key_association: function(){
                 if(selectedRecode16 == 1){
                 return "left"
               }else{
                 return "right"} ;
               }, number:"16"},
               {stimulus: '偉そうな', stim_key_association: function(){
                 if(selectedRecode17 == 1){
                 return "left"
               }else{
                 return "right"} ;
               }, number:"17"},
               {stimulus: 'つまらない', stim_key_association: function(){
                 if(selectedRecode18 == 1){
                 return "left"
               }else{
                 return "right"} ;
               }, number:"18"},
               {stimulus: '落ち着いた', stim_key_association: function(){
                 if(selectedRecode19 == 1){
                 return "left"
               }else{
                 return "right"} ;
               }, number:"19"},
               {stimulus: '感じのいい', stim_key_association: function(){
                 if(selectedRecode20 == 1){
                 return "left"
               }else{
                 return "right"} ;
               }, number:"20"},
               {stimulus: '忍耐強い', stim_key_association: function(){
                 if(selectedRecode21 == 1){
                 return "left"
               }else{
                 return "right"} ;
               }, number:"21"},
               {stimulus: '短気な', stim_key_association: function(){
                 if(selectedRecode22 == 1){
                 return "left"
               }else{
                 return "right"} ;
               }, number:"22"},
               {stimulus: '無愛想な', stim_key_association: function(){
                 if(selectedRecode23 == 1){
                 return "left"
               }else{
                 return "right"} ;
               }, number:"23"},
               {stimulus: '厳しい', stim_key_association: function(){
                 if(selectedRecode24 == 1){
                 return "left"
               }else{
                 return "right"} ;
               }, number:"24"},
               {stimulus: '感情的な', stim_key_association: function(){
                 if(selectedRecode25 == 1){
                 return "left"
               }else{
                 return "right"} ;
               }, number:"25"},
               {stimulus: '神経質な', stim_key_association: function(){
                 if(selectedRecode26 == 1){
                 return "left"
               }else{
                 return "right"} ;
               }, number:"26"},
               {stimulus: '心配性な', stim_key_association: function(){
                 if(selectedRecode27 == 1){
                 return "left"
               }else{
                 return "right"} ;
               }, number:"27"},
               {stimulus: '勇敢な', stim_key_association: function(){
                 if(selectedRecode28 == 1){
                 return "left"
               }else{
                 return "right"} ;
               }, number:"28"},
               {stimulus: 'たくましい', stim_key_association: function(){
                 if(selectedRecode29 == 1){
                 return "left"
               }else{
                 return "right"} ;
               }, number:"29"},
               {stimulus: '無神経な', stim_key_association: function(){
                 if(selectedRecode30 == 1){
                 return "left"
               }else{
                 return "right"} ;
               }, number:"30"},
               {stimulus: '明瞭な', stim_key_association: function(){
                 if(selectedRecode31 == 1){
                 return "left"
               }else{
                 return "right"} ;
               }, number:"31"},
               {stimulus: '異端な',stim_key_association: function(){
                 if(selectedRecode32 == 1){
                 return "left"
               }else{
                 return "right"} ;
               }, number:"32"},
               {stimulus: '直感的な', stim_key_association: function(){
                 if(selectedRecode33 == 1){
                 return "left"
               }else{
                 return "right"} ;
               }, number:"33"},
               {stimulus: '素朴な', stim_key_association: function(){
                 if(selectedRecode34 == 1){
                 return "left"
               }else{
                 return "right"} ;
               }, number:"34"},
               {stimulus: '頑固な', stim_key_association: function(){
                 if(selectedRecode35 == 1){
                 return "left"
               }else{
                 return "right"} ;
               }, number:"35"},
             ],
             randomize_order:true,
             repetitions: 1
             };

var experimentstart2 = {
    type: 'instructions',
    pages: ["<p style = text-align: center'>"+"<img src='" + repo_site + "experiment/me_notme.png' width='55%'></img>"+"<p>続いて、画面中央に表示される単語について<br><br>"+"<strong>あなた自身に当てはまるかどうか</strong><br><br>"+"判断する課題を行っていただきます<br><br></p>"+
            "<p>課題は全部で3回あります</p>"+"<p>準備ができたら次へを押して回答して下さい</p>"
    ],
    allow_backward: false,
    show_clickable_nav: true,
    button_label_next: "次へ",
  };

var instructions_block4 = {
              type: 'html-keyboard-response',
              stimulus:"<p style = text-align: center'>"+"<img src='" + repo_site + "experiment/notme_me.png' width='55%'></img>"+"<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'><strong>先ほどの課題とは判断の対象が「先ほど思い浮かべた友人」から「あなた自身」に変わっています。</strong><br><br>"+"<strong>これは練習です</strong><br><br>"+"表示された単語が<strong>あなた自身に当てはまる</strong>と思ったら左手の中指で<strong>E</strong>キーを押してください<br>"+"表示された単語が<strong>あなた自身に当てはまらない</strong>と思ったら右手の中指で<strong>I</strong>キーを押してください<br><br>"+"単語は一度に一つだけ出てきます。<br><br>" +" できるだけ早く、正確にキーを押してください<br> " +"<p><strong>ここではあなた自身について判断してください</strong><br><br>"+"準備ができたらスペースキーを押して始めて下さい</div>",
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
                  left_category_label: ['<font size="6"><p>あなた自身に<br>'+'当てはまる</p></font>'],
                  right_category_label: ['<font size="6"><p>あなた自身に<br>'+'当てはまらない</p></font>'],
                  response_ends_trial: true,
                  data: { iat_type: 'practice_2' }
                }
              ],
              timeline_variables: [
                {stimulus: '社交的な', stim_key_association: function(){
                  if(selectedRecode36 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"1"},
                {stimulus: '愛想のよい', stim_key_association: function(){
                  if(selectedRecode37 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"2"},
                {stimulus: '陽気な', stim_key_association: function(){
                  if(selectedRecode38 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"3"},
                {stimulus: '退屈な', stim_key_association: function(){
                  if(selectedRecode39 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"4"},
                {stimulus: '恥ずかしがりな', stim_key_association: function(){
                  if(selectedRecode40 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"5"},
                {stimulus: '内向的な', stim_key_association: function(){
                  if(selectedRecode41 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"6"}, 
                {stimulus: '感情的な', stim_key_association: function(){
                  if(selectedRecode60 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"25"},
                {stimulus: '神経質な', stim_key_association: function(){
                  if(selectedRecode61 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"26"},
                {stimulus: '心配性な', stim_key_association: function(){
                  if(selectedRecode62 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"27"},
                {stimulus: '勇敢な', stim_key_association: function(){
                  if(selectedRecode63 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"28"},
                {stimulus: 'たくましい', stim_key_association: function(){
                  if(selectedRecode64 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"29"},
                {stimulus: '無神経な', stim_key_association: function(){
                  if(selectedRecode65 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"30"},
                {stimulus: '明瞭な', stim_key_association: function(){
                  if(selectedRecode66 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"31"},
                {stimulus: '素朴な', stim_key_association: function(){
                  if(selectedRecode69 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"34"},
                {stimulus: '頑固な', stim_key_association: function(){
                  if(selectedRecode70 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"35"},
            ],
            randomize_order:true,
            repetitions: 1
            };  

var instructions_block5 = {
              type: 'html-keyboard-response',
              stimulus:"<p style = text-align: center'>"+"<img src='" + repo_site + "experiment/me_notme.png' width='55%'></img>"+"<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'><strong>これは本番です</strong><br><br>"+"表示された単語が<strong>あなた自身に当てはまる</strong>と思ったら左手の中指で<strong>E</strong>キーを押してください<br>"+"表示された単語が<strong>あなた自身に当てはまらない</strong>と思ったら右手の中指で<strong>I</strong>キーを押してください<br>"+"単語は一度に一つだけ出てきます。<br><br>" +" できるだけ早く、正確にキーを押してください<br> " +"<p><strong>ここでは、あなた自身について判断してください</strong><br><br>"+"準備ができたらスペースキーを押して始めて下さい</div>",
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
                   left_category_label: ['<font size="6"><p>あなた自身に<br>'+'当てはまる</p></font>'],
                   right_category_label: ['<font size="6"><p>あなた自身に<br>'+'当てはまらない</p></font>'],
                   response_ends_trial: true,
                   data: { iat_type: 'main_2' }
                 }
               ],
               timeline_variables: [
                {stimulus: '社交的な', stim_key_association: function(){
                  if(selectedRecode36 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"1"},
                {stimulus: '愛想のよい', stim_key_association: function(){
                  if(selectedRecode37 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"2"},
                {stimulus: '陽気な', stim_key_association: function(){
                  if(selectedRecode38 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"3"},
                {stimulus: '退屈な', stim_key_association: function(){
                  if(selectedRecode39 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"4"},
                {stimulus: '恥ずかしがりな', stim_key_association: function(){
                  if(selectedRecode40 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"5"},
                {stimulus: '内向的な', stim_key_association: function(){
                  if(selectedRecode41 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"6"},
                {stimulus: 'まめな', stim_key_association: function(){
                  if(selectedRecode42 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"7"},
                {stimulus: '几帳面な', stim_key_association: function(){
                  if(selectedRecode43 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"8"},
                {stimulus: '礼儀正しい', stim_key_association: function(){
                  if(selectedRecode44 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"9"},
                {stimulus: '責任感がある', stim_key_association: function(){
                  if(selectedRecode45 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"10"},
                {stimulus: 'だらしない', stim_key_association: function(){
                  if(selectedRecode46 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"11"},
                {stimulus: 'わがままな', stim_key_association: function(){
                  if(selectedRecode47 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"12"},
                {stimulus: '正直な', stim_key_association: function(){
                  if(selectedRecode48 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"13"},
                {stimulus: '寛大な', stim_key_association: function(){
                  if(selectedRecode49 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"14"},
                {stimulus: 'やさしい', stim_key_association: function(){
                  if(selectedRecode50 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"15"},
                {stimulus: '自己中心的な', stim_key_association: function(){
                  if(selectedRecode51 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"16"},
                {stimulus: '偉そうな', stim_key_association: function(){
                  if(selectedRecode52 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"17"},
                {stimulus: 'つまらない', stim_key_association: function(){
                  if(selectedRecode53 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"18"},
                {stimulus: '落ち着いた', stim_key_association: function(){
                  if(selectedRecode54 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"19"},
                {stimulus: '感じのいい', stim_key_association: function(){
                  if(selectedRecode55 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"20"},
                {stimulus: '忍耐強い', stim_key_association: function(){
                  if(selectedRecode56 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"21"},
                {stimulus: '短気な', stim_key_association: function(){
                  if(selectedRecode57 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"22"},
                {stimulus: '無愛想な', stim_key_association: function(){
                  if(selectedRecode58 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"23"},
                {stimulus: '厳しい', stim_key_association: function(){
                  if(selectedRecode59 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"24"},
                {stimulus: '感情的な', stim_key_association: function(){
                  if(selectedRecode60 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"25"},
                {stimulus: '神経質な', stim_key_association: function(){
                  if(selectedRecode61 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"26"},
                {stimulus: '心配性な', stim_key_association: function(){
                  if(selectedRecode62 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"27"},
                {stimulus: '勇敢な', stim_key_association: function(){
                  if(selectedRecode63 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"28"},
                {stimulus: 'たくましい', stim_key_association: function(){
                  if(selectedRecode64 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"29"},
                {stimulus: '無神経な', stim_key_association: function(){
                  if(selectedRecode65 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"30"},
                {stimulus: '明瞭な', stim_key_association: function(){
                  if(selectedRecode66 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"31"},
                {stimulus: '異端な',stim_key_association: function(){
                  if(selectedRecode67 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"32"},
                {stimulus: '直感的な', stim_key_association: function(){
                  if(selectedRecode68 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"33"},
                {stimulus: '素朴な', stim_key_association: function(){
                  if(selectedRecode69 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"34"},
                {stimulus: '頑固な', stim_key_association: function(){
                  if(selectedRecode70 == 1){
                  return "left"
                }else{
                  return "right"} ;
                }, number:"35"},
              ],
              randomize_order:true,
              repetitions: 1
              };
         
var instructions_block6 = {
                   type: 'html-keyboard-response',
                   stimulus:"<p style = text-align: center'>"+"<img src='" + repo_site + "experiment/me_notme.png' width='55%'></img>"+"<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'><strong>この画面は休憩画面です</strong><br>"+"<strong>先ほどと同じ課題をもう一度行います</strong><br><br>"+"表示された単語が<strong>あなた自身に当てはまる</strong>と思ったら左手の中指で<strong>E</strong>キーを押してください<br>"+"表示された単語が<strong>あなた自身に当てはまらない</strong>と思ったら右手の中指で<strong>I</strong>キーを押してください<br><br>"+"単語は一度に一つだけ出てきます。<br><br>" +" できるだけ早く、正確にキーを押してください<br> " +"<p><strong>ここではあなた自身について判断してください</strong><br><br>"+'準備ができたらスペースキーを押して始めて下さい</div>',
                   choices: [' ']
                  };
              
var trial_block6 = {
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
                        left_category_label: ['<font size="6"><p>あなた自身に<br>'+'当てはまる</p></font>'],
                        right_category_label: ['<font size="6"><p>あなた自身に<br>'+'当てはまらない</p></font>'],
                        response_ends_trial: true,
                        data: { iat_type: 'main_2' }
                      }
                    ],
                    timeline_variables: [
                      {stimulus: '社交的な', stim_key_association: function(){
                        if(selectedRecode36 == 1){
                        return "left"
                      }else{
                        return "right"} ;
                      }, number:"1"},
                      {stimulus: '愛想のよい', stim_key_association: function(){
                        if(selectedRecode37 == 1){
                        return "left"
                      }else{
                        return "right"} ;
                      }, number:"2"},
                      {stimulus: '陽気な', stim_key_association: function(){
                        if(selectedRecode38 == 1){
                        return "left"
                      }else{
                        return "right"} ;
                      }, number:"3"},
                      {stimulus: '退屈な', stim_key_association: function(){
                        if(selectedRecode39 == 1){
                        return "left"
                      }else{
                        return "right"} ;
                      }, number:"4"},
                      {stimulus: '恥ずかしがりな', stim_key_association: function(){
                        if(selectedRecode40 == 1){
                        return "left"
                      }else{
                        return "right"} ;
                      }, number:"5"},
                      {stimulus: '内向的な', stim_key_association: function(){
                        if(selectedRecode41 == 1){
                        return "left"
                      }else{
                        return "right"} ;
                      }, number:"6"},
                      {stimulus: 'まめな', stim_key_association: function(){
                        if(selectedRecode42 == 1){
                        return "left"
                      }else{
                        return "right"} ;
                      }, number:"7"},
                      {stimulus: '几帳面な', stim_key_association: function(){
                        if(selectedRecode43 == 1){
                        return "left"
                      }else{
                        return "right"} ;
                      }, number:"8"},
                      {stimulus: '礼儀正しい', stim_key_association: function(){
                        if(selectedRecode44 == 1){
                        return "left"
                      }else{
                        return "right"} ;
                      }, number:"9"},
                      {stimulus: '責任感がある', stim_key_association: function(){
                        if(selectedRecode45 == 1){
                        return "left"
                      }else{
                        return "right"} ;
                      }, number:"10"},
                      {stimulus: 'だらしない', stim_key_association: function(){
                        if(selectedRecode46 == 1){
                        return "left"
                      }else{
                        return "right"} ;
                      }, number:"11"},
                      {stimulus: 'わがままな', stim_key_association: function(){
                        if(selectedRecode47 == 1){
                        return "left"
                      }else{
                        return "right"} ;
                      }, number:"12"},
                      {stimulus: '正直な', stim_key_association: function(){
                        if(selectedRecode48 == 1){
                        return "left"
                      }else{
                        return "right"} ;
                      }, number:"13"},
                      {stimulus: '寛大な', stim_key_association: function(){
                        if(selectedRecode49 == 1){
                        return "left"
                      }else{
                        return "right"} ;
                      }, number:"14"},
                      {stimulus: 'やさしい', stim_key_association: function(){
                        if(selectedRecode50 == 1){
                        return "left"
                      }else{
                        return "right"} ;
                      }, number:"15"},
                      {stimulus: '自己中心的な', stim_key_association: function(){
                        if(selectedRecode51 == 1){
                        return "left"
                      }else{
                        return "right"} ;
                      }, number:"16"},
                      {stimulus: '偉そうな', stim_key_association: function(){
                        if(selectedRecode52 == 1){
                        return "left"
                      }else{
                        return "right"} ;
                      }, number:"17"},
                      {stimulus: 'つまらない', stim_key_association: function(){
                        if(selectedRecode53 == 1){
                        return "left"
                      }else{
                        return "right"} ;
                      }, number:"18"},
                      {stimulus: '落ち着いた', stim_key_association: function(){
                        if(selectedRecode54 == 1){
                        return "left"
                      }else{
                        return "right"} ;
                      }, number:"19"},
                      {stimulus: '感じのいい', stim_key_association: function(){
                        if(selectedRecode55 == 1){
                        return "left"
                      }else{
                        return "right"} ;
                      }, number:"20"},
                      {stimulus: '忍耐強い', stim_key_association: function(){
                        if(selectedRecode56 == 1){
                        return "left"
                      }else{
                        return "right"} ;
                      }, number:"21"},
                      {stimulus: '短気な', stim_key_association: function(){
                        if(selectedRecode57 == 1){
                        return "left"
                      }else{
                        return "right"} ;
                      }, number:"22"},
                      {stimulus: '無愛想な', stim_key_association: function(){
                        if(selectedRecode58 == 1){
                        return "left"
                      }else{
                        return "right"} ;
                      }, number:"23"},
                      {stimulus: '厳しい', stim_key_association: function(){
                        if(selectedRecode59 == 1){
                        return "left"
                      }else{
                        return "right"} ;
                      }, number:"24"},
                      {stimulus: '感情的な', stim_key_association: function(){
                        if(selectedRecode60 == 1){
                        return "left"
                      }else{
                        return "right"} ;
                      }, number:"25"},
                      {stimulus: '神経質な', stim_key_association: function(){
                        if(selectedRecode61 == 1){
                        return "left"
                      }else{
                        return "right"} ;
                      }, number:"26"},
                      {stimulus: '心配性な', stim_key_association: function(){
                        if(selectedRecode62 == 1){
                        return "left"
                      }else{
                        return "right"} ;
                      }, number:"27"},
                      {stimulus: '勇敢な', stim_key_association: function(){
                        if(selectedRecode63 == 1){
                        return "left"
                      }else{
                        return "right"} ;
                      }, number:"28"},
                      {stimulus: 'たくましい', stim_key_association: function(){
                        if(selectedRecode64 == 1){
                        return "left"
                      }else{
                        return "right"} ;
                      }, number:"29"},
                      {stimulus: '無神経な', stim_key_association: function(){
                        if(selectedRecode65 == 1){
                        return "left"
                      }else{
                        return "right"} ;
                      }, number:"30"},
                      {stimulus: '明瞭な', stim_key_association: function(){
                        if(selectedRecode66 == 1){
                        return "left"
                      }else{
                        return "right"} ;
                      }, number:"31"},
                      {stimulus: '異端な',stim_key_association: function(){
                        if(selectedRecode67 == 1){
                        return "left"
                      }else{
                        return "right"} ;
                      }, number:"32"},
                      {stimulus: '直感的な', stim_key_association: function(){
                        if(selectedRecode68 == 1){
                        return "left"
                      }else{
                        return "right"} ;
                      }, number:"33"},
                      {stimulus: '素朴な', stim_key_association: function(){
                        if(selectedRecode69 == 1){
                        return "left"
                      }else{
                        return "right"} ;
                      }, number:"34"},
                      {stimulus: '頑固な', stim_key_association: function(){
                        if(selectedRecode70 == 1){
                        return "left"
                      }else{
                        return "right"} ;
                      }, number:"35"},
                    ],
                    randomize_order:true,
                    repetitions: 1
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
timeline.push(experimentstart1);
timeline.push(instructions_block1);
timeline.push(trial_block1);
timeline.push(instructions_block2);
timeline.push(trial_block2);
timeline.push(instructions_block3);
timeline.push(trial_block3);
timeline.push(experimentstart2);
timeline.push(instructions_block4);
timeline.push(trial_block4);
timeline.push(instructions_block5);
timeline.push(trial_block5);
timeline.push(instructions_block6);
timeline.push(trial_block6);
timeline.push(fullscreen_end);
timeline.push(experimentend);

var repo_site = "https://gelidium0141.github.io/iat/";


var fullscreen_start ={
  type: 'fullscreen',
  message: '<p>これからは全画面表示で課題を行います。下のボタンをクリックしてください。</p>',
  button_label:"全画面表示に切り替え",
  fullscreen_mode: true
};

var experimentstart = {
    type: 'instructions',
    pages: ["<img src='" + repo_site + "experiment/me_notme.png' width='55%'></img>"+"<p style = text-align: center'><p>これから、画面中央に表示される単語について自分に当てはまるかを判断する課題を行っていただきます<br></p>"
    　　　　　+"<p>課題は全部で4回あります</p>"+"<p>準備ができたら次へを押して回答して下さい</p>"
    ],
    allow_backward: false,
    show_clickable_nav: true,
    button_label_next: "次へ",
  };

var instructions_block1 = {
    type: 'html-keyboard-response',
    stimulus:"<img src='" + repo_site + "experiment/me_notme.png' width='55%'></img>"+"<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'><strong>これは練習です</strong><br>"+"表示された単語が自分に当てはまると思ったら左手の中指で<strong>E</strong>キーを押してください<br>"+"表示された単語が自分には当てはまらないと思ったら右手の中指で<strong>I</strong>キーを押してください<br>"+"単語は一度に一つだけ出てきます。<br><br>" +" できるだけ早く、正確にキーを押してください<br><br> " +"準備ができたらスペースキーを押して始めて下さい</div>",
    choices: [' ']
  };

var trial_block1 = {
    timeline:[
     {
       type: 'html-keyboard-response',
       stimulus: jsPsych.timelineVariable('stimulus'),
       choices: ['E', 'I'],
       prompt:'<pre style="position: absolute; left: 7.5%; top: 20%">' + '<pre style ="font-size: 30px"> 自分に当てはまるなら<strong>E</strong>キー　　　　　　　　　　　       　　　    当てはまらないなら<strong>I</strong>キー</pre>',
       post_trial_gap: 50,
       data: { iat_type: 'practice_1' }
     }
    ],
    timeline_variables: [
        {stimulus: '<p style="font-size: 60px">外向的</p>'},
        {stimulus: '<p style="font-size: 60px">無愛想</p>'},
        {stimulus: '<p style="font-size: 60px">社交的</p>'},
        {stimulus: '<p style="font-size: 60px">消極的</p>'},
        {stimulus: '<p style="font-size: 60px">陽気</p>'},
        {stimulus: '<p style="font-size: 60px">優しい</p>'},
        {stimulus: '<p style="font-size: 60px">思いやりのある</p>'},
        {stimulus: '<p style="font-size: 60px">親切</p>'},
        {stimulus: '<p style="font-size: 60px">自己中心的</p>'},
        {stimulus: '<p style="font-size: 60px">温和</p>'},
        {stimulus: '<p style="font-size: 60px">不安になりやすい</p>'},
        {stimulus: '<p style="font-size: 60px">悩み勝ち</p>'},
        {stimulus: '<p style="font-size: 60px">傷つきやすい</p>'},
        {stimulus: '<p style="font-size: 60px">くよくよしない</p>'},
        {stimulus: '<p style="font-size: 60px">神経質</p>'},
        {stimulus: '<p style="font-size: 60px">勤勉</p>'},
        {stimulus: '<p style="font-size: 60px">ずるい</p>'},
        {stimulus: '<p style="font-size: 60px">いい加減</p>'},
        {stimulus: '<p style="font-size: 60px">無責任</p>'},
        {stimulus: '<p style="font-size: 60px">勇敢</p>'},
        {stimulus: '<p style="font-size: 60px">注意深い</p>'},
        {stimulus: '<p style="font-size: 60px">視野が狭い</p>'},
        {stimulus: '<p style="font-size: 60px">臨機応変</p>'},
        {stimulus: '<p style="font-size: 60px">計画性のある</p>'},
        {stimulus: '<p style="font-size: 60px">動揺しやすい</p>'},
        {stimulus: '<p style="font-size: 60px">独創的</p>'},
        {stimulus: '<p style="font-size: 60px">想像力がある</p>'},
        {stimulus: '<p style="font-size: 60px">怒りっぽい</p>'},
        {stimulus: '<p style="font-size: 60px">柔軟</p>'},
        {stimulus: '<p style="font-size: 60px">慎み深い</p>'}

        ],
      randomize_order:true,
      repetitions: 1
    };

var instructions_block2 = {
     type: 'html-keyboard-response',
     stimulus:"<img src='" + repo_site + "experiment/me_notme.png' width='55%'></img>"+"<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'><strong>これは本番です</strong><br>"+"表示された単語が自分に当てはまると思ったら左手の中指で<strong>E</strong>キーを押してください<br>"+"表示された単語が自分には当てはまらないと思ったら右手の中指で<strong>I</strong>キーを押してください<br>"+"単語は一度に一つだけ出てきます。<br><br>" +" できるだけ早く、正確にキーを押してください<br><br> " +"準備ができたらスペースキーを押して始めて下さい</div>",
     choices: [' ']
    };
  
var trial_block2 = {
    timeline:[
        {
          type: 'html-keyboard-response',
          stimulus: jsPsych.timelineVariable('stimulus'),
          choices: ['E', 'I'],
          prompt:'<pre style="position: absolute; left: 7.5%; top: 20%">' + '<pre style ="font-size: 30px"> 自分に当てはまるなら<strong>E</strong>キー　　　　　　　　　　　       　　　    当てはまらないなら<strong>I</strong>キー</pre>',
          post_trial_gap: 50,
          data: { iat_type: 'main_1' }
        }
       ],
       timeline_variables: [
           {stimulus: '<p style="font-size: 60px">外向的</p>'},
           {stimulus: '<p style="font-size: 60px">無愛想</p>'},
           {stimulus: '<p style="font-size: 60px">社交的</p>'},
           {stimulus: '<p style="font-size: 60px">消極的</p>'},
           {stimulus: '<p style="font-size: 60px">陽気</p>'},
           {stimulus: '<p style="font-size: 60px">優しい</p>'},
           {stimulus: '<p style="font-size: 60px">思いやりのある</p>'},
           {stimulus: '<p style="font-size: 60px">親切</p>'},
           {stimulus: '<p style="font-size: 60px">自己中心的</p>'},
           {stimulus: '<p style="font-size: 60px">温和</p>'},
           {stimulus: '<p style="font-size: 60px">不安になりやすい</p>'},
           {stimulus: '<p style="font-size: 60px">悩み勝ち</p>'},
           {stimulus: '<p style="font-size: 60px">傷つきやすい</p>'},
           {stimulus: '<p style="font-size: 60px">くよくよしない</p>'},
           {stimulus: '<p style="font-size: 60px">神経質</p>'},
           {stimulus: '<p style="font-size: 60px">勤勉</p>'},
           {stimulus: '<p style="font-size: 60px">ずるい</p>'},
           {stimulus: '<p style="font-size: 60px">いい加減</p>'},
           {stimulus: '<p style="font-size: 60px">無責任</p>'},
           {stimulus: '<p style="font-size: 60px">勇敢</p>'},
           {stimulus: '<p style="font-size: 60px">注意深い</p>'},
           {stimulus: '<p style="font-size: 60px">視野が狭い</p>'},
           {stimulus: '<p style="font-size: 60px">臨機応変</p>'},
           {stimulus: '<p style="font-size: 60px">計画性のある</p>'},
           {stimulus: '<p style="font-size: 60px">動揺しやすい</p>'},
           {stimulus: '<p style="font-size: 60px">独創的</p>'},
           {stimulus: '<p style="font-size: 60px">想像力がある</p>'},
           {stimulus: '<p style="font-size: 60px">怒りっぽい</p>'},
           {stimulus: '<p style="font-size: 60px">柔軟</p>'},
           {stimulus: '<p style="font-size: 60px">慎み深い</p>'}
   
           ],
         randomize_order:false,
         repetitions: 3
       };

   var instructions_block3 = {
        type: 'html-keyboard-response',
        stimulus:"<img src='" + repo_site + "experiment/notme_me.png' width='55%'></img>"+"<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'><strong>先ほどの課題とは名前の位置が逆になっています。</strong><br>"+"<strong>これは練習です</strong><br>"+"表示された単語が自分には当てはまらないと思ったら左手の中指で<strong>E</strong>キーを押してください<br>"+"表示された単語が自分に当てはまると思ったら右手の中指で<strong>I</strong>キーを押してください<br>"+"単語は一度に一つだけ出てきます。<br><br>" +" できるだけ早く、正確にキーを押してください<br><br> " +"準備ができたらスペースキーを押して始めて下さい</div>",
        choices: [' ']
       };
     
   var trial_block3 = {
       timeline:[
           {
             type: 'html-keyboard-response',
             stimulus: jsPsych.timelineVariable('stimulus'),
             choices: ['E', 'I'],
             prompt:'<pre style="position: absolute; left: 7.5%; top: 20%">' + '<pre style ="font-size: 30px">当てはまらないなら<strong>I</strong>キー　　　　　　　　　　　       　　　    自分に当てはまるなら<strong>E</strong>キー</pre>',
             post_trial_gap: 50,
             data: { iat_type: 'practice_2' }
           }
          ],
          timeline_variables: [
              {stimulus: '<p style="font-size: 60px">外向的</p>'},
              {stimulus: '<p style="font-size: 60px">無愛想</p>'},
              {stimulus: '<p style="font-size: 60px">社交的</p>'},
              {stimulus: '<p style="font-size: 60px">消極的</p>'},
              {stimulus: '<p style="font-size: 60px">陽気</p>'},
              {stimulus: '<p style="font-size: 60px">優しい</p>'},
              {stimulus: '<p style="font-size: 60px">思いやりのある</p>'},
              {stimulus: '<p style="font-size: 60px">親切</p>'},
              {stimulus: '<p style="font-size: 60px">自己中心的</p>'},
              {stimulus: '<p style="font-size: 60px">温和</p>'},
              {stimulus: '<p style="font-size: 60px">不安になりやすい</p>'},
              {stimulus: '<p style="font-size: 60px">悩み勝ち</p>'},
              {stimulus: '<p style="font-size: 60px">傷つきやすい</p>'},
              {stimulus: '<p style="font-size: 60px">くよくよしない</p>'},
              {stimulus: '<p style="font-size: 60px">神経質</p>'},
              {stimulus: '<p style="font-size: 60px">勤勉</p>'},
              {stimulus: '<p style="font-size: 60px">ずるい</p>'},
              {stimulus: '<p style="font-size: 60px">いい加減</p>'},
              {stimulus: '<p style="font-size: 60px">無責任</p>'},
              {stimulus: '<p style="font-size: 60px">勇敢</p>'},
              {stimulus: '<p style="font-size: 60px">注意深い</p>'},
              {stimulus: '<p style="font-size: 60px">視野が狭い</p>'},
              {stimulus: '<p style="font-size: 60px">臨機応変</p>'},
              {stimulus: '<p style="font-size: 60px">計画性のある</p>'},
              {stimulus: '<p style="font-size: 60px">動揺しやすい</p>'},
              {stimulus: '<p style="font-size: 60px">独創的</p>'},
              {stimulus: '<p style="font-size: 60px">想像力がある</p>'},
              {stimulus: '<p style="font-size: 60px">怒りっぽい</p>'},
              {stimulus: '<p style="font-size: 60px">柔軟</p>'},
              {stimulus: '<p style="font-size: 60px">慎み深い</p>'}
      
              ],
            randomize_order:true,
            repetitions: 1
          };

          var instructions_block4 = {
            type: 'html-keyboard-response',
            stimulus:"<img src='" + repo_site + "experiment/notme_me.png' width='55%'></img>"+"<div style='position: relative; top: 42%; margin-left: auto; margin-right: auto'><strong>これは本番です</strong><br>"+"表示された単語が自分には当てはまらないと思ったら左手の中指で<strong>E</strong>キーを押してください<br>"+"表示された単語が自分に当てはまると思ったら右手の中指で<strong>I</strong>キーを押してください<br>"+"単語は一度に一つだけ出てきます。<br><br>" +" できるだけ早く、正確にキーを押してください<br><br> " +"準備ができたらスペースキーを押して始めて下さい</div>",
            choices: [' ']
           };
         
       var trial_block4 = {
           timeline:[
               {
                 type: 'html-keyboard-response',
                 stimulus: jsPsych.timelineVariable('stimulus'),
                 choices: ['E', 'I'],
                 prompt:'<pre style="position: absolute; left: 7.5%; top: 20%">' + '<pre style ="font-size: 30px">当てはまらないなら<strong>I</strong>キー　　　　　　　　　　　       　　　    自分に当てはまるなら<strong>E</strong>キー</pre>',
                 post_trial_gap: 50,
                 data: { iat_type: 'main_2' }
               }
              ],
              timeline_variables: [
                  {stimulus: '<p style="font-size: 60px">外向的</p>'},
                  {stimulus: '<p style="font-size: 60px">無愛想</p>'},
                  {stimulus: '<p style="font-size: 60px">社交的</p>'},
                  {stimulus: '<p style="font-size: 60px">消極的</p>'},
                  {stimulus: '<p style="font-size: 60px">陽気</p>'},
                  {stimulus: '<p style="font-size: 60px">優しい</p>'},
                  {stimulus: '<p style="font-size: 60px">思いやりのある</p>'},
                  {stimulus: '<p style="font-size: 60px">親切</p>'},
                  {stimulus: '<p style="font-size: 60px">自己中心的</p>'},
                  {stimulus: '<p style="font-size: 60px">温和</p>'},
                  {stimulus: '<p style="font-size: 60px">不安になりやすい</p>'},
                  {stimulus: '<p style="font-size: 60px">悩み勝ち</p>'},
                  {stimulus: '<p style="font-size: 60px">傷つきやすい</p>'},
                  {stimulus: '<p style="font-size: 60px">くよくよしない</p>'},
                  {stimulus: '<p style="font-size: 60px">神経質</p>'},
                  {stimulus: '<p style="font-size: 60px">勤勉</p>'},
                  {stimulus: '<p style="font-size: 60px">ずるい</p>'},
                  {stimulus: '<p style="font-size: 60px">いい加減</p>'},
                  {stimulus: '<p style="font-size: 60px">無責任</p>'},
                  {stimulus: '<p style="font-size: 60px">勇敢</p>'},
                  {stimulus: '<p style="font-size: 60px">注意深い</p>'},
                  {stimulus: '<p style="font-size: 60px">視野が狭い</p>'},
                  {stimulus: '<p style="font-size: 60px">臨機応変</p>'},
                  {stimulus: '<p style="font-size: 60px">計画性のある</p>'},
                  {stimulus: '<p style="font-size: 60px">動揺しやすい</p>'},
                  {stimulus: '<p style="font-size: 60px">独創的</p>'},
                  {stimulus: '<p style="font-size: 60px">想像力がある</p>'},
                  {stimulus: '<p style="font-size: 60px">怒りっぽい</p>'},
                  {stimulus: '<p style="font-size: 60px">柔軟</p>'},
                  {stimulus: '<p style="font-size: 60px">慎み深い</p>'}
          
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
timeline.push(instructions_block2);
timeline.push(trial_block2);
timeline.push(instructions_block3);
timeline.push(trial_block3);
timeline.push(instructions_block4);
timeline.push(trial_block4);
timeline.push(fullscreen_end);
timeline.push(experimentend);
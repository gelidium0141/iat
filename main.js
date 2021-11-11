var repo_site = "https://gelidium0141.github.io/iat/";

//事前セッティング（実際に実験を動かしてから、下のコメントをみるとわかる）
let i = 0; //ループ何回目かのカウンター
let p = 0; //保存何個目かのカウンター
let msave = "mystimuli"; //一致して保存するときに利用する列名
let ysave = "yoursutimuli"; //一致して保存するときに利用する列名

var stim =[]
var survey_c = ['次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人の<b>趣味</b>についてお答えください。</p>'+'<pre><b>（例：私の趣味は読書です　　　友人の趣味はサッカーです）</b></pre>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人の<b>出身地</b>についてお答えください。</p>'+'<pre><b>（例：私の出身地は大阪です　　　　友人の出身地は京都です）</b></pre>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人の<b>所属する部活・サークル</b>についてお答えください。</p>'+'<pre><b>（例：私の所属する部活・サークルは野球部です　友人の所属する部活・サークルは卓球部です）</b></pre>'+'<p>もともと所属していたものを回答して頂いても大丈夫です</p>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人の<b>アルバイト</b>についてお答えください。</p>'+'<pre><b>（例：私のアルバイトはローソン店員です　　　　友人のアルバイトは新聞配達です）</b></pre>'+'<p>もともと所属していたものを回答して頂いても大丈夫です</p>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人の<b>特技</b>についてお答えください。</p>'+'<pre><b>（例：私の特技は早口言葉です　　　　友人の特技は英会話です）</b></pre>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人の<b>好きなスポーツ</b>についてお答えください。</p>'+'<pre><b>（例：私の好きなスポーツはフットサルです　　　　友人の好きなスポーツはテニスです）</b></pre>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人の<b>好きな食べ物</b>についてお答えください。</p>'+'<pre><b>（例：私の好きな食べ物はオムライスです　　　　友人の好きな食べ物はおにぎりです）</b></pre>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人の<b>好きな飲み物</b>についてお答えください。</p>'+'<pre><b>（例：私の好きな飲み物はコーヒーです　　　　友人の好きな飲み物はココアです）</b></pre>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人の<b>好きな色</b>についてお答えください。</p>'+'<pre><b>（例：私の好きな色は白です　　　　友人の好きな色は赤です）</b></pre>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人の<b>好きな本</b>についてお答えください。</p>'+'<pre><b>（例：私の好きな本は鬼滅の刃です　　　　友人の好きな本はワンピースです）</b></pre>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人の<b>得意な教科</b>についてお答えください。</p>'+'<pre><b>（例：私の得意な教科は数学です　　　　友人の得意な教科は国語です）</b></pre>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人の<b>好きな服のブランド</b>についてお答えください。</p>'+'<pre><b>（例：私の好きな服のブランドはGUです　　　　友人の好きな服のブランドはGUCCIです）</b></pre>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人の<b>好きな季節</b>についてお答えください。</p>'+'<pre><b>（例：私の好きな季節は冬です　　　　友人の好きな季節は夏です）</b></pre>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人の<b>好きなテレビ番組</b>についてお答えください。</p>'+'<pre><b>（例：私の好きなテレビ番組はしゃべくり007です　　　　友人の好きなテレビ番組は志村どうぶつ園です）</b></pre>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人の<b>好きな芸能人</b>についてお答えください。</p>'+'<pre><b>（例：私の好きな芸能人は本田翼です　　　　友人の好きな芸能人は吉岡里帆です）</b></pre>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人の<b>好きな映画</b>についてお答えください。</p>'+'<pre><b>（例：私の好きな映画はヴァイオレットエヴァーガーデンです　　　　友人の好きな映画は永遠の0です）</b></pre>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人の<b>好きなキャラクター</b>についてお答えください。</p>'+'<pre><b>（例：私の好きなキャラクターはピカチュウです　　　　友人の好きなキャラクターはドラえもんです）</b></pre>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人の<b>推し</b>についてお答えください。</p>'+'<pre><b>（例：私の推しは生田絵梨花です　　　　友人の推しはバイト先の先輩です）</b></pre>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人の<b>血液型</b>についてお答えください。</p>'+'<pre><b>（例：私の血液型はA型です　　　　友人の血液型はB型です）</b></pre>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人の<b>所属する学部</b>についてお答えください。</p>'+'<pre><b>（例：私の所属する学部は社会学部です　　　　友人の所属する学部は教育学部です）</b></pre>'+'<p>もともと所属していたものを回答して頂いても大丈夫です</p>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人の<b>将来の夢</b>についてお答えください。</p>'+'<pre><b>（例：私の将来の夢は研究者です　　　　友人の将来の夢は医者です）</b></pre>'
              ]
//inputタグに required="required"をつけると強制回答に
var stim_c = ['<br><p><b>自分と友人、どちらか一方の回答がわからない場合</b>は<b>右のボックスにチェックをしてください</b><input type="checkbox", id= scales", name="tag" style="width:25px; height:25px;" onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p><b> 私の趣味は<input name="ms" type="text" id="mines" required="required"/>です。         友人の趣味は<input name="ys" type="text" id="youans"/>です。</b></p></pre>',
              '<br><p><b>自分と友人、どちらか一方の回答がわからない場合</b>は<b>右のボックスにチェックをしてください</b><input type="checkbox", id= scales", name="tag" style="width:25px; height:25px;" onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p><b> 私の出身地は<input name="ms" type="text" id="mines" required="required"/>です。         友人の出身地は<input name="ys" type="text" id="youans"/>です。</b></p></pre>',
              '<br><p><b>自分と友人、どちらか一方の回答がわからない場合</b>は<b>右のボックスにチェックをしてください</b><input type="checkbox", id= scales", name="tag" style="width:25px; height:25px;" onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p><b> 私の所属する部活・サークルは<input name="ms" type="text" id="mines" required="required"/>です。         友人の所属する部活・サークルは<input name="ys" type="text" id="youans"/>です。</b></p></pre>',
              '<br><p><b>自分と友人、どちらか一方の回答がわからない場合</b>は<b>右のボックスにチェックをしてください</b><input type="checkbox", id= scales", name="tag" style="width:25px; height:25px;" onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p><b> 私のアルバイトは<input name="ms" type="text" id="mines" required="required"/>です。         友人のアルバイトは<input name="ys" type="text" id="youans"/>です。</b></p></pre>',
              '<br><p><b>自分と友人、どちらか一方の回答がわからない場合</b>は<b>右のボックスにチェックをしてください</b><input type="checkbox", id= scales", name="tag" style="width:25px; height:25px;" onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p><b> 私の特技は<input name="ms" type="text" id="mines" required="required"/>です。         友人の特技は<input name="ys" type="text" id="youans"/>です。</b></p></pre>',
              '<br><p><b>自分と友人、どちらか一方の回答がわからない場合</b>は<b>右のボックスにチェックをしてください</b><input type="checkbox", id= scales", name="tag" style="width:25px; height:25px;" onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p><b> 私の好きなスポーツは<input name="ms" type="text" id="mines" required="required"/>です。         友人の好きなスポーツは<input name="ys" type="text" id="youans"/>です。</b></p></pre>',
              '<br><p><b>自分と友人、どちらか一方の回答がわからない場合</b>は<b>右のボックスにチェックをしてください</b><input type="checkbox", id= scales", name="tag" style="width:25px; height:25px;" onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p><b> 私の好きな食べ物は<input name="ms" type="text" id="mines" required="required"/>です。         友人の好きな食べ物は<input name="ys" type="text" id="youans"/>です。</b></p></pre>',
              '<br><p><b>自分と友人、どちらか一方の回答がわからない場合</b>は<b>右のボックスにチェックをしてください</b><input type="checkbox", id= scales", name="tag" style="width:25px; height:25px;" onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p><b> 私の好きな飲み物は<input name="ms" type="text" id="mines" required="required"/>です。         友人の好きな飲み物は<input name="ys" type="text" id="youans"/>です。</b></p></pre>',
              '<br><p><b>自分と友人、どちらか一方の回答がわからない場合</b>は<b>右のボックスにチェックをしてください</b><input type="checkbox", id= scales", name="tag" style="width:25px; height:25px;" onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p><b> 私の好きな色は<input name="ms" type="text" id="mines" required="required"/>です。         友人の好きな色は<input name="ys" type="text" id="youans"/>です。</b></p></pre>',
              '<br><p><b>自分と友人、どちらか一方の回答がわからない場合</b>は<b>右のボックスにチェックをしてください</b><input type="checkbox", id= scales", name="tag" style="width:25px; height:25px;" onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p><b> 私の好きな本は<input name="ms" type="text" id="mines" required="required"/>です。         友人の好きな本は<input name="ys" type="text" id="youans"/>です。</b></p></pre>',
              '<br><p><b>自分と友人、どちらか一方の回答がわからない場合</b>は<b>右のボックスにチェックをしてください</b><input type="checkbox", id= scales", name="tag" style="width:25px; height:25px;" onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p><b> 私の得意な教科は<input name="ms" type="text" id="mines" required="required"/>です。         友人の得意な教科は<input name="ys" type="text" id="youans"/>です。</b></p></pre>',
              '<br><p><b>自分と友人、どちらか一方の回答がわからない場合</b>は<b>右のボックスにチェックをしてください</b><input type="checkbox", id= scales", name="tag" style="width:25px; height:25px;" onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p><b> 私の好きな服のブランドは<input name="ms" type="text" id="mines" required="required"/>です。         友人の好きな服のブランドは<input name="ys" type="text" id="youans"/>です。</b></p></pre>',
              '<br><p><b>自分と友人、どちらか一方の回答がわからない場合</b>は<b>右のボックスにチェックをしてください</b><input type="checkbox", id= scales", name="tag" style="width:25px; height:25px;" onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p><b> 私の好きな季節は<input name="ms" type="text" id="mines" required="required"/>です。         友人の好きな季節は<input name="ys" type="text" id="youans"/>です。</b></p></pre>',
              '<br><p><b>自分と友人、どちらか一方の回答がわからない場合</b>は<b>右のボックスにチェックをしてください</b><input type="checkbox", id= scales", name="tag" style="width:25px; height:25px;" onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p><b> 私の好きなテレビ番組は<input name="ms" type="text" id="mines" required="required"/>です。         友人の好きなテレビ番組は<input name="ys" type="text" id="youans"/>です。</b></p></pre>',
              '<br><p><b>自分と友人、どちらか一方の回答がわからない場合</b>は<b>右のボックスにチェックをしてください</b><input type="checkbox", id= scales", name="tag" style="width:25px; height:25px;" onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p><b> 私の好きな芸能人は<input name="ms" type="text" id="mines" required="required"/>です。         友人の好きな芸能人は<input name="ys" type="text" id="youans"/>です。</b></p></pre>',
              '<br><p><b>自分と友人、どちらか一方の回答がわからない場合</b>は<b>右のボックスにチェックをしてください</b><input type="checkbox", id= scales", name="tag" style="width:25px; height:25px;" onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p><b> 私の好きな映画は<input name="ms" type="text" id="mines" required="required"/>です。         友人の好きな映画は<input name="ys" type="text" id="youans"/>です。</b></p></pre>',
              '<br><p><b>自分と友人、どちらか一方の回答がわからない場合</b>は<b>右のボックスにチェックをしてください</b><input type="checkbox", id= scales", name="tag" style="width:25px; height:25px;" onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p><b> 私の好きなキャラクターは<input name="ms" type="text" id="mines" required="required"/>です。         友人の好きなキャラクターは<input name="ys" type="text" id="youans"/>です。</b></p></pre>',
              '<br><p><b>自分と友人、どちらか一方の回答がわからない場合</b>は<b>右のボックスにチェックをしてください</b><input type="checkbox", id= scales", name="tag" style="width:25px; height:25px;" onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p><b> 私の推しは<input name="ms" type="text" id="mines" required="required"/>です。         友人の推しは<input name="ys" type="text" id="youans"/>です。</b></p></pre>',
              '<br><p><b>自分と友人、どちらか一方の回答がわからない場合</b>は<b>右のボックスにチェックをしてください</b><input type="checkbox", id= scales", name="tag" style="width:25px; height:25px;" onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p><b> 私の血液型は<input name="ms" type="text" id="mines" required="required"/>です。         友人の血液型は<input name="ys" type="text" id="youans"/>です。</b></p></pre>',
              '<br><p><b>自分と友人、どちらか一方の回答がわからない場合</b>は<b>右のボックスにチェックをしてください</b><input type="checkbox", id= scales", name="tag" style="width:25px; height:25px;" onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p><b> 私の所属する学部は<input name="ms" type="text" id="mines" required="required"/>です。         友人の所属する学部は<input name="ys" type="text" id="youans"/>です。</b></p></pre>',
              '<br><p><b>自分と友人、どちらか一方の回答がわからない場合</b>は<b>右のボックスにチェックをしてください</b><input type="checkbox", id= scales", name="tag" style="width:25px; height:25px;" onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p><b> 私の将来の夢は<input name="ms" type="text" id="mines" required="required"/>です。         友人の将来の夢は<input name="ys" type="text" id="youans"/>です。</b></p></pre>'
            ]

label_c =['趣味は', '出身地は', '所属する部活・サークルは', 'アルバイトは', '特技は', '好きなスポーツは', '好きな食べ物は', '好きな飲み物は', '好きな色は', '好きな本は', '得意な教科は', '好きな服のブランドは', '好きな季節は', '好きなテレビ番組は', '好きな芸能人は', '好きな映画は', '好きなキャラクターは', '推しは','血液型は', '所属する学部は', '将来の夢は']

document.onkeypress = function(e) {
  // エンターキーだったら無効にする
  if (e.key === 'Enter') {
    return false;
  }
}



function tagflg0(ischecked){
    if(ischecked == true){
      document.getElementById("youans").disabled = true;
      document.getElementById("mines").disabled = true;
    } else {
      document.getElementById("youans").disabled = false;
      document.getElementById("mines").disabled = false;
    }
  }


var fullscreen_start ={
  type: 'fullscreen',
  message: '<p>これからは全画面表示で課題を行います。下のボタンをクリックしてください。</p>',
  button_label:"全画面表示に切り替え",
  fullscreen_mode: true
};

//名前入手の説明
var experimentstart = {
  type: 'instructions',
  pages: ["<p style = text-align: center'><p>これから次の課題で利用するため、あなたとあなたが先ほど思い浮かべた友人のプロフィールについて回答していただきます</p>"+"<p>ここで収集した情報については、次の課題でのみ利用し、研究以外の目的では利用しません</p>"
  　　　　　+"次のページからは下図のように、あなたとあなたの友人それぞれの<b>姓・名<b>を回答していただきます</p>"+"<img src='" + repo_site + "experiment/name_get.png' width='55%'></img>"+"<p>姓と名はそれぞれ漢字で回答してください</p>"
           +"<p>準備ができたら次へを押して回答して下さい</p>"
  ],
  allow_backward: false,
  show_clickable_nav: true,
  button_label_next: "次へ",
};

//名前の取得
var name_get = {
  type: 'survey-text',
  questions: [
        {prompt: '<p>次に行う課題で刺激として利用するため名前の記入をお願いしております。</p>'+'<p>ここで収集した名前については、次の課題でのみ使用し、分析には使用致しません。</p><br>'+'<b>あなたの姓（例：山田太郎さんなら山田）</b>を入力してください', name: 'name_up', required:'True'},
        {prompt: '<p><b>あなたの名（例：山田太郎さんなら太郎）</b>を入力してください</p>', name: 'name_do', required:'True'}
        ],
  button_label: '次へ',
  on_finish: function(data){
    namedo = jsPsych.data.get().last(1).values()[0].response.name_do;
    jsPsych.data.addProperties({name01: namedo});
    stim.push(namedo)
  }
};

var oname_get = {
  type: 'survey-text',
  questions: [
        {prompt: '<p>次に行う課題で刺激として利用するため名前の記入をお願いしております。</p>'+'<p>ここで収集した名前については、次の課題でのみ使用し、分析には使用致しません。<br><br></p>'+'<b>先ほど思い浮かべた友人の姓 （例：山田太郎さんなら山田）</b>を入力してください', name: 'fname_up', required:'True'},
        {prompt: '<p><b>先ほど思い浮かべた友人の名（例：山田太郎さんなら太郎）</b>を入力してください</p>', name: 'fname_do', required:'True'}
        ],
  button_label: '次へ',
  on_finish: function(data){
    fnamedo = jsPsych.data.get().last(1).values()[0].response.fname_do;
    jsPsych.data.addProperties({name03: fnamedo});
    stim.push(fnamedo)
  }
};

//カテゴリー取得の説明
var experimentstart2 = {
  type: 'instructions',
  pages: ["<img src='" + repo_site + "experiment/cate_get.png' width='70%'></img>"+"<p style = text-align: center'>次のページからは上図のように、<b>あなたとあなたが先ほど思い浮かべた友人それぞれのプロフィール</b>を回答していただきます</p>"+"<p>もし、<b>質問に対する回答がわからない場合</b>は回答欄上部の<b>ボックスにチェック</b>をしてください</p><br>"+"<p>準備ができたら次へを押して回答して下さい</p>"
  ],
  allow_backward: false,
  show_clickable_nav: true,
  button_label_next: "次へ",
};


//カテゴリーの取得
var categories = {
    on_start: function(trial){
      trial.preamble = survey_c[i];
      trial.html = stim_c[i];
    }
    ,
    type: 'survey-html-form',
    //button_label: "次へ"でラベルを変更
    button_label: '次へ',
    on_finish: function(data) {
      mstim = jsPsych.data.get().last(1).values()[0].response.ms; //この回の自分のデータ
      ystim = jsPsych.data.get().last(1).values()[0].response.ys; //この回相手のデータ
      target = jsPsych.data.get().last(1).values()[0].response.tag;//わからないかどうかを取得する
      //わからない場合もしくはystimが無回答だった場合
      if ( target === "on" || ystim === ""){
        data.correct = false;
      } else if(mstim !== ystim){ 
        let temp1 = msave + p; //addPropertiesで保存する用の列名（自分）
        let temp2 = ysave + p; //addPropertiesで保存する用の列名（自分）
  
        //temp1には"mstimuli0"が入っている。[temp1]のように"[]"で囲うことでObjectのkeyに変数を利用できる
        jsPsych.data.addProperties({[temp1] : mstim}); 
        jsPsych.data.addProperties({[temp2] : ystim}); 
        p = p + 1; //保存するときの名前がmyhobby0, myhobby1... 
        stim.push(label_c[i] + mstim, label_c[i] + ystim);//その回のカテゴリに対応するラベルと回答をリスト(stim)に挿入する      
      } 
    }
  };
  
  
  //カテゴリーズの処理をループする
  //一番最初に作ったカウンター"i"に1ずつ足して行って、pが4以上またはiが19以上になると抜けるようにしている
  var loop_node = {
    timeline: [categories],
    loop_function: function(data){
      if(p >= 5 || i >=19){
        return false;
      } else {
        i = i + 1
        return true;
    } 
  }
}

var instructions_block1 = {
    type: 'html-keyboard-response',
    stimulus:"<img src='" + repo_site + "experiment/yazi.png' width='50%'></img>"+"<p style = 'text-align: center; font-size: 1.25em;'>本番です</p>"+'<strong>←(左向きのやじるし)</strong>が出てきたときは左手の中指で<strong>E</strong>キーを押してください。 <br>' + '<strong>→(右向きのやじるし)</strong>が出てきたときは右手の中指で<strong>I</strong>キーを押してください。 <br>' + "もし" +
   "間違えた場合は、赤い文字でxが表示されます。正しいキーを押しなおしてください。<br>" +
    "できるだけ早く、正確にキーを押してください。<br><br> " +
    "準備ができたらスペースキーを押して始めて下さい</p>",
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
        post_trial_gap: 50,  
        left_category_key: 'E',
        right_category_key: 'I',
        left_category_label: ['←'],
        right_category_label: ['→'],
        response_ends_trial: true,
        data: { iat_type: 'main_1' }
      }
    ],
    timeline_variables: [
      {stimulus: '<p style="font-size: 60px">→</p>', stim_key_association: "right"},
      {stimulus: '<p style="font-size: 60px">←</p>', stim_key_association: "left"}
      ],
    randomize_order:true,
    repetitions: 10
  };

  var instructions_block2 = {
    type: 'html-keyboard-response',
    stimulus:"<img src='" + repo_site + "experiment/yazi.png' width='50%'></img>"+"<p style = 'text-align: center; font-size: 1.25em;'>先ほどとは矢印が表示されたときに押すキーが入れ替わっています<br><br>"+"本番です</p>"+'<strong>→(右向きのやじるし)</strong>が出てきたときは左手の中指で<strong>E</strong>キーを押してください。 <br>' + '<strong>←(左向きのやじるし)</strong>が出てきたときは右手の中指で<strong>I</strong>キーを押してください。 <br>' + "もし" +
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
        post_trial_gap: 50,  
        left_category_key: 'E',
        right_category_key: 'I',
        left_category_label: ['→'],
        right_category_label: ['←'],
        response_ends_trial: true,
        data: { iat_type: 'main_2' }
      }
    ],
    timeline_variables: [
      {stimulus: '<p style="font-size: 60px">→</p>', stim_key_association: "left"},
      {stimulus: '<p style="font-size: 60px">←</p>', stim_key_association: "right"}
      ],
    randomize_order:true,
    repetitions: 10
  };

//練習試行

//SC-IAT_practice:friend&self_vs_other

var instructions_block3 = {
  type: 'html-keyboard-response',
  stimulus:"<img src='" + repo_site + "experiment/sf.png' width='60%'></img>"+"<p style = 'text-align: center; font-size: 1.25em;'>練習です</p>"+"<p>画面中央に表示される単語が、左上の<b>「友人」</b>のカテゴリーに当てはまると思ったら左手の中指で<b>「E」</b>キーを、<br>右上の<b>「自分」</b>のカテゴリーに当てはまると思ったら右手の中指で<b>「I」</b>キーを押してください。</p>"+"<p><b>左右のカテゴリーは固定で、中央の単語が変わります。</b></p>"
  +"<p>もし間違えた場合は赤い文字でX（バツ）が中央に表示されるので、押したキーと反対のキーを押してください"
  +"<p style = 'font-size: 1.5em;'>単語が表示されたらできるだけ早く、正確にキーを押してください。<br><br> "+"準備ができたらスペースキーを押して始めて下さい</p>",
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
      left_category_label: ['友人'],
      right_category_label: ['自分'],
      response_ends_trial: true,
      data: { iat_type: 'practice_1' }
    }
  ],
  timeline_variables: [
    {stimulus:function(){
        return namedo;
    }, stim_key_association: 'right'},
    {stimulus:function(){
        return fnamedo;
    }, stim_key_association: 'left'},
    {stimulus:function(){
        return stim[2];
    }, stim_key_association: 'right'},
    {stimulus:function(){
        return stim[3];
    }, stim_key_association: 'left'},
    {stimulus:function(){
        return stim[4];
    }, stim_key_association: 'right'},
    {stimulus:function(){
        return stim[5];
    }, stim_key_association: 'left'},
    {stimulus:function(){
        return stim[6];
    }, stim_key_association: 'right'},
    {stimulus:function(){
        return stim[7];
    }, stim_key_association: 'left'},
    {stimulus:function(){
        return stim[8];
    }, stim_key_association: 'right'},
    {stimulus:function(){
        return stim[9];
    }, stim_key_association: 'left'},
    {stimulus:function(){
        return stim[11];
    }, stim_key_association: 'left'},
    {stimulus:function(){
        return stim[10];
    }, stim_key_association: 'right'}
  ],
  randomize_order:true,
  repetitions: 2
};

var instructions_block4 = {
  type: 'html-keyboard-response',
  stimulus:"<img src='" + repo_site + "experiment/sf.png' width='60%'></img>"+"<p style = 'text-align: center; font-size: 1.25em;'><p>本番です</p>"+"<p>画面中央に表示される単語が、左上の<b>「友人」</b>のカテゴリーに当てはまると思ったら左手の中指で<b>「E」</b>キーを、<br>右上の<b>「自分」</b>のカテゴリーに当てはまると思ったら右手の中指で<b>「I」</b>キーを押してください。</p>"+"<p><b>左右のカテゴリーは固定で、中央の単語が変わります。</b></p>"
  +"<p>もし間違えた場合は赤い文字でX（バツ）が中央に表示されるので、押したキーと反対のキーを押してください"
  +"<p style = 'font-size: 1.5em;'>単語が表示されたらできるだけ早く、正確にキーを押してください。<br><br> "+"準備ができたらスペースキーを押して始めて下さい</p>",
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
      left_category_label: ['友人'],
      right_category_label: ['自分'],
      response_ends_trial: true,
      data: { iat_type: 'main_3' }
    }
  ],
  timeline_variables: [
    {stimulus:function(){
        return namedo;
    }, stim_key_association: 'right'},
    {stimulus:function(){
        return fnamedo;
    }, stim_key_association: 'left'},
    {stimulus:function(){
        return stim[2];
    }, stim_key_association: 'right'},
    {stimulus:function(){
        return stim[3];
    }, stim_key_association: 'left'},
    {stimulus:function(){
        return stim[4];
    }, stim_key_association: 'right'},
    {stimulus:function(){
        return stim[5];
    }, stim_key_association: 'left'},
    {stimulus:function(){
        return stim[6];
    }, stim_key_association: 'right'},
    {stimulus:function(){
        return stim[7];
    }, stim_key_association: 'left'},
    {stimulus:function(){
        return stim[8];
    }, stim_key_association: 'right'},
    {stimulus:function(){
        return stim[9];
    }, stim_key_association: 'left'},
    {stimulus:function(){
        return stim[10];
    }, stim_key_association: 'right'},
    {stimulus:function(){
        return stim[11];
    }, stim_key_association: 'left'}
  ],
  randomize_order:true,
  repetitions: 6
};



var instructions_block5 = {
  type: 'html-keyboard-response',
  stimulus:"<img src='" + repo_site + "experiment/sf.png' width='60%'></img>"+"<p style = 'text-align: center; font-size: 1.25em;'>練習です</p>"+"<p>画面中央に表示される単語が、左上の<b>「友人」</b>のカテゴリーに当てはまると思ったら左手の中指で<b>「E」</b>キーを、<br>右上の<b>「自分」</b>のカテゴリーに当てはまると思ったら右手の中指で<b>「I」</b>キーを押してください。</p>"+"<p><b>左右のカテゴリーは固定で、中央の単語が変わります。</b></p>"
  +"<p>もし間違えた場合は赤い文字でX（バツ）が中央に表示されるので、押したキーと反対のキーを押してください"
  +"<p style = 'font-size: 1.5em;'>単語が表示されたらできるだけ早く、正確にキーを押してください。<br><br> "+"準備ができたらスペースキーを押して始めて下さい</p>",
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
      left_category_label: ['友人'],
      right_category_label: ['自分'],
      response_ends_trial: true,
      data: { iat_type: 'practice_2' }
    }
  ],
  timeline_variables: [
  {stimulus:function(){
      return namedo;
  }, stim_key_association: 'right'},
  {stimulus:function(){
      return fnamedo;
  }, stim_key_association: 'left'},
  ],
  randomize_order:true,
  repetitions: 3
};

var instructions_block6 = {
  type: 'html-keyboard-response',
  stimulus:"<img src='" + repo_site + "experiment/sf.png' width='60%'></img>"+"<p style = 'text-align: center; font-size: 1.25em;'>本番です</p>"+"<p>画面中央に表示される単語が、左上の<b>「友人」</b>のカテゴリーに当てはまると思ったら左手の中指で<b>「E」</b>キーを、<br>右上の<b>「自分」</b>のカテゴリーに当てはまると思ったら右手の中指で<b>「I」</b>キーを押してください。</p>"+"<p><b>左右のカテゴリーは固定で、中央の単語が変わります。</b></p>"
  +"<p>もし間違えた場合は赤い文字でX（バツ）が中央に表示されるので、押したキーと反対のキーを押してください"
  +"<p style = 'font-size: 1.5em;'>単語が表示されたらできるだけ早く、正確にキーを押してください。<br><br> "+"準備ができたらスペースキーを押して始めて下さい</p>",
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
      left_category_label: ['友人'],
      right_category_label: ['自分'],
      response_ends_trial: true,
      data: { iat_type: 'main_4' }
    }
  ],
  timeline_variables: [
    {stimulus:function(){
        return namedo;
    }, stim_key_association: 'right'},
    {stimulus:function(){
        return fnamedo;
    }, stim_key_association: 'left'},
  ],
  randomize_order:true,
  repetitions: 6
};

var if_node1 = {
  timeline: [instructions_block3, trial_block3],
  conditional_function: function(){
    if(p >= 5){
      return true;
    } else {
      return false;
    }
  }
}

var if_node2 = {
  timeline: [instructions_block5, trial_block5],
  conditional_function: function(){
    if(i >= 20){
      return true;
    } else {
      return false;
    }
  }
}

var if_node3 = {
  timeline: [instructions_block4, trial_block4],
  conditional_function: function(){
    if(p >= 5){
      return true;
    } else {
      return false;
    }
  }
}

var if_node4 = {
  timeline: [instructions_block6, trial_block6],
  conditional_function: function(){
    if(i >= 20){
      return true;
    } else {
      return false;
    }
  }
}

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
timeline.push(name_get);
timeline.push(oname_get);
timeline.push(experimentstart2);
timeline.push(loop_node);
timeline.push(instructions_block1);
timeline.push(trial_block1);
timeline.push(instructions_block2);
timeline.push(trial_block2);
timeline.push(if_node1);
timeline.push(if_node3);
timeline.push(if_node2);
timeline.push(if_node4);
timeline.push(fullscreen_end);
timeline.push(experimentend);

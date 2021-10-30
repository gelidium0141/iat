var repo_site = "https://gelidium0141.github.io/iat/";

//事前セッティング（実際に実験を動かしてから、下のコメントをみるとわかる）
let i = 0; //ループ何回目かのカウンター
let p = 0; //保存何個目かのカウンター
let msave = "mystimuli"; //一致して保存するときに利用する列名
let ysave = "yoursutimuli"; //一致して保存するときに利用する列名

var stim =[]
var survey_c = ['次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人で<strong>一致しないもの</strotng>についてお尋ねします。</p>'+'<p>あなたとあなたの友人の趣味についてお答えください。（例：私の趣味は読書です。）</p>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人で<strong>一致しないもの</strotng>についてお尋ねします。</p>'+'<p>あなたとあなたの友人の出身地についてお答えください。（例：私の出身地は大阪です。）</p>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人で<strong>一致しないもの</strotng>についてお尋ねします。</p>'+'<p>あなたとあなたの友人の年齢についてお答えください。（例：私の年齢は21歳です。）</p>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人で<strong>一致しないもの</strotng>についてお尋ねします。</p>'+'<p>あなたとあなたの友人の血液型についてお答えください。（例：私の血液型はA型です。）</p>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人で<strong>一致しないもの</strotng>についてお尋ねします。</p>'+'<p>あなたとあなたの友人の学部についてお答えください。（例：私の学部は社会学部です。）</p><br>'+'<p>もともと所属していたものを回答して頂いても大丈夫です</p>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人で<strong>一致しないもの</strotng>についてお尋ねします。</p>'+'<p>あなたとあなたの友人の部活・サークルについてお答えください。（例：私の部活・サークルは野球部です。）</p><br>'+'<p>もともと所属していたものを回答して頂いても大丈夫です</p>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人で<strong>一致しないもの</strotng>についてお尋ねします。</p>'+'<p>あなたとあなたの友人のアルバイトについてお答えください。（例：私のアルバイトはコンビニ店員です。）</p><br>'+'<p>もともと所属していたものを回答して頂いても大丈夫です</p>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人で<strong>一致しないもの</strotng>についてお尋ねします。</p>'+'<p>あなたとあなたの友人の特技についてお答えください。（例：私の特技は早口言葉です。）</p>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人で<strong>一致しないもの</strotng>についてお尋ねします。</p>'+'<p>あなたとあなたの友人の好きなスポーツについてお答えください。（例：私の好きなスポーツはサッカーです。）</p>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人で<strong>一致しないもの</strotng>についてお尋ねします。</p>'+'<p>あなたとあなたの友人の好きな食べ物についてお答えください。（例：私の好きな食べ物はオムライスです。）</p>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人で<strong>一致しないもの</strotng>についてお尋ねします。</p>'+'<p>あなたとあなたの友人の好きな飲み物についてお答えください。（例：私の好きな飲み物はコーヒーです。）</p>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人で<strong>一致しないもの</strotng>についてお尋ねします。</p>'+'<p>あなたとあなたの友人の嫌いな食べ物についてお答えください。（例：私の嫌いな食べ物はトマトです。）</p>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人で<strong>一致しないもの</strotng>についてお尋ねします。</p>'+'<p>あなたとあなたの友人の得意な教科についてお答えください。（例：私の得意な教科は数学です。）</p>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人で<strong>一致しないもの</strotng>についてお尋ねします。</p>'+'<p>あなたとあなたの友人の苦手な教科についてお答えください。（例：私の苦手な教科は英語です。）</p>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人で<strong>一致しないもの</strotng>についてお尋ねします。</p>'+'<p>あなたとあなたの友人の好きな季節についてお答えください。（例：私の好きな季節は夏です。）</p>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人で<strong>一致しないもの</strotng>についてお尋ねします。</p>'+'<p>あなたとあなたの友人の好きな本についてお答えください。（例：私の好きな本は鬼滅の刃です。）</p>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人で<strong>一致しないもの</strotng>についてお尋ねします。</p>'+'<p>あなたとあなたの友人の好きなテレビ番組についてお答えください。（例：私の好きなテレビ番組はしゃべくり007です。）</p>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人で<strong>一致しないもの</strotng>についてお尋ねします。</p>'+'<p>あなたとあなたの友人の好きな芸能人についてお答えください。（例：私の好きな芸能人は本田翼です。）</p>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人で<strong>一致しないもの</strotng>についてお尋ねします。</p>'+'<p>あなたとあなたの友人の嫌いな芸能人についてお答えください。（例：私の嫌いな芸能人は坂上忍です。）</p>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人で<strong>一致しないもの</strotng>についてお尋ねします。</p>'+'<p>あなたとあなたの友人の将来の夢についてお答えください。（例：私の将来の夢は研究者です。）</p>',
                '次に行う課題で刺激として利用するため、<b>あなた</b>と<b>先ほど思い浮かべていただいた友人</b>のプロフィールについてお尋ねします。<p>'+'<p>ここで得た情報は次の課題のみで利用し、研究以外の目的で利用することはありません。<br></p><br>'+'<p>あなたとあなたの友人で<strong>一致しないもの</strotng>についてお尋ねします。</p>'+'<p>あなたとあなたの友人の将来の夢についてお答えください。（例：私の将来の夢は研究者です。）</p>'
              ]
//inputタグに required="required"をつけると強制回答に
var stim_c = ['<p><b>自分と友人、どちらか一方の回答がわからない場合</b>または<b>異なる回答が思い浮かばない場合</b>は</p><br>'+'<p>右のボタンにチェックをしてください<input type="checkbox", id= scales", name="tag",  style="width:30px;height:30px　onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p> 私の趣味は<input name="ms" type="text" id="mines" required="required"/>です。         友人の趣味は<input name="ys" type="text" id="youans"/>です。</p></pre>',
              '<p><b>自分と友人、どちらか一方の回答がわからない場合</b>または<b>異なる回答が思い浮かばない場合</b>は</p><br>'+'<p>右のボタンにチェックをしてください<input type="checkbox", id= scales", name="tag",  style="width:30px;height:30px  onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p> 私の出身地は<input name="ms" type="text" id="mines" required="required"/>です。         友人の出身地は<input name="ys" type="text" id="youans"/>です。</p></pre>',
              '<p><b>自分と友人、どちらか一方の回答がわからない場合</b>または<b>異なる回答が思い浮かばない場合</b>は</p><br>'+'<p>右のボタンにチェックをしてください<input type="checkbox", id= scales", name="tag",  style="width:30px;height:30px  onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p> 私の年齢は<input name="ms" type="text" id="mines" required="required"/>です。         友人の年齢は<input name="ys" type="text" id="youans"/>です。</p></pre>',
              '<p><b>自分と友人、どちらか一方の回答がわからない場合</b>または<b>異なる回答が思い浮かばない場合</b>は</p><br>'+'<p>右のボタンにチェックをしてください<input type="checkbox", id= scales", name="tag",  style="width:30px;height:30px  onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p> 私の血液型は<input name="ms" type="text" id="mines" required="required"/>です。         友人の血液型は<input name="ys" type="text" id="youans"/>です。</p></pre>',
              '<p><b>自分と友人、どちらか一方の回答がわからない場合</b>または<b>異なる回答が思い浮かばない場合</b>は</p><br>'+'<p>右のボタンにチェックをしてください<input type="checkbox", id= scales", name="tag",  style="width:30px;height:30px  onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p> 私の学部は<input name="ms" type="text" id="mines" required="required"/>です。         友人の学部は<input name="ys" type="text" id="youans"/>です。</p></pre>',
              '<p><b>自分と友人、どちらか一方の回答がわからない場合</b>または<b>異なる回答が思い浮かばない場合</b>は</p><br>'+'<p>右のボタンにチェックをしてください<input type="checkbox", id= scales", name="tag",  style="width:30px;height:30px  onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p> 私の部活・サークルは<input name="ms" type="text"  required="required"/>です。         友人の部活・サークルは<input name="ys" type="text" id="youans"/>です。</p></pre>',
              '<p><b>自分と友人、どちらか一方の回答がわからない場合</b>または<b>異なる回答が思い浮かばない場合</b>は</p><br>'+'<p>右のボタンにチェックをしてください<input type="checkbox", id= scales", name="tag",  style="width:30px;height:30px  onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p> 私のアルバイトは<input name="ms" type="text" id="mines" required="required"/>です。         友人のアルバイトは<input name="ys" type="text" id="youans"/>です。</p></pre>',
              '<p><b>自分と友人、どちらか一方の回答がわからない場合</b>または<b>異なる回答が思い浮かばない場合</b>は</p><br>'+'<p>右のボタンにチェックをしてください<input type="checkbox", id= scales", name="tag",  style="width:30px;height:30px  onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p> 私の特技は<input name="ms" type="text" id="mines" required="required"/>です。         友人の特技は<input name="ys" type="text" id="youans"/>です。</p></pre>',
              '<p><b>自分と友人、どちらか一方の回答がわからない場合</b>または<b>異なる回答が思い浮かばない場合</b>は</p><br>'+'<p>右のボタンにチェックをしてください<input type="checkbox", id= scales", name="tag",  style="width:30px;height:30px  onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p> 私の好きなスポーツは<input name="ms" type="text" id="mines" required="required"/>です。         友人の好きなスポーツは<input name="ys" type="text" id="youans"/>です。</p></pre>',
              '<p><b>自分と友人、どちらか一方の回答がわからない場合</b>または<b>異なる回答が思い浮かばない場合</b>は</p><br>'+'<p>右のボタンにチェックをしてください<input type="checkbox", id= scales", name="tag",  style="width:30px;height:30px  onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p> 私の好きな食べ物は<input name="ms" type="text" id="mines" required="required"/>です。         友人の好きな食べ物は<input name="ys" type="text" id="youans"/>です。</p></pre>',
              '<p><b>自分と友人、どちらか一方の回答がわからない場合</b>または<b>異なる回答が思い浮かばない場合</b>は</p><br>'+'<p>右のボタンにチェックをしてください<input type="checkbox", id= scales", name="tag",  style="width:30px;height:30px  onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p> 私の好きな飲み物は<input name="ms" type="text" id="mines" required="required"/>です。         友人の好きな飲み物は<input name="ys" type="text" id="youans"/>です。</p></pre>',
              '<p><b>自分と友人、どちらか一方の回答がわからない場合</b>または<b>異なる回答が思い浮かばない場合</b>は</p><br>'+'<p>右のボタンにチェックをしてください<input type="checkbox", id= scales", name="tag",  style="width:30px;height:30px  onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p> 私の嫌いな食べ物は<input name="ms" type="text" id="mines" required="required"/>です。         友人の嫌いな食べ物は<input name="ys" type="text" id="youans"/>です。</p></pre>',
              '<p><b>自分と友人、どちらか一方の回答がわからない場合</b>または<b>異なる回答が思い浮かばない場合</b>は</p><br>'+'<p>右のボタンにチェックをしてください<input type="checkbox", id= scales", name="tag",  style="width:30px;height:30px  onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p> 私の得意な教科は<input name="ms" type="text" id="mines" required="required"/>です。         友人の得意な教科は<input name="ys" type="text" id="youans"/>です。</p></pre>',
              '<p><b>自分と友人、どちらか一方の回答がわからない場合</b>または<b>異なる回答が思い浮かばない場合</b>は</p><br>'+'<p>右のボタンにチェックをしてください<input type="checkbox", id= scales", name="tag",  style="width:30px;height:30px  onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p> 私の苦手な教科は<input name="ms" type="text" id="mines" required="required"/>です。         友人の苦手な教科は<input name="ys" type="text" id="youans"/>です。</p></pre>',
              '<p><b>自分と友人、どちらか一方の回答がわからない場合</b>または<b>異なる回答が思い浮かばない場合</b>は</p><br>'+'<p>右のボタンにチェックをしてください<input type="checkbox", id= scales", name="tag",  style="width:30px;height:30px  onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p> 私の好きな季節は<input name="ms" type="text" id="mines" required="required"/>です。         友人の好きな季節は<input name="ys" type="text" id="youans"/>です。</p></pre>',
              '<p><b>自分と友人、どちらか一方の回答がわからない場合</b>または<b>異なる回答が思い浮かばない場合</b>は</p><br>'+'<p>右のボタンにチェックをしてください<input type="checkbox", id= scales", name="tag",  style="width:30px;height:30px  onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p> 私の好きな本は<input name="ms" type="text" id="mines" required="required"/>です。         友人の好きな本は<input name="ys" type="text" id="youans"/>です。</p></pre>',
              '<p><b>自分と友人、どちらか一方の回答がわからない場合</b>または<b>異なる回答が思い浮かばない場合</b>は</p><br>'+'<p>右のボタンにチェックをしてください<input type="checkbox", id= scales", name="tag",  style="width:30px;height:30px  onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p> 私の好きなテレビ番組は<input name="ms" type="text" id="mines" required="required"/>です。         友人の好きなテレビ番組は<input name="ys" type="text" id="youans"/>です。</p></pre>',
              '<p><b>自分と友人、どちらか一方の回答がわからない場合</b>または<b>異なる回答が思い浮かばない場合</b>は</p><br>'+'<p>右のボタンにチェックをしてください<input type="checkbox", id= scales", name="tag",  style="width:30px;height:30px  onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p> 私の好きな芸能人は<input name="ms" type="text" id="mines" required="required"/>です。         友人の好きな芸能人は<input name="ys" type="text" id="youans"/>です。</p></pre>',
              '<p><b>自分と友人、どちらか一方の回答がわからない場合</b>または<b>異なる回答が思い浮かばない場合</b>は</p><br>'+'<p>右のボタンにチェックをしてください<input type="checkbox", id= scales", name="tag",  style="width:30px;height:30px  onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p> 私の嫌いな芸能人は<input name="ms" type="text" id="mines" required="required"/>です。         友人の嫌いな芸能人は<input name="ys" type="text" id="youans"/>です。</p></pre>',
              '<p><b>自分と友人、どちらか一方の回答がわからない場合</b>または<b>異なる回答が思い浮かばない場合</b>は</p><br>'+'<p>右のボタンにチェックをしてください<input type="checkbox", id= scales", name="tag",  style="width:30px;height:30px  onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p> 私の将来の夢は<input name="ms" type="text" id="mines" required="required"/>です。         友人の将来の夢は<input name="ys" type="text" id="youans"/>です。</p></pre>',
              '<p><b>自分と友人、どちらか一方の回答がわからない場合</b>または<b>異なる回答が思い浮かばない場合</b>は</p><br>'+'<p>右のボタンにチェックをしてください<input type="checkbox", id= scales", name="tag",  style="width:30px;height:30px  onClick="tagflg0(this.checked);" ><br></p><br>'+'<pre><p> 私の将来の夢は<input name="ms" type="text" id="mines" required="required"/>です。         友人の将来の夢は<input name="ys" type="text" id="youans"/>です。</p></pre>'
            ]

label_c =['趣味は', '出身地は', '年齢は', '血液型は', '学部は', '部活・サークルは', 'アルバイトは', '特技は', '好きなスポーツは', '好きな食べ物は', '好きな飲み物は', '嫌いな食べ物は','得意な教科は', '苦手な教科は', '好きな季節は', '好きな本は', '好きなテレビ番組', '好きな芸能人は', '嫌いな芸能人は', '将来の夢は']

document.onkeypress = function(e) {
  // エンターキーだったら無効にする
  if (e.key === 'Enter') {
    return false;
  }
}

function tagflg0(ischecked){
    if(ischecked == true){
      document.getElementById("youans").disabled = true;
    } else {
      document.getElementById("youans").disabled = false;
    }
  }

function tagflg0(ischecked){
    if(ischecked == true){
      document.getElementById("mines").disabled = true;
    } else {
      document.getElementById("mines").disabled = false;
    }
  }


var fullscreen_start ={
  type: 'fullscreen',
  message: '<p>これからは全画面表示で課題を行います。下のボタンをクリックしてください。</p>',
  button_label:"全画面表示に切り替え",
  fullscreen_mode: true
};


//名前の取得
var name_get = {
  type: 'survey-text',
  questions: [
        {prompt: '<p>次に行う課題で刺激として利用するため名前の記入をお願いしております。</p>'+'<p>ここで収集した名前については、次の課題でのみ使用し、分析には使用致しません。</p><br>'+'<b>あなたの名字（例：山田太郎さんなら山田）</b>を入力してください', name: 'name_up', required:'True'},
        {prompt: '<p><b>あなたの名前（例：山田太郎さんなら太郎）</b>を入力してください</p>', name: 'name_do', required:'True'},
        {prompt: '<b>あなたのあだな</b>を<strong>ひらがな</strong>で入力してください<br><strong>（あなたが普段、先ほど思い浮かべた友人から呼ばれる呼び名を入力してください）</strong>', name: 'name_sc', required:'True'},
        ],
  button_label: '次へ',
  on_finish: function(data){
    namedo = jsPsych.data.get().last(1).values()[0].response.name_do;
    namesc = jsPsych.data.get().last(1).values()[0].response.name_sc;
    jsPsych.data.addProperties({name01: namedo});
    jsPsych.data.addProperties({name02: namesc});
    stim.push(namedo, namesc)
  }
};

var oname_get = {
  type: 'survey-text',
  questions: [
        {prompt: '<p>次に行う課題で刺激として利用するため名前の記入をお願いしております。</p>'+'<p>ここで収集した名前については、次の課題でのみ使用し、分析には使用致しません。<br><br></p>'+'<b>先ほど思い浮かべた友人の名字 （例：山田太郎さんなら山田）</b>を入力してください', name: 'fname_up', required:'True'},
        {prompt: '<p><b>先ほど思い浮かべた友人の名前（例：山田太郎さんなら太郎）</b>を入力してください</p>', name: 'fname_do', required:'True'},
        {prompt: '<b>先ほど思い浮かべた友人のあだな</b>を<strong>ひらがな</strong>で入力してください<br><strong>（あなたが普段、その人に対して使用する呼び名を入力してください）</strong>', name: 'fname_sc', required:'True'},
        ],
  button_label: '次へ',
  on_finish: function(data){
    fnamedo = jsPsych.data.get().last(1).values()[0].response.fname_do;
    fnamesc = jsPsych.data.get().last(1).values()[0].response.fname_sc;
    jsPsych.data.addProperties({name03: fnamedo});
    jsPsych.data.addProperties({name04: fnamesc});
    stim.push(fnamedo, fnamesc)
  }
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
      if(p >= 4 || i >=19){
        return false;
      } else {
        i = i + 1
        return true;
    } 
  }
}

//練習試行
var instructions_block1 = {
  type: "html-keyboard-response",
  stimulus:"<img src='" + repo_site + "experiment/bf.png' width='60%'></img>"+"<p style = text-align: center'><p>これは練習です</p>"+"<p>キーボードを利用した単語の分類課題を行います。</p>"+"<p>画面中央に表示される単語が、左上の<b>「むし」</b>のカテゴリーに当てはまると思ったら<b>「E」</b>キーを、<br>右上の<b>「はな」</b>のカテゴリーに当てはまると思ったら<b>「I」</b>キーを押してください。</p>"+"<p><b>左右のカテゴリーは固定で、中央の単語が変わります。</b></p>"
  +"<p>もし間違えた場合は赤い文字でX（バツ）が中央に表示されるので、押したキーと反対のキーを押してください"
  +"<p style = 'font-size: 1.5em;'>単語が表示されたらできるだけ早く、正確にキーを押してください。<br><br> "+"準備ができたらスペースキーを押して始めて下さい</p>",
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
      left_category_label: ['むし'],
      right_category_label: ['はな'],
      response_ends_trial: true,
      data: {iat_type:'practice_1'}
    }
  ],
  timeline_variables: [
    {stimulus: "バラ", stim_key_association: "right"},
    {stimulus: "カブトムシ", stim_key_association: "left"},
    {stimulus: "さくら", stim_key_association: "right"},
    {stimulus: "チューリップ", stim_key_association: "right"},
    {stimulus: "バッタ", stim_key_association: "left"},
    {stimulus: "ユリ", stim_key_association: "right"},
    {stimulus: "キク", stim_key_association: "right"},
    {stimulus: "ゴキブリ", stim_key_association: "left"},
    {stimulus: "クワガタ", stim_key_association: "left"},
    {stimulus: "ひまわり", stim_key_association: "right"},
    {stimulus: "ハエ", stim_key_association: "left"},
    {stimulus: "ハチ", stim_key_association: "left"}
    ],
  randomize_order:true,
  repetitions: 2
};


var instructions_block2 = {
  type: "html-keyboard-response",
  stimulus:"<img src='" + repo_site + "experiment/bf.png' width='60%'></img>"+"<p style = text-align: center'><p>これは本番です</p>"+"<p>キーボードを利用した単語の分類課題を行います。</p>"+"<p>画面中央に表示される単語が、左上の<b>「むし」</b>のカテゴリーに当てはまると思ったら<b>「E」</b>キーを、<br>右上の<b>「はな」</b>のカテゴリーに当てはまると思ったら<b>「I」</b>キーを押してください。</p>"+"<p><b>左右のカテゴリーは固定で、中央の単語が変わります。</b></p>"
  +"<p>もし間違えた場合は赤い文字でX（バツ）が中央に表示されるので、押したキーと反対のキーを押してください"
  +"<p style = 'font-size: 1.5em;'>単語が表示されたらできるだけ早く、正確にキーを押してください。<br><br> "+"準備ができたらスペースキーを押して始めて下さい</p>",
  choices: [" "]
};

var trial_block2 = {
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
      left_category_label: ['むし'],
      right_category_label: ['はな'],
      response_ends_trial: true,
      data: {iat_type:'mian_1'}
    }
  ],
  timeline_variables: [
    {stimulus: "バラ", stim_key_association: "right"},
    {stimulus: "カブトムシ", stim_key_association: "left"},
    {stimulus: "さくら", stim_key_association: "right"},
    {stimulus: "チューリップ", stim_key_association: "right"},
    {stimulus: "バッタ", stim_key_association: "left"},
    {stimulus: "ユリ", stim_key_association: "right"},
    {stimulus: "キク", stim_key_association: "right"},
    {stimulus: "ゴキブリ", stim_key_association: "left"},
    {stimulus: "クワガタ", stim_key_association: "left"},
    {stimulus: "ひまわり", stim_key_association: "right"},
    {stimulus: "ハエ", stim_key_association: "left"},
    {stimulus: "ハチ", stim_key_association: "left"}
    ],
    randomize_order:true,
    repetitions: 6
};

//SC-IAT_practice:friend&self_vs_other

var instructions_block3 = {
  type: 'html-keyboard-response',
  stimulus:"<img src='" + repo_site + "experiment/so.png' width='60%'></img>"+"<p style = text-align: center'><p>先ほどの課題とはカテゴリーが変わっています</p>"+"<p>これは練習です</p>"+"<p>画面中央に表示される単語が、左上の<b>「友人」</b>のカテゴリーに当てはまると思ったら左手の中指で<b>「E」</b>キーを、<br>右上の<b>「自分」</b>のカテゴリーに当てはまると思ったら右手の中指で<b>「I」</b>キーを押してください。</p>"+"<p><b>左右のカテゴリーは固定で、中央の単語が変わります。</b></p>"
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
      data: { iat_type: 'practice_2' }
    }
  ],
  timeline_variables: [
    {stimulus:function(){
        return namedo;
    }, stim_key_association: 'right'},
    {stimulus:function(){
        return namesc;
    }, stim_key_association: 'right'},
    {stimulus:function(){
        return fnamedo;
    }, stim_key_association: 'left'},
    {stimulus:function(){
        return fnamesc;
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
  repetitions: 2
};

var instructions_block4 = {
  type: 'html-keyboard-response',
  stimulus:"<img src='" + repo_site + "experiment/so.png' width='60%'></img>"+"<p style = text-align: center'><p>これは本番です</p>"+"<p>画面中央に表示される単語が、左上の<b>「友人」</b>のカテゴリーに当てはまると思ったら左手の中指で<b>「E」</b>キーを、<br>右上の<b>「自分」</b>のカテゴリーに当てはまると思ったら右手の中指で<b>「I」</b>キーを押してください。</p>"+"<p><b>左右のカテゴリーは固定で、中央の単語が変わります。</b></p>"
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
      data: { iat_type: 'main_2' }
    }
  ],
  timeline_variables: [
    {stimulus:function(){
        return namedo;
    }, stim_key_association: 'right'},
    {stimulus:function(){
        return namesc;
    }, stim_key_association: 'right'},
    {stimulus:function(){
        return fnamedo;
    }, stim_key_association: 'left'},
    {stimulus:function(){
        return fnamesc;
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
  stimulus:"<img src='" + repo_site + "experiment/so.png' width='60%'></img>"+"<p style = text-align: center'><p>先ほどの課題とはカテゴリーが変わっています</p>"+"<p>これは練習です</p>"+"<p>画面中央に表示される単語が、左上の<b>「友人」</b>のカテゴリーに当てはまると思ったら左手の中指で<b>「E」</b>キーを、<br>右上の<b>「自分」</b>のカテゴリーに当てはまると思ったら右手の中指で<b>「I」</b>キーを押してください。</p>"+"<p><b>左右のカテゴリーは固定で、中央の単語が変わります。</b></p>"
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
      return namesc;
  }, stim_key_association: 'right'},
  {stimulus:function(){
      return fnamedo;
  }, stim_key_association: 'left'},
  {stimulus:function(){
      return fnamesc;
  }, stim_key_association: 'left'},
  ],
  repetitions: 2
};

var instructions_block6 = {
  type: 'html-keyboard-response',
  stimulus:"<img src='" + repo_site + "experiment/so.png' width='60%'></img>"+"<p style = text-align: center'><p>これは本番です</p>"+"<p>画面中央に表示される単語が、左上の<b>「友人」</b>のカテゴリーに当てはまると思ったら左手の中指で<b>「E」</b>キーを、<br>右上の<b>「自分」</b>のカテゴリーに当てはまると思ったら右手の中指で<b>「I」</b>キーを押してください。</p>"+"<p><b>左右のカテゴリーは固定で、中央の単語が変わります。</b></p>"
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
      data: { iat_type: 'main_2' }
    }
  ],
  timeline_variables: [
    {stimulus:function(){
        return namedo;
    }, stim_key_association: 'right'},
    {stimulus:function(){
        return namesc;
    }, stim_key_association: 'right'},
    {stimulus:function(){
        return fnamedo;
    }, stim_key_association: 'left'},
    {stimulus:function(){
        return fnamesc;
    }, stim_key_association: 'left'},
  ],
  randomize_order:true,
  repetitions: 6
};

var if_node1 = {
  timeline: [instructions_block3, trial_block3],
  conditional_function: function(){
    if(p >= 4){
      return true;
    } else {
      return false;
    }
  }
}

var if_node2 = {
  timeline: [instructions_block5, trial_block5],
  conditional_function: function(){
    if(i >=19){
      return true;
    } else {
      return false;
    }
  }
}

var if_node3 = {
  timeline: [instructions_block4, trial_block4],
  conditional_function: function(){
    if(p >= 4){
      return true;
    } else {
      return false;
    }
  }
}

var if_node4 = {
  timeline: [instructions_block6, trial_block6],
  conditional_function: function(){
    if(i >=19){
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
timeline.push(fullscreen_start)
timeline.push(name_get);
timeline.push(oname_get);
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

browser.checker.js - библиотека для проверки поддержки браузера пользователя web-страницей.
------------------------------------------------------------------------------------------

<p>По заданному переченю браузеров и их минимальным версиям проверяется браузер пользователя по User-Agent.</p>
<p>Если браузер не соответствует заданным, в тело страницы вставляется текст со ссылками для загрузки рекомендуемого(ых) браузера(ов), по умолчанию это:</p> 
<ul>
<li>IE 8+</li>
<li>Opera 10.5+</li>
<li>Safari 5+</li>
<li>Chrome 10+</li>
<li>Firefox 4+</li>
<li>Firefox 4+</li>
</ul>

<p>Зависимости от других библиотек нет.</p>

**Как подключить библиотеку:**

<pre><code>
<br/><span style="color:#360093;">&lt;head&gt;</span>
<br/>&#160;&#160;&#160; ...
<br/>&#160;&#160;&#160; <span style="color:#7F7F96; font-style: italic;">//перед другими скриптами</span>
<br/>&#160;&#160;&#160; <span style="color:#360093;">&lt;script type="<span style="color: #5D9074;">text/javascript</span>" src="<span style="color: #5D9074;">js/browser.checker.min.js</span>"&gt;&lt;/script&gt;</span>
<br/>&#160;&#160;&#160; ...
<br/><span style="color:#360093;">&lt;/head&gt;</span>  
</pre></code>

<p>Кодировка UTF-8.</p>

**Изменение перечення и версий поддерживаемых браузеров:**
<ol>
  <li>Изменить файл *source/config.js* :
     <pre><code>
      <br/> ....
      <br/> {
      <br/> <span style="color:#7F7F96; font-style: italic;">//имя браузера, которое будет отображаться пользователю в ссылке для загрузки</span>
      <br/> <span style="color:#660E7A;">name:</span> <span style="color: #5D9074;">"Opera",</span>
      <br/> <span style="color:#7F7F96; font-style: italic;">//минимальная версия браузера, ниже которой предлагается загрузить новый</span>                      
            <span style="color:#660E7A;">minVersion:</span> <span style="color: #5D9074;">10.5,</span> 
      <br/> <span style="color:#7F7F96; font-style: italic;">//откуда загружать браузер</span>  
            <span style="color:#660E7A;">downloadLink:</span> <span style="color: #5D9074;">"https://www.opera.com/",</span> 
      <br/> <span style="color:#7F7F96; font-style: italic;">//иконка в ссылке для загрузки (путь указывается относительно страницы, к которой будет подключена библиотека)</span>       
            <span style="color:#660E7A;">iconLink:</span> <span style="color: #5D9074;">"./img/opera.png",</span> 
      <br/> <span style="color:#7F7F96; font-style: italic;">//регулярное выражение, по которому определяется наименование и версия браузера из User-Agent</span> 
      <br/> <span style="color:#660E7A;">regexp:</span> <span style="color: #5D9074;">/........../i</span>
      <br/> },
      <br/> ....
      <br/>
      </pre></code>
  </li>
  <li>Собрать библиотеку (должен быть установлен Node.js):</li>
  <ul>
    <li>добавить команду *grunt* в системные переменные, выполнив
       <pre>
          <code>
          nmp install -g grunt cli
          </code>
       </pre>
    </li>
    <li>перейти в корень проекта (где лежит файл *package.json*), установить необходимые модули
       <pre>
          <code>
          npm install
          </code>
       </pre>
    </li>
    <li>в корне проекта выполнить 
        <pre>
          <code>
          grunt
          </code>
        </pre>
    </li>
    <li>в каталоге *build* появятся две версии библиотеки: минимизированная *browser.checker.min.js* и обычная *browser.checker.js* .
  </ul>
</ol>





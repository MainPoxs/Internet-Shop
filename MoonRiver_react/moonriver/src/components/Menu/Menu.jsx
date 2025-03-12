import "./Menu.css";

function Menu() {
  return (
    <div class="navMenu ">
      <div class="navMenuHeader ">
        <img class="navLogo" src="./image/logoNavMenu.svg" alt="логотип"></img>
        <summary class="closeSummary btnSummary">
          <div class="lineCenter lineStyle"></div>
          <div class="lineBottom lineStyle"></div>
        </summary>
      </div>
      <nav>
        <ul class="navlist">
          <li>ЮВЕЛИРНЫЕ ИЗДЕЛИЯ</li>
          <li>ЧАСЫ</li>
          <li>АРОМАТЫ</li>
          <li>БРЕНДЫ</li>
          <li>ИЗДЕЛИЯ ИЗ КОЖИ</li>
          <li>СВАДЕБНЫЕ УКРАШЕНИЯ</li>
          <li>ДРУГОЕ</li>
        </ul>
      </nav>
      <table>
        <thead id="thead">
          <tr>
            <th id="tr1">ДЛЯ КОГО</th>
            <th id="tr2">КАТЕГОРИИ</th>
            <th id="tr3">МАТЕРИАЛ</th>
            <th id="tr4">БРЕНД</th>
          </tr>
        </thead>
        <tbody>
          <tr id="tr1">
            <td>
              <a href="#" target="_blank">
                Для женщин
              </a>
            </td>
            <td>
              <a href="#" target="_blank">
                Для детей
              </a>
            </td>
            <td>
              <a href="#" target="_blank">
                Для мужчин
              </a>
            </td>
          </tr>
          <tr id="tr2">
            <td>
              <a href="#" target="_blank">
                Кольца
              </a>
            </td>
            <td>
              <a href="#" target="_blank">
                Браслеты
              </a>
            </td>
            <td>
              <a href="#" target="_blank">
                Колье
              </a>
            </td>
            <td>
              <a href="#" target="_blank">
                Серьги
              </a>
            </td>
            <td>
              <a href="#" target="_blank">
                Броши
              </a>
            </td>
          </tr>
          <tr id="tr3">
            <td>
              <a href="#" target="_blank">
                Изделия с бриллиантами
              </a>
            </td>
            <td>
              <a href="#" target="_blank">
                Желтое золото
              </a>
            </td>
            <td>
              <a href="#" target="_blank">
                Белое золото
              </a>
            </td>
            <td>
              <a href="#" target="_blank">
                Розовое золото
              </a>
            </td>
          </tr>
          <tr id="tr4">
            <td>
              <a href="#" target="_blank">
                Mercury
              </a>
            </td>
            <td>
              <a href="#" target="_blank">
                Chopard
              </a>
            </td>
            <td>
              <a href="#" target="_blank">
                Cartier
              </a>
            </td>
            <td>
              <a href="#" target="_blank">
                Graff
              </a>
            </td>
            <td>
              <a href="#" target="_blank">
                Garrard
              </a>
            </td>
            <td>
              <a class="tr4Font" href="#" target="_blank">
                Показать все бренды
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="navPhotoBlock">
        <div class="navPhoto">
          <div class="futuraBook18">
            <a href="#" target="_blank">
              <img src="image/newPhoto.svg"></img>
            </a>
          </div>
        </div>
        <div class="navContacts">
          <div class="futuraBook14">ТЕЛЕФОН ГОРЯЧЕЙ ЛИНИИ</div>
          <div class="futuraBook14 contactTopA ">+7 800 456 456</div>
          <div class="futuraBook14">ПОДПИШИТЕСЬ НА НОВОСТИ</div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
export default Menu;

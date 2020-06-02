import React from "react";
import style from "./SimplePage.module.css";
import exsempls from "../../../assets/img/max.png"
import Btn from "../../../common/Btn/Btn";
import {NavLink} from "react-router-dom";


const SimplePage = (props) => {
    return (<div className={style.simpleWrapper}>
            <div className={style.simpleContainer}>
              <div className={style.PhotoInner}>
                  <img src={exsempls} className={style.exsemples} />
              </div>
                <div className={style.TextInner}>
                    Каеой-то текст
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cupiditate dolores doloribus
                        eos, harum nam, nihil omnis porro praesentium quaerat quibusdam repellendus saepe sequi ut
                        voluptatem? Autem facilis itaque sed.</div>
                    <div>Accusantium adipisci at consectetur consequuntur ea eligendi error est et ex, excepturi fugit
                        illum inventore ipsum libero magni molestiae necessitatibus numquam obcaecati omnis quis
                        quisquam tempore voluptas voluptate voluptates voluptatum.
                    </div>
                    <div>Accusamus architecto assumenda at beatae cum debitis dolor dolore eos est et eveniet facilis
                        incidunt ipsam iure iusto, maxime minima nemo nobis non optio perspiciatis quidem ratione
                        reprehenderit ut voluptatibus.
                    </div>
                    <div>Ab atque dolore eos eveniet impedit, iusto molestiae nam quasi quidem quod repudiandae, sed ut
                        veniam veritatis vero voluptas voluptatem? A adipisci at, consequatur ducimus excepturi iure
                        laudantium nam perferendis.
                    </div>
                    <div>Alias aliquam aliquid atque blanditiis consequuntur, cum cumque delectus earum eveniet illo
                        maiores minima natus non optio porro, quisquam repellat! Aperiam illo necessitatibus placeat
                        praesentium quas quibusdam quisquam tempore ut.
                    </div>
                    <div>Ab architecto assumenda cupiditate delectus deserunt doloremque eius enim et exercitationem,
                        hic illum incidunt inventore ipsa libero mollitia nam non placeat provident quaerat quam quidem
                        repellat rerum sunt velit voluptate!
                    </div>
                    <NavLink to={'/'}>
                        <Btn props={"Вернуться на главную"}/>
                    </NavLink>
                </div>

            </div>
        </div>)

}
export default SimplePage;
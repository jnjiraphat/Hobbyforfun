import React from 'react'
import KMUTT from '../img/kmutt.png'
import Lactasoy from '../img/lactasoy.png'
import Vivo from '../img/vivo.png'

const Sponsor = () =>(
    <div>
        <br />
        <table>
            <thead>
            <tr>
            <th className="box-sponsor">
        <div class="panel">
            <div class="panel-body hvr-pulse-grow">
                <img src={KMUTT} alt="" id="pic1" />
            </div>
        </div>
            </th>

            <th className="box-sponsor">
        <div class="panel">
            <div class="panel-body hvr-pulse-grow">
                <img src={Lactasoy} alt="" id="pic2" />
            </div>
        </div>
            </th>

            <th className="box-sponsor">
        <div class="panel">
            <div class="panel-body hvr-pulse-grow">
                <img src={Vivo} alt="" id="pic3" />
            </div>
        </div>
            </th>                    
            </tr>
            </thead>        
        </table>
        <br /><br /><br />
    </div>
)
export default Sponsor
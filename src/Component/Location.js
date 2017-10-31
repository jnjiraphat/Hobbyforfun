import React from 'react'

const Maps = () =>(
    <div>
        <table>
            <thead>
            <tr>
            <th className="im-pad thbox">
        <div class="map">
            <br /><br />
            <iframe 
                width="600" 
                height="366" 
                frameborder="0" 
                scrolling="no" 
                marginheight="0" 
                marginwidth="0" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1938.5466320412652!2d100.49321848129814!3d13.652090394771959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf656e94ff13324ad!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14Lie4Lij4Liw4LiI4Lit4Lih4LmA4LiB4Lil4LmJ4Liy4LiY4LiZ4Lia4Li44Lij4Li1!5e0!3m2!1sth!2sth!4v1509097935443">
            </iframe>
        </div>
            </th>
            <th className="thbox">
        <div class="conbox conbox-add address">
            <h3 className="pad-add text-center tpcontent">Address</h3>
                <address className="pad-cadd content">
                    <strong>King Mongkut's University of Technology Thonburi</strong><br />
                    126 Pracha Uthit Rd,<br />
                    Khwaeng Bang Mot,<br />
                    Khet Thung Khru,<br />
                    Krung Thep Maha Nakhon 10140<br />
                </address>
        </div>
            </th>
            </tr>
            </thead>        
        </table>
    </div>    
)
export default Maps
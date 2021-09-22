import React, { Component } from 'react';
             import OrgChart from '@balkangraph/orgchart.js';

             export default class extends Component {

                  constructor(props) {
                    super(props);
                    this.divRef = React.createRef();
                  }

                shouldComponentUpdate() {
                    return false;
                }

                componentDidMount() {
                    this.chart = new OrgChart(this.divRef.current , {
                        template: "luba",
                        zoom: {
                            speed: 5,
                            smooth: 100
                        },
                        layout: OrgChart.mixed,
                        nodeBinding: {
                            img_0: "img",
                            field_0: "name",
                            field_1: "title"
                            
                        },
                        nodes: [
            
                            { id: "2", pid: "22",  name: "Dante Raso", title: "MRO Lead / Market researcher - Asia", email: "d_raso@live.concordia.ca", img:"https://www.dropbox.com/sh/3djmzq14g30xcwg/AACBDE4Z_N9jSWHVMIeRkdCka/2.png?raw=1" },
                            { id: "3", pid: "2",  name: "Robert Latif", title: "Market researcher - Europe + Africa / Editor", email: "r_atif@live.concordia.ca", img:"https://www.dropbox.com/sh/3djmzq14g30xcwg/AABYXnP80YelAR1GZCC32yQYa/3.png?raw=1" },
                            { id: "4", pid: "2",  name: "Christina Wong", title: "Market researcher - North America / Formatting specialist and referencing ", email: "w_hrist@live.concordia.ca", img:"https://www.dropbox.com/sh/3djmzq14g30xcwg/AAD-63hMtu0tdtdGuLYxdGJXa/4.png?raw=1" },
                            { id: "5", pid: "6",  name: "Sarah Neda", title: "Document Control / Research Specialist", email: "s_neda@live.concordia.ca", img:"https://www.dropbox.com/sh/3djmzq14g30xcwg/AADiimGbMsi5QuYw3Dch5Ttma/5.png?raw=1" },
                            { id: "6", pid: "24",  name: "Alice Vroubel", title: "TS Lead /Arbitrator / Research Specialist", email: "a_vroube@live.concordia.ca", img:"https://www.dropbox.com/sh/3djmzq14g30xcwg/AADn5tB047f0oFC6PBz0B5tza/6.png?raw=1" },
                            { id: "7", pid: "2",  name: "Sandrine Sélim", title: "Challenger / Expeditor / Research Specialist", email: "s_selim@live.concordia.ca", img:"https://www.dropbox.com/sh/3djmzq14g30xcwg/AABQVacsyGyZJvQFc2te7SQha/7.png?raw=1" },
                            { id: "8", pid: "6",  name: "Gala Licheva", title: "Proof-reader / Connector / Research Specialist", email: "g_lichev@live.concordia.ca", img:"https://www.dropbox.com/sh/3djmzq14g30xcwg/AABTdK9-K4s8NqpOQdhLlTsQa/8.png?raw=1" },
                            { id: "9", pid: "6",  name: "Jérémie Lemerre", title: "Formatting / Research Specialist ", email: "j_lemerr@live.concordia.ca", img:"https://www.dropbox.com/sh/3djmzq14g30xcwg/AADIydGYYXZ_PbkhsjQwFt35a/9.png?raw=1" },
                            { id: "10", pid: "23",  name: "Dilkaram Ghuman", title: "SS Lead / research specialist", email: "d_ghuman@live.concordia.ca", img:"https://www.dropbox.com/sh/3djmzq14g30xcwg/AADo3hOKybk9qohNYakDNdjHa/10.png?raw=1" },
                            { id: "11", pid: "10",  name: "Richard El Chaar", title: "Coordinator, analyst", email: "r_elchaa@live.concordia.ca", img:"https://www.dropbox.com/sh/3djmzq14g30xcwg/AAAzjGkRSlYodV3njPc9vN3La/11.png?raw=1" },
                            { id: "12", pid: "10",  name: "Hazen Abou Khadra", title: "Quality controller, Concept Designer", email: "h_aboukh@live.concordia.ca", img:"https://www.dropbox.com/sh/3djmzq14g30xcwg/AADrIQn0Lwt5Z3ey19JKYNHqa/12.png?raw=1" },
                            { id: "13", pid: "10",  name: "Andrei Kinczler", title: "Quality controller, Concept Designer", email: "a_kinczl@live.concordia.ca", img:"https://www.dropbox.com/sh/3djmzq14g30xcwg/AABwiGi47KOdF5gMBwTkQjupa/13.png?raw=1" },
                            { id: "14", pid: "10",  name: "Lucas Dimitri", title: "Coordinator, Research Specialist", email: "l_imitri@live.concordia.ca", img:"https://www.dropbox.com/sh/3djmzq14g30xcwg/AACA-QNqgQpzlNL6RTqM-E9La/14.png?raw=1" },
                            { id: "15", pid: "18",  name: "Chad Scarsini", title: "Implementer", email: "c_scarsi@live.concordia.ca", img:"https://www.dropbox.com/sh/3djmzq14g30xcwg/AADpeIZo-InrC5QB9xEl9NXJa/15.png?raw=1" },
                            { id: "16", pid: "18",  name: "Siavash Shahkar", title: "Resource Investigator/ Implementer", email: "s_hahkar@live.concordia.ca", img:"https://www.dropbox.com/sh/3djmzq14g30xcwg/AAA9tlZkA157yKdwuatkCcoIa/16.png?raw=1" },
                            { id: "17", pid: "18",  name: "Araz Pilavdjian", title: "Shaper / Implementer", email: "a_pilavd@live.concordia.ca", img:"https://www.dropbox.com/sh/3djmzq14g30xcwg/AACdipKXbAB__Q11odIqaD5Ba/17.png?raw=1" },
                            { id: "18", pid: "20",  name: "Anthony Sawyer", title: "DR Lead / Coordinator / Completer-Finisher", email: "a_sawye@live.concordia.ca", img:"https://www.dropbox.com/sh/3djmzq14g30xcwg/AACo3s8EbrA6k9aA0b7Jmf4da/18.png?raw=1" },
                            { id: "19", pid: "18",  name: "Tommy Lavoie", title: "Implementer", email: "t_agnonl@live.concordia.ca", img:"https://www.dropbox.com/sh/3djmzq14g30xcwg/AAD_ejxoYznq-D-8tLHkD2BUa/19.png?raw=1" },
                            { id: "20", pid: "25", name: "Mathilde Therrien-Quintal", title: "PM DR / Avionic consultant", email: "m_rrienq@live.concordia.ca", img:"https://www.dropbox.com/sh/3djmzq14g30xcwg/AADatyN6r4KVVWH2Rnhv8Bcna/20.png?raw=1" },
                            { id: "21", pid: "6", name: "Jean-Baptiste Waring", title: "Avionics Consultant", email: "j_warin@live.concordia.ca", img:"https://www.dropbox.com/s/edx19pje9an3el0/21.png?raw=1" },
                            { id: "22",   pid: "25", name: "Luca Manolache", title: "PM MRO / Research Assistant", email: "l_manola@live.concordia.ca", img:"https://www.dropbox.com/sh/3djmzq14g30xcwg/AAAR6yohtN62vqi5PpBg1rKCa/22.png?raw=1" },
                            { id: "23",  pid: "25",  name: "Noubar Krikorian", title: "PM SS", email: "n_krik@live.concordia.ca", img:"https://www.dropbox.com/sh/3djmzq14g30xcwg/AAAlceTMhPHYybWnZjGHyMSVa/23.png?raw=1" },
                            { id: "24",  pid: "25", name: "Zhengyang Xu", title: "PM TS", email: "x_zhengy@live.concordia.ca", img:"https://www.dropbox.com/sh/3djmzq14g30xcwg/AACngfUs2MJZEo-tvXf6u5rKa/24.png?raw=1" },
                            { id: "25",  pid: "28", name: "Robin Warren", title: "Teaching Assistant (TA)", email: "r_warr@live.concordia.ca", img:"https://www.dropbox.com/s/kbtzirp9evhcty9/unknown.png?raw=1" },
                            { id: "26",  pid: "28", name: "Tiago Strobino", title: "Teaching Assistant (TA)", email: "t_strobi@live.concordia.ca", img:"https://www.dropbox.com/s/kbtzirp9evhcty9/unknown.png?raw=1" },
                            { id: "27", name: "Amir Jalini", title: "Engineering-in-Residence (EIR)", email: "Amir.Jalini@concordia.ca", img:"https://www.dropbox.com/s/kbtzirp9evhcty9/unknown.png?raw=1" },
                            { id: "28", name: "Dr. Jonathan Liscouët, Eng.", title: "Coordinator", email: "Jonathan.liscouet@concordia.ca", img:"https://www.dropbox.com/s/kbtzirp9evhcty9/unknown.png?raw=1" }
                                    ]
                    });
                    
        
                }

                render() {
                    return (
                         <div id="tree" ref={this.divRef}></div>
                    );
                }
            }
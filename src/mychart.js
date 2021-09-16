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
                        layout: OrgChart.mixed,
                        nodeBinding: {
                            img_0: "img",
                            field_0: "name",
                            field_1: "title"
                            
                        },
                        nodes: [
                            { id: "1",  pid:"2", name: "Meray Nessim", title: "Market researcher - South America + Oceania / Document Control", email: "m_nessi@live.concordia.ca", img:"https://cdn.balkan.app/shared/1.jpg" },
                            { id: "2", pid: "22",  name: "Dante Raso", title: "MRO Lead / Market researcher - Asia", email: "d_raso@live.concordia.ca", img:"https://cdn.balkan.app/shared/1.jpg" },
                            { id: "3", pid: "2",  name: "Robert Latif", title: "Market researcher - Europe + Africa / Editor", email: "r_atif@live.concordia.ca", img:"https://cdn.balkan.app/shared/1.jpg" },
                            { id: "4", pid: "2",  name: "Christina Wong", title: "Market researcher - North America / Formatting specialist and referencing ", email: "w_hrist@live.concordia.ca", img:"https://cdn.balkan.app/shared/1.jpg" },
                            { id: "5", pid: "6",  name: "Sarah Neda", title: "Document Control / Research Specialist", email: "s_neda@live.concordia.ca", img:"https://cdn.balkan.app/shared/1.jpg" },
                            { id: "6", pid: "24",  name: "Alice Vroubel", title: "TS Lead /Arbitrator / Research Specialist", email: "a_vroube@live.concordia.ca", img:"https://cdn.balkan.app/shared/1.jpg" },
                            { id: "7", pid: "6",  name: "Sandrine Sélim", title: "Challenger / Expeditor / Research Specialist", email: "s_selim@live.concordia.ca", img:"https://cdn.balkan.app/shared/1.jpg" },
                            { id: "8", pid: "6",  name: "Gala Licheva", title: "Proof-reader / Connector / Research Specialist", email: "g_lichev@live.concordia.ca", img:"https://cdn.balkan.app/shared/1.jpg" },
                            { id: "9", pid: "6",  name: "Jérémie Lemerre", title: "Formatting / Research Specialist ", email: "j_lemerr@live.concordia.ca", img:"https://cdn.balkan.app/shared/1.jpg" },
                            { id: "10", pid: "20",  name: "Dilkaram Ghuman", title: "SS Lead / research specialist", email: "d_ghuman@live.concordia.ca", img:"https://cdn.balkan.app/shared/1.jpg" },
                            { id: "11", pid: "20",  name: "Richard El Chaar", title: "Coordinator, analyst", email: "r_elchaa@live.concordia.ca", img:"https://cdn.balkan.app/shared/1.jpg" },
                            { id: "12", pid: "20",  name: "Hazen Abou Khadra", title: "Quality controller, Concept Designer", email: "h_aboukh@live.concordia.ca", img:"https://cdn.balkan.app/shared/1.jpg" },
                            { id: "13", pid: "20",  name: "Andrei Kinczler", title: "Quality controller, Concept Designer", email: "a_kinczl@live.concordia.ca", img:"https://cdn.balkan.app/shared/1.jpg" },
                            { id: "14", pid: "20",  name: "Lucas Dimitri", title: "Coordinator, Research Specialist", email: "l_imitri@live.concordia.ca", img:"https://cdn.balkan.app/shared/1.jpg" },
                            { id: "15", pid: "18",  name: "Chad Scarsini", title: "Implementer", email: "c_scarsi@live.concordia.ca", img:"https://cdn.balkan.app/shared/1.jpg" },
                            { id: "16", pid: "18",  name: "Siavash Shahkar", title: "Resource Investigator/ Implementer", email: "s_hahkar@live.concordia.ca", img:"https://cdn.balkan.app/shared/1.jpg" },
                            { id: "17", pid: "18",  name: "Araz Pilavdjian", title: "Shaper / Implementer", email: "a_pilavd@live.concordia.ca", img:"https://cdn.balkan.app/shared/1.jpg" },
                            { id: "18", pid: "23",  name: "Anthony Sawyer", title: "DR Lead / Coordinator / Completer-Finisher", email: "a_sawye@live.concordia.ca", img:"https://cdn.balkan.app/shared/1.jpg" },
                            { id: "19", pid: "18",  name: "Tommy Lavoie", title: "Implementer", email: "t_agnonl@live.concordia.ca", img:"https://cdn.balkan.app/shared/1.jpg" },
                            { id: "20", pid: "21", name: "Mathilde Therrien-Quintal", title: "PM SS / Avionic consultant", email: "m_rrienq@live.concordia.ca", img:"https://cdn.balkan.app/shared/1.jpg" },
                            { id: "21", name: "Jean-Baptiste Waring", title: "PM Lead / Avionics Consultant for TS", email: "j_warin@live.concordia.ca", img:"https://cdn.balkan.app/shared/1.jpg" },
                            { id: "22",   pid: "21", name: "Luca Manolache", title: "PM MRO / Research Assistant", email: "l_manola@live.concordia.ca", img:"https://cdn.balkan.app/shared/1.jpg" },
                            { id: "23",  pid: "21",  name: "Noubar Krikorian", title: "PM DR", email: "n_krik@live.concordia.ca", img:"https://cdn.balkan.app/shared/1.jpg" },
                            { id: "24",  pid: "21", name: "Zhengyang Xu", title: "PM TS", email: "x_zhengy@live.concordia.ca", img:"https://cdn.balkan.app/shared/1.jpg" }
                                    ]
                    });
                    
        
                }

                render() {
                    return (
                         <div id="tree" ref={this.divRef}></div>
                    );
                }
            }
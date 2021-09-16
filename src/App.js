import logo from './logo.svg';
import './App.css';
import OrgChart from './mychart';
function App() {
  return (
    <div className="App">
      <div class="header">
        <img src="https://www.dropbox.com/s/lwz7j9bs39sji5z/medicair_logo_test.svg?raw=1" id="company-logo"/>
        <img src="https://www.dropbox.com/s/yel4bj01fxlfgw0/concordia-logo.svg?raw=1" id="concordia-logo"/>
      </div>
      <div style={{height: '100%'}}>

                           <OrgChart nodes={
                                     [{id: 1, name: "Name1" , title: "Tytle1" },
                                     {id: 2, pid: 1, name: "Name2" , title: "Tytle2" },
                                     {id: 3, pid: 1, name: "Name3" , title: "Tytle3" }]} />

                  </div>
      <div id="revision-notes">
      <h3>Version Notes:</h3>
      <p>Version 1.1 <br />
      updated org with Tutors, EIR and Coordinator <br/>
      need to update portraits.</p>
      <a href="mailto:j_warin@live.concordia.ca?subject=Org%20Chart%20Website%20Feedback&body=Version%20Used%3A%0D%0AWhat%20should%20I%20improve%3F%3A" >
      Leave me some feedback!
</a>
    </div>
    </div>
    
  );
}

export default App;

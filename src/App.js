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
      <div class="check-repair-msg-bar">
      <div class="check-repair-msg-bar-wrap">
        <p>Important: You picture might be hosted outside of the Concordia Domain. </p>
        <a href="mailto:j_warin@live.concordia.ca?subject=Org%20Chart%20Portrait%20Takedown%20Request&body=Full%20Name%3A%0D%0A%0D%0AReason%20(Optional)%3A%0D%0A%0D%0A%0D%0APlease%20allow%2024h%20to%2048h%20for%20your%20request%20to%20be%20processed.%20You%20will%20be%20notified%20once%20done." class="link-blue-std">Take Down My Portrait</a>
      </div>
    </div>
      <div style={{height: '100%'}}>

                           <OrgChart nodes={
                                     [{id: 1, name: "Name1" , title: "Tytle1" },
                                     {id: 2, pid: 1, name: "Name2" , title: "Tytle2" },
                                     {id: 3, pid: 1, name: "Name3" , title: "Tytle3" }]} />

                  </div>
      <div className="revision-notes">
      <h3>Version Notes:</h3>
      <p>Version 1.3 <br />
      Updated organization.<br />
        </p>
      <a href="mailto:j_warin@live.concordia.ca?subject=Org%20Chart%20Website%20Feedback&body=Version%20Used%3A%0D%0AWhat%20should%20I%20improve%3F%3A" className="link-blue-std" id="feedback-link-bottom">
      Leave me some feedback!
</a>
    </div>
    </div>
    
  );
}

export default App;

import { observable, action, computed } from 'mobx';
import { Repos } from '../Repositorys';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { faEquals } from '@fortawesome/free-solid-svg-icons';


export default class LoginProvider {
  constructor(root) {

    this.root = root;
    this.repo = Repos.userLoginRepo;
    this.repos = Repos.ballListRepo;


  }


  @observable session = {
    username: '',
    password: '',
  }
  @observable sessionEnter = {
    username: '',
    password: '',
  }
  @observable style = "none"
  @action enterSession = (name, value) => {
    this.sessionEnter[name] = value
    // this.readUserLogin();
    // console.log(this.session.username)
    // console.log(this.session.password)
  }
  @action enterUserLogin = () => {
    this.session['username'] = this.sessionEnter['username'];
    this.session['password'] = this.sessionEnter['password'];
    this.style = 'block'

  }
  @action logOutSession = () => {
    this.session['username'] = '',
      this.session['password'] = ''
    // console.log(this.session.username)
    // console.log(this.session.password)
  }

  @observable showPassword = 'password'
  @action checkedPassword = (data) => {
    this.showPassword = data
    // console.log(this.showPassword)
  }
  @observable showPasswordHide = 0
  @action changeShowHide = (x => {
    this.showPasswordHide = x;
  })

  @observable showQrCode = 0;
  @action showQrCodeValue = (num) => {
    this.showQrCode = num;
    console.log(this.showQrCode)
  }
  @observable showQrCodeHD = ''
  @action qrCode = (name, data) => {
    var b = document.getElementById('bg-black');
    b.style.display = 'block';
    var bs = document.getElementById('bg-blacks');
    bs.style.display = 'block';
    // console.log(this)
    const dataThis = this

    function onScanSuccess(decodedText, decodedResult) {
      // Handle on success condition with the decoded text or result.
      // console.log(dataThis)
      // console.log(`Scan result1: ${decodedText}`, decodedResult);
      const scanCode = decodedText.substr(0, 16);
      // console.log(`Scan Code: ${decodedText}`, scanCode);
      dataThis.postSumbit(scanCode)
      html5QrcodeScanner.clear();
    }

    function onScanError(errorMessage) {
      // handle on error condition, with error message
    }

    var html5QrcodeScanner = new Html5QrcodeScanner(name, {
      fps: 10,
      qrbox: 250,
    });
    html5QrcodeScanner.render(onScanSuccess);

    var html5QrcodeScanner = new Html5QrcodeScanner(name, {
      fps: 10,
      qrbox: 250,
    });


    var btn = document.getElementById('reader__dashboard_section_csr');
    btn.style.display = 'none'
    var btn = document.getElementById('reader__dashboard_section');
    btn.style.padding = '0'
    html5QrcodeScanner.clear();
  }
  @observable numberShowResult = 0;

  @observable checkResultBall = {
    round: '',
    lotto1: [],
    lotto2: [],
    lotto3: [],
    lotto4: [],
    lotto5: [],
  };
  @action ticketNoInformation = () => {
    document.getElementById('ticket-no-info').style.display = 'none'
  }
  @action postSumbit = async (postData) => {
    // console.log('first')
    const { data } = await this.repo.postUrl(postData)

    // console.log(data['roundNo'])
    // console.log(data['lottoNo'][0])
    // console.log(data['lottoNo'][1])
    // console.log(data['lottoNo'][2])
    // console.log(data['lottoNo'][3])
    // console.log(data['lottoNo'][4])
    if(data['status'] == 1 || data['status'] == 0){
      document.getElementById('ticket-no-info').style.display = 'block'
    }else{
      if(this.checkResultBall['round'] == undefined){
        this.checkResultBall['round'] = '';
      }else{
        this.checkResultBall['round'] = data['roundNo']
      }
      if (data['lottoNo'][0] == undefined) {
        this.checkResultBall['lotto1'] = '';
      } else {
        this.checkResultBall['lotto1'] = data['lottoNo'][0]
      }
      if (data['lottoNo'][1] == undefined) {
        this.checkResultBall['lotto2'] = '';
      } else {
        this.checkResultBall['lotto2'] = data['lottoNo'][1]
      }
      if (data['lottoNo'][2] == undefined) {
        this.checkResultBall['lotto3'] = '';
      } else {
        this.checkResultBall['lotto3'] = data['lottoNo'][2]
      }
      if (data['lottoNo'][3] == undefined) {
        this.checkResultBall['lotto4'] = '';
      } else {
        this.checkResultBall['lotto4'] = data['lottoNo'][3]
      }
      if (data['lottoNo'][4] == undefined) {
        this.checkResultBall['lotto5'] = '';
      } else {
        this.checkResultBall['lotto5'] = data['lottoNo'][4]
      }
    }


    // document.getElementById('reader').innerHTML = ''
    // console.log(this.checkResultBallWinning)
    this.numberShowResult = 1;
  }

  @observable sessionall = {
    username: '',
    password: '',
  };
  @action readUserLogin = async () => {
    const { data } = await this.repo.readUserLogin();
    // console.log(data.map(item => { return item.user_id}))
    // console.log(data.map(item => { return item.user_pwd}))
    this.sessionall['username'] = data.map(item => { return item.user_id })
    this.sessionall['password'] = data.map(item => { return item.user_pwd })
  }


}
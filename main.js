/*==================
 FIREBASE API CONFIG
=====================*/
const firebaseConfig = {
    apiKey: "AIzaSyAHYguXNxgoBQq0rdoFOj9MMppCU9kmE-Y",
    authDomain: "citycoin2025.firebaseapp.com",
    databaseURL: "https://citycoin2025-default-rtdb.firebaseio.com",
    projectId: "citycoin2025",
    storageBucket: "citycoin2025.firebasestorage.app",
    messagingSenderId: "1024446979523",
    appId: "1:1024446979523:web:f2b3b89e039c92aaef7176"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

 /*==================
 START fs_setup_cache
=====================*/
firebase.firestore().settings({
    cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
});
firebase.initializeApp({
    apiKey: 'AIzaSyDZOkXdDSaw1xwonO7L8GcdSfQUtbSMM4c',
    authDomain: 'cars-digital-3c158.firebaseapp.com',
    projectId: 'cars-digital-3c158',
} ,"persisted_app");

 /*===================
 initialize_persistence
======================*/
firebase.firestore().enablePersistence()
.catch((err) => {
    if (err.code == 'failed-precondition') { 

    } else if (err.code == 'unimplemented') { 

    }
});



var appdata = { 
    users: [], 
    loans: [],
    payments: [],
};

/* ===========
FETCH USERS
==============*/
const fetchusers = () => {
    let obj = {};
db.collection("cc_userdata").where("cid", "!=", '')
.onSnapshot({ includeMetadataChanges: true }, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
        obj[change.doc.id] = change.doc.data();
        appdata.users = Object.values(obj);
    });

});
};fetchusers();


/*===================
  Client Form Inputs
---------------------*/
/*===================
  Client Form Inputs
---------------------*/

let firstname = document.getElementById("fname");
let secondname = document.getElementById("sname");
let lastname = document.getElementById("lname");
let dobirth = document.getElementById("dateob");
let gender = document.getElementById("genda");
let marital = document.getElementById("marital");
let pic = document.getElementById("imagefile");

let idnum = document.getElementById("idnumber");
let krapin = document.getElementById("krapin");
let email = document.getElementById("email");
let mobno1 = document.getElementById("phonenum1");
let mobno2 = document.getElementById("altvenumber");
let mobno3 = document.getElementById("phonenum3");

let county = document.getElementById("county");
let currtown = document.getElementById("town");
let subcounty = document.getElementById("subcounty");
let sublocation = document.getElementById("sublocation");
let physicaladdrss = document.getElementById("physicaladdrss");

let w_status = document.getElementById("w_status");
let w_name = document.getElementById("w_name");
let w_type = document.getElementById("w_type");
let w_town = document.getElementById("w_town");
let w_contact = document.getElementById("w_contact");

let nok_name = document.getElementById("nok_name");
let nok_relation = document.getElementById("nok_relation");
let nok_town = document.getElementById("nok_town");
let nok_area = document.getElementById("w_town");
let nok_tel = document.getElementById("nok_contact");

let doc1 = document.getElementById("dox1");
let doc2 = document.getElementById("dox2");
let doc3 = document.getElementById("dox3");

let current_tab = 0; // Current Tab
//let current_form = document.createElement("form"); // Current Form
let current_form = document.getElementById("newclient"); // Current Form

let allinputs = current_form.querySelectorAll(".lbl .nput"); //selects all text Inputs
let dropdowninputs = current_form.querySelectorAll(".lbl.drod .nput"); //selects all dropdown Inputs
let checkboxes = current_form.querySelectorAll(".lbl.cbox .nput"); //selects all checkbox Inputs
let current_input = document.createElement("input");

let dropdownlists = current_form.querySelectorAll(".dropdwn"); //selects all droplists
let currentdropList = document.createElement("ul"); //  gets current droplists

/*====================
	Get Years List
----------------------*/
let yearOfFset = 55;
const getYears = (Year) => {
  let yrs = [];
  for (var i = 0; i < yearOfFset; i++) {
    yrs.push(Year - 18 - i);
  }
  return yrs;
};
/*====================
	Get Days List
----------------------*/
const getmonthDays = (mon, yr) => {
  let list = [];
  let d = new Date(yr, mon, 0).getDate();
  for (var i = 0; i < d; i++) {
    list.push(i + 1);
  }
  return list;
};

/*====================
	Age Calculator
----------------------*/
const CalculatorAge = (dt) => {
  let userdate = dt;
  let dob = new Date(userdate);
  if (userdate == null || userdate == "") {
    return false;
  } else {
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;
  }
};
/*====================
	Validate Number Input
----------------------*/
function validatenumber(evt) {
  var theEvent = evt || window.event;
  if (theEvent.type === "paste") {
    key = event.clipboardData.getData("text/plain");
  } else {
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
  }
  var regex = /[0-9]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

/*====================
	CheckBox Function
----------------------*/
function onecheckBox(cbox) {
  let id = cbox.id;
  let x = document.getElementsByName(cbox.name);
  let nput = document.getElementById(cbox.name);
  for (let i = 0; i < x.length; ++i) {
    if (x[i].id === id) {
      if (x[i].checked === true) {
        nput.value = x[i].value;
        nput.dispatchEvent(new Event("input"));
      } else {
        nput.value = "";
        nput.dispatchEvent(new Event("input"));
      }
    } else {
      x[i].checked = false;
    }
  }
  nput.dispatchEvent(new Event("change"));
}

/*====================
	GET Random Numbers
----------------------*/
function RandomNumber(min, max) {
  var minn = Math.ceil(min);
  var maxx = Math.floor(max);
  return Math.floor(Math.random() * (maxx - minn)) + minn;
}

/*====================
	 Months List
----------------------*/
let monthlist = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

/*====================
	 Fetch Data Lists
----------------------*/
const getListdata = (list) => {
  let x = [];
  if (list == "days") {
    let dt = new Date();
    let db = dobirth.value.toString();
    if (db !== "") {
      dt = new Date(db);
    } else {
      dt = new Date();
    }
    x = getmonthDays(dt.getUTCMonth() + 1, dt.getUTCFullYear());
  } else if (list == "months") {
    x = monthlist;
  } else if (list == "years") {
    x = getYears(new Date().getUTCFullYear());
  } else if (list == "counties") {
    x = [
      "Mombasa",
      "Kilifi",
      "Kwale",
      "Taita Taveta",
      "Eldoret",
      "Nairobi",
      "Kisumu",
      "Siaya",
    ];
  } else if (list == "towns" || list == "w_towns" || list == "nok_towns") {
    x = [
      "Mombasa",
      "Kilifi",
      "Kwale",
      "Ukunda",
      "Wundanyi",
      "Voi",
      "Kisumu",
      "Nairobi",
      "Nakuru",
    ];
  } else if (list == "subcounties") {
    x = ["Changamwe", "Kisauni", "Bamburi", "Likoni", "Mvita", "Jomvu"];
  } else if (list == "sublocations") {
    x = ["Kisauni", "Magogoni", "Ngombeni", "Mtopanga", "Junda", "Shanzu"];
  } else if (list == "w_types") {
    x = [
      "Teacher",
      "Accountant",
      "Doctor",
      "Sales",
      "Manager",
      "Director",
      "Assistant",
    ];
  } else if (list == "reasons") {
    x = [
      "Medical bill",
      "School fees",
      "Moving expenses",
      "House rent",
      "Business capital",
      "Business expenses",
      "Vehicle financing",
      "Debt clearance",
      "Education expenses",
    ];
  } else if (list == "relations") {
    x = [
      "Mother",
      "Father",
      "Sister",
      "Brother",
      "Spouse",
      "Son",
      "Daughter",
      "Ancle",
      "Other relative",
    ];
  } else if (list == "periods") {
    x = [1, 2, 3, 4, 5, 6];
  } else if (list == "clients") {
    x = appdata.users.filter((item) => item.clss == "client");
  }

  return x;
};

/*====================
 Dropdown Static Data
----------------------*/
let staticInputs = document.querySelectorAll(
  "#county, #town, #subcounty, #sublocation, #w_type, #w_town, #nok_town, #nok_relation"
);
staticInputs.forEach((input) => {
  if (input.name !== "") {
    let x = getListdata(input.name); // use input name to filter data and find list
    let list = document.getElementById(input.name);
    let r = document.createDocumentFragment();
    for (let i = 0; i < x.length; i++) {
      let li = document.createElement("li");
      li.dataset.data = JSON.stringify(x[i]);
      li.innerHTML = "<p>" + x[i] + "</p>";
      r.appendChild(li);
    }
    list.replaceChildren(r);
  }
});

/*====================
 Dropdown Dynamic Data
----------------------*/
const dynamicData = (input, list) => {
  if (input.id) {
    let x = getListdata(input.id); // use input id to filter data
    let f = document.createDocumentFragment();
    for (let i = 0; i < x.length; i++) {
      let li = document.createElement("li");
      li.dataset.data = JSON.stringify(x[i]);
      li.innerHTML = "<p>" + x[i] + "</p>";
      f.appendChild(li);
    }
    list.replaceChildren(f);
  }
};

/*====================
 Form Inputs Clicked
----------------------*/
function newposition(input) {
  let ol = input.offsetLeft;
  let ow = input.offsetWidth;
  let ot = input.offsetTop;
  let oh = input.offsetHeight;

  currentdropList.style.display = "grid";
  currentdropList.style.left = `${ol}px`;
  currentdropList.style.top = `${ot + 2 + oh}px`;
  currentdropList.style.minWidth = `${ow}px`;

  if (input.id == "days" || input.id == "months" || input.id == "years") {
    currentdropList.style.left = `${ol - 10}px`;
    currentdropList.style.top = `${ot + 9 + oh}px`;
    currentdropList.style.maxWidth = "42%";
  }
}

// Dropdown Lists
function showHide(disp) {
  if (disp == "" || disp == "none") {
    newposition(current_input);
  } else {
    currentdropList.style.display = "none";
  }
}

allinputs.forEach((input) => {
  // show dropdown lists
  input.addEventListener("click", function () {
    current_input = this;
    if (this.name) {
      currentdropList = this.parentElement.querySelector("#" + this.name);
      let disp = currentdropList.style.display;
      showHide(disp);
    }
  });
});

/*
/*===============================
 Close dropLists on window click
--------------------------------*/
window.addEventListener("mouseup", function (e) {
  dropdownlists.forEach((item) => {
    if (!e.target.closest(".dropdwn") && !(e.target == current_input)) {
      item.style.display = "none";
    }
  });
});

/*====================
 Dates Inputs
----------------------*/
let days = document.getElementById("days");
let months = document.getElementById("months");
let years = document.getElementById("years");

function fetchdates(dx, mx, yx) {
  let dt = new Date();
  let d = dt.getDate();
  let m = dt.getMonth();
  let y = dt.getFullYear();

  if (dx.value !== "DD" && mx.value !== "MM" && yx.value !== "YY") {
    d = parseInt(dx.value);
    m = monthlist.indexOf(mx.value);
    y = parseInt(yx.value);
    dt.setDate(d);
    dt.setMonth(m);
    dt.setFullYear(y);
    dobirth.value = dt.toString();
    dobirth.dataset.age = CalculatorAge(dt);
    dobirth.dispatchEvent(new Event("input"));
  }
  let mydate = dobirth.value.toString();
  if (mydate !== "") {
    dt = new Date(mydate);
    d = dt.getDate();
    m = dt.getMonth();
    y = dt.getFullYear();
    days.value = d.toString();
    months.value = monthlist[m];
    years.value = y;
  }
}
fetchdates(days, months, years);

/*====================
 Dates Inputs Clicked
----------------------*/
let dateinputs = document.querySelectorAll("#days, #months, #years");
dateinputs.forEach((nput) => {
  nput.addEventListener("click", function () {
    currentdropList = document.getElementById("dates");
    let disp = currentdropList.style.display;
    if (nput === current_input) {
      if (disp !== "" && disp !== "none") {
        currentdropList.style.display = "none";
      } else {
        currentdropList.style.display = "grid";
      }
    } else {
      current_input = this;
      newposition(current_input); // set position & show dropdown
    }
    dynamicData(current_input, currentdropList); // load dropdown data
  });
});

/*==============================
 Vissible Dropdown List Clicked
-------------------------------*/
dropdownlists.forEach((item) => {
  item.addEventListener("click", (e) => {
    let li = e.target.closest("li");
    let txt = li.innerText.replace(/\s/g, "");
    let data = JSON.parse(li.dataset.data);
    current_input.dataset.id = data;
    current_input.value = txt;

    let id = current_input.id;
    if (id == "days" || id == "months" || id == "years") {
      fetchdates(days, months, years);
      document.getElementById("dates").style.display = "none";
    }
    current_input.dispatchEvent(new Event("input"));
  });
  item.style.display = "none";
});

/*=====================
  Set Full Names
-----------------------*/
const setfullname = () => {
  let x;
  if (lastname.value !== "") {
    x = lastname.value + " " + firstname.value;
  } else {
    x = secondname.value + " " + firstname.value;
  }
  return x;
};

/*=====================
  Image File Input
-----------------------*/
const resizeimage = (nput, preview) => {
  let mg = nput.files[0];
  if (mg) {
    let reader = new FileReader();
    reader.readAsDataURL(mg);
    reader.name = mg.name;
    reader.size = mg.size;

    reader.onload = function (event) {
      let img = new Image();
      img.src = event.target.result;
      img.name = event.target.name;
      img.size = event.target.size;

      img.onload = function (el) {
        let x = document.createElement("canvas");
        let W = el.target.width;
        let H = el.target.height;
        if (H > W) {
          x.height = 160;
          x.width = Math.round((W * 160) / H);
        } else if (W > H) {
          x.width = 150;
          x.height = Math.round((H * 150) / W);
        } else {
          x.width = 150;
          x.height = 160;
        }
        let cx = x.getContext("2d");
        cx.drawImage(el.target, 0, 0, x.width, x.height);
        let srcEncoded = cx.canvas.toDataURL("image/png", 1);
        nput.dataset.url = srcEncoded;
        preview.src = nput.dataset.url;
      };
    };
  }
};

resizeimage(pic, document.getElementById("prev0"));
resizeimage(doc1, document.getElementById("prev1"));
resizeimage(doc2, document.getElementById("prev2"));
resizeimage(doc3, document.getElementById("prev3"));

/*=====================
  Fetch Form Data
-----------------------*/
function newuserdata(cid) {
  let xfullname = setfullname().toLowerCase();
  const newdata = {
    clss: "client",
    cid: cid.toString(),
    names: [firstname.value, secondname.value, lastname.value, xfullname],
    dobirth: dobirth.value,
    gender: gender.value,
    marital: marital.value,
    idnumber: idnum.value,
    krapin: krapin.value,
    email: email.value,

    contacts: [
      mobno1.value.toString(),
      mobno2.value.toString(),
      mobno3.value.toString(),
    ],
    address: [
      county.value,
      currtown.value,
      subcounty.value,
      sublocation.value,
      physicaladdrss.value,
    ],
    workstatus: [
      w_status.value,
      w_name.value,
      w_type.value,
      w_town.value,
      w_contact.value.toString(),
    ],
    nokin: [
      nok_name.value,
      nok_relation.value,
      nok_town.value,
      nok_area.value,
      nok_tel.value.toString(),
    ],
    images: [pic.dataset.url],
    docs: [doc1.dataset.url, doc2.dataset.url, doc3.dataset.url],
    regdate: new Date().toLocaleDateString(),
  };
  sessionStorage.setItem("cc_newuser", JSON.stringify(newdata));
}

/*============================
   Work Status Changed
------------------------------*/
let w1 = document.querySelector(".pod.pd1");
let w2 = document.querySelector(".pod.pd2");
let w3 = document.querySelector(".pod.pd3");
let w4 = document.querySelector(".pod.pd4");
let w5 = document.querySelector(".mydocs label:last-child");

function w_statusChanged() {
  if (w_status.value == "business") {
    w1.innerText = "Business type";
    w2.innerText = "Business name";
    w3.innerText = "Business location";
    w4.innerText = "Business contact";
    w5.style.display = "grid";
  } else {
    w1.innerText = "Company name";
    w2.innerText = "Current position";
    w3.innerText = "Company location";
    w4.innerText = "Company contact";
    w5.style.display = "knone";
  }
}
//w_statusChanged();

email.addEventListener("blur", () => {
  if (email.value !== "") {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.value.match(emailRegex)) {
      email.classList.remove("invalid");
      return;
    }
    email.classList.add("invalid");
  }
});

/*============================
   Current Form Input Changes
------------------------------*/
allinputs.forEach((nput) => {
  nput.addEventListener("input", (e) => {
    newuserdata("");
  });
  nput.addEventListener("blur", function () {
    let txt = nput.value;
    if (nput.type == "email") {
      nput.value = txt.toLowerCase();
    } else {
      nput.value = txt.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());
    }
    nput.addEventListener("change", (e) => {
      w_statusChanged();
    });
  });
});

/*========================
   Create New Client ID
-------------------------*/
const createnew_id = () => {
  let arry = [];
  let ref = db.collection("cc_userdata");
  let random = RandomNumber(100000, 999999);

  ref.get().then((snap) => {
    snap.forEach((doc) => {
      arry.push(doc.data().cid);
    });
    let newid = 1000001;
    if (arry.length > 0) {
      if (random.toString().length == 6 && arry.includes(random) == false) {
        newid = Number(random);
        newuserdata(newid);
        submitnewClient();
      } else {
        createnew_id();
      }
    } else {
      newuserdata(newid);
      submitnewClient();
    }
  });
};

/*======================
  Form Tabs Navigation
------------------------*/
let tabs = current_form.querySelectorAll("table.client .tab");

const netxt_tab = (step) => {
  if (step > 0 && current_tab < 6) {
    current_tab = current_tab + step;
  } else if (step < 0 && current_tab > 0) {
    current_tab = current_tab + step;
  }
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("shown");
    if (i == current_tab) {
      tabs[i].classList.add("shown");
    }
  }

  let x = document.querySelectorAll(".submit button");
  if (current_tab > 0) {
    x[0].classList.add("shown");
  } else {
    x[0].classList.remove("shown");
  }
  if (current_tab == 6) {
    x[1].innerText = "SUBMIT";
  }else {
    x[1].innerText = "NEXT";
  }
};
netxt_tab(0);

/*=====================
  Validate Empty Inputs
-----------------------*/

function validateEmpties() {
  let valid = true;
  let x = tabs[current_tab].querySelectorAll(".nput");

  dateinputs.forEach((input) => {
    if (input.classList.contains("invalid")) {
      dobirth.classList.add("invalid");
    } else {
      dobirth.classList.remove("invalid");
    }
  });

  for (let i = 0; i < x.length; i++) {
    if (x[i].id !== "phonenum3") {
      if (x[i].value == "" || x[i].classList.contains("invalid")) {
        x[i].classList.add("invalid");
        valid = false;
      }
    }
  }
  if (valid) {
    if (current_tab == 6) {
      createnew_id();
    } else {
      netxt_tab(1);
    }
  }
}

/*
/*=====================
  Submit and Save Client
-----------------------*/
function submitnewClient() {
  let data = JSON.parse(sessionStorage.getItem("cc_newuser"));
  db.collection("cc_userdata")
    .add(data)
    .then((docRef) => {
      //alert("Saved successfully!");
      open_forms("");
      document.querySelector(".modal").classList.add("saved");
      sessionStorage.removeItem("cc_newuser");
      document.getElementById("newclient").reset();
    });
}

let forms = document.querySelectorAll(".forms form");
function open_forms(fm) {
  for (let i = 0; i < forms.length; i++) {
    forms[i].classList.remove("shown");
    if (forms[i].id == fm) {
      current_form = forms[i];
      current_form.classList.add("shown");
      current_form.reset();
      netxt_tab(5);
    } else {
      forms[i].classList.remove("shown");
    }
  }
}
open_forms("");

function toCurrency(value) {
  // ---------- Currency function
  return (
    "Ksh " +
    parseFloat(value).toLocaleString("en-US", {
      style: "decimal",
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    })
  );
}

function tofloat(nputval) {
  // ---------- tofloat function
  var float = Number(nputval.replace(/[^0-9.-]+/g, ""));
  return float;
}

function addDays(date, days) {
  // ---------- Duedate function function
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + days);
  return newDate;
}


open_forms('newclient');






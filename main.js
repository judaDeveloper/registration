const firebaseConfig = {
  apiKey: "AIzaSyAHYguXNxgoBQq0rdoFOj9MMppCU9kmE-Y",
  authDomain: "citycoin2025.firebaseapp.com",
  databaseURL: "https://citycoin2025-default-rtdb.firebaseio.com",
  projectId: "citycoin2025",
  storageBucket: "citycoin2025.firebasestorage.app",
  messagingSenderId: "1024446979523",
  appId: "1:1024446979523:web:f2b3b89e039c92aaef7176",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();


let document_id = document.getElementById("newdoc_id");
let newuser_cid = document.getElementById("newuser_id");

let fname = document.getElementById("fname");
let sname = document.getElementById("sname");
let lname = document.getElementById("lname");
let dobirth = document.getElementById("dateob");
let gender = document.getElementById("genda");
let marital = document.getElementById("marital");

let idnum = document.getElementById("idnumber");
let krapin = document.getElementById("krapin");
let email = document.getElementById("email");
let phone = document.getElementById("phonenum1");
let altphone = document.getElementById("altnumber");

let county = document.getElementById("county");
let currtown = document.getElementById("town");
let subcounty = document.getElementById("subcounty");
let sublocation = document.getElementById("sublocation");
let address = document.getElementById("physical_address");

let w_status = document.getElementById("w_status");
let w_sector = document.getElementById("w_sector");
let w_name = document.getElementById("w_name");
let w_tittle = document.getElementById("w_tittle");
let w_town = document.getElementById("w_town");
let w_location = document.getElementById("w_physical_location");
let w_contact = document.getElementById("w_contact");

let nok_name = document.getElementById("nok_name");
let nok_relation = document.getElementById("nok_relation");
let nok_town = document.getElementById("nok_town");
let nok_contact = document.getElementById("nok_contact");

let file_1 = document.getElementById("imgi");
let file_2 = document.getElementById("imgii");
let file_3 = document.getElementById("imgiii");
let file_4 = document.getElementById("imgiv");
let file_5 = document.getElementById("imgv");

let current_tab = 0;
let current_form = document.getElementById("userform");

// Get all inputs in the current form
let all_inputs = current_form.querySelectorAll(".nput");
let current_input = document.createElement("input");

// Dropdowns
let dropdowns = current_form.querySelectorAll(".nput_dropdwn");
let current_dropdown = document.createElement("ul");

let fileinputs = current_form.querySelectorAll("input[type='file']");



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





/*
 Input Images/Files
 ----------------------*/

const readnResize = (file, nput) => {
  let maxWidth = 300;
  let maxHeight = 300;
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.name = file.name;
  reader.size = file.size;

  reader.onload = function (event) {
    let img = new Image();
    img.src = event.target.result;
    img.name = event.target.name;
    img.size = event.target.size;

    img.onload = function (el) {
      let mg = document.createElement("canvas");
      let w = img.width;
      let h = img.height;
      if (w > h) {
        if (w > maxWidth) {
          h = Math.round((h * maxWidth) / w);
          w = maxWidth;
        }
      } else {
        if (h > maxHeight) {
          w = Math.round((w * maxHeight) / h);
          h = maxHeight;
        }
      }
      mg.width = w;
      mg.height = h;
      let cx = mg.getContext("2d");
      cx.drawImage(el.target, 0, 0, mg.width, mg.height);
      let srcEncoded = cx.canvas.toDataURL("image/png", 1);
      nput.dataset.url = srcEncoded;
      previewImage(nput);
    };
  };
};

fileinputs.forEach((nput) => {
  nput.onchange = function (e) {
    let file = nput.files[0];
    if (!file) return; // Exit if no file selected
    readnResize(file, nput);
    };
});

function previewImage(nput) {
  let url = nput.dataset.url;
  let imge = nput.nextElementSibling;
  if (url) {
    imge.src = url;
    nput.classList.remove("invalid");
  } else {
    imge.src = "#";
  }
}

function previewAll() {
  fileinputs.forEach((nput) => {
    previewImage(nput);
  });
};previewAll();

/*
==============================*/













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
       Fetch Data Lists
  ----------------------*/
const getDatalists = (list) => {
  let x = [];
  if (list == "counties") {
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
  } else if (list == "tittles") {
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
  "#county, #town, #subcounty, #sublocation, #w_tittle, #w_town, #nok_town, #nok_relation"
);
staticInputs.forEach((nput) => {
  if (nput.name !== "") {
    let x = getDatalists(nput.name);
    let list = document.getElementById(nput.name);
    /*  
    if (!list) {
      list = document.createElement("ul");
      list.id = nput.name;
      list.classList.add("dropdwn");
      nput.parentNode.appendChild(list);
    }*/

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
    let x = getDatalists(input.id); // use input id to filter data
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

let drod_nputs = current_form.querySelectorAll(".drod .nput");
drod_nputs.forEach((nput) => {
  nput.addEventListener("click", (e) => {
    current_input = nput;
    current_dropdown = nput.parentElement.nextElementSibling;
    if (current_dropdown || current_dropdown != null) {
      let disp = current_dropdown.style.display;
      if (disp !== "" && disp !== "none") {
        current_dropdown.style.display = "none";
      } else {
        current_dropdown.style.display = "grid";
      }
    }
  });
});

/*
  Close dropLists on window click
 --------------------------------*/
window.addEventListener("mouseup", function (e) {
  dropdowns.forEach((dropdown) => {
    if (!e.target.closest(".nput_dropdwn") && e.target !== current_input) {
      dropdown.style.display = "none";
    }
  });
});

function newposition(input) {
  let ol = input.offsetLeft;
  let ow = input.offsetWidth;
  let ot = input.offsetTop;
  let oh = input.offsetHeight;

  current_dropdown.style.display = "grid";
  current_dropdown.style.left = `${ol}px`;
  current_dropdown.style.top = `${ot + 2 + oh}px`;
  current_dropdown.style.minWidth = `${ow}px`;

  if (input.id == "days" || input.id == "months" || input.id == "years") {
    current_dropdown.style.left = `${ol - 10}px`;
    current_dropdown.style.top = `${ot + 9 + oh}px`;
    current_dropdown.style.maxWidth = "42%";
  }
}
function showDropdown(dropdown) {
  let disp = dropdown.style.display;
  if (disp !== "" && disp !== "none") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "grid";
  }
}

/*
  Dates Inputs
 ===============*/
const yearslist = () => {
  let years = [];
  let yrsoffset = 55;
  let thisyear = new Date().getFullYear();
  for (var i = 0; i < yrsoffset; i++) {
    years.push(thisyear - 18 - i);
  }
  return years;
};

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

const monthdays = (mon, yr) => {
  let list = [];
  let d = new Date(yr, mon, 0).getDate();
  for (var i = 0; i < d; i++) {
    list.push(i + 1);
  }
  return list;
};

let dateob = dobirth;
let days = document.getElementById("days");
let months = document.getElementById("months");
let years = document.getElementById("years");
let datedropdown = document.getElementById("dates");
let dtbuttons = [days, months, years];

dtbuttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    current_input = btn;
    current_dropdown = datedropdown;
    let x = document.createDocumentFragment();
    let data = [];
    if (btn.name == "DD") {
      let dt = new Date(dateob.value);
      let m = dt.getMonth() + 1;
      let y = dt.getFullYear();
      data = monthdays(m, y);
    } else if (btn.name == "MM") {
      data = monthlist;
    } else if (btn.name == "YY") {
      data = yearslist();
    }
    for (let i = 0; i < data.length; i++) {
      let li = document.createElement("li");
      li.dataset.data = JSON.stringify(data[i]);
      li.innerHTML = "<p>" + data[i] + "</p>";
      x.appendChild(li);
    }
    current_dropdown.replaceChildren(x);
    showDropdown(current_dropdown);
    newposition(current_input);
  });
});

const fetchdates = () => {
  let dt = new Date();
  dt.setFullYear(dt.getFullYear() - 18);
  let d = 0;
  let m = 0;
  let y = 0;

  if (days.value == "DD") {
    d = dt.getDate();
  } else {
    d = parseInt(days.value);
  }
  if (months.value == "MM") {
    m = dt.getMonth() + 1;
  } else {
    m = monthlist.indexOf(months.value) + 1;
  }
  if (years.value == "YY") {
    y = dt.getFullYear();
  } else {
    y = parseInt(years.value);
  }
  let dt_new = y + "/" + m + "/" + d;

  const dt2 = new Date(dt_new);
  const day = ("0" + dt2.getDate()).slice(-2);
  const month = ("0" + (dt2.getMonth() + 1)).slice(-2);
  const date = dt2.getFullYear() + "-" + month + "-" + day;
  dateob.value = date;
};
fetchdates();

const filldates = (xdate) => {
  let dt = new Date(xdate);
  let d = dt.getDate();
  let m = dt.getMonth();
  let y = dt.getFullYear();
  days.value = d;
  months.value = monthlist[m];
  years.value = y;
};

document.getElementById("dates").addEventListener("click", (e) => {
  let li = e.target.closest("li");
  if (!li) return;
  if (li.classList.contains("disabled")) return;
  if (li.classList.contains("selected")) return;
  current_input.value = li.innerText.trim();
  dateob.classList.remove("invalid");
  document.getElementById("dates").style.display = "none";
  fetchdates();
  current_input.dispatchEvent(new Event("input"));
}); /*=================================================*/





/*
  Dropdown List Clicked
 ----------------------*/
dropdowns.forEach((drod) => {
  drod.addEventListener("click", (e) => {
    let li = e.target.closest("li");
    if (!li) return; // if no list item clicked, exit
    if (li.classList.contains("disabled")) return; // if list item is disabled, exit
    if (li.classList.contains("selected")) return; // if list item is already selected, exit
    let txt = li.innerText.trim();
    let data = JSON.parse(li.dataset.data);
    current_input.dataset.id = data;
    current_input.value = txt;
    current_input.classList.remove("invalid");
    current_dropdown.style.display = "none";
  });
});

/*=====================
    Set Full Names
  -----------------------*/
const setfullname = () => {
  let x;
  if (lname.value !== "") {
    x = lname.value + " " + fname.value;
  } else {
    x = sname.value + " " + fname.value;
  }
  return x;
};


function getprofile() {
  document.getElementById("userform").reset();
  let data = myselection.info;
  if (data) {
    fname.value = data.fname;
    sname.value = data.sname;
    lname.value = data.lname;
    gender.value = data.gender;
    dobirth.value = data.dobirth;
    marital.value = data.marital;

    idnum.value = data.idnum;
    krapin.value = data.krapin;
    email.value = data.email;
    phone.value = data.phone;
    altphone.value = data.contacts[0];

    county.value = data.county;
    currtown.value = data.currtown;
    subcounty.value = data.scounty;
    sublocation.value = data.slocation;
    address.value = data.address;

    w_status.value = data.w_status;
    w_sector.value = data.w_sector;
    w_tittle.value = data.w_tittle;
    w_name.value = data.w_name;
    w_town.value = data.w_town;
    w_contact.value = data.w_contact;

    nok_name.value = data.nok_name;
    nok_relation.value = data.nok_relation;
    nok_town.value = data.nok_town;
    nok_contact.value = data.nok_contact;

    file_1.dataset.url = data.photo[0];
    file_2.dataset.url = data.docs[0];
    file_3.dataset.url = data.docs[1];
    file_4.dataset.url = data.docs[2];
    file_5.dataset.url = data.docs[3];
  } else {
    alert("No data found");
  }
  previewAll();
}

/*
Work Status Changed
----------------------*/
let sec = document.querySelector(".pod.ps");
let pos = document.querySelector(".pod.pp");
let nme = document.querySelector(".pod.pn");
let twn = document.querySelector(".pod.pt");
let tel = document.querySelector(".pod.pc");

function w_statusChanged() {
  if (w_status.value == "business") {
    sec.innerText = "Business sector";
    pos.innerText = "Business tittle";
    nme.innerText = "Business name";
    twn.innerText = "Business town";
    tel.innerText = "Business contacts";
  } else if (w_status.value == "employed") {
    sec.innerText = "Job sector";
    pos.innerText = "Job tittle";
    nme.innerText = "Employer name";
    twn.innerText = "Town";
    tel.innerText = "contacts";
  }
}
w_statusChanged();

/*
Form Tabs Navigation
----------------------*/
let tabs = current_form.querySelectorAll(".inputs section");
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
  let sub_x = document.querySelectorAll(".btnsubmit button");
  if (current_tab > 0) {
    sub_x[0].classList.add("shown");
  } else {
    sub_x[0].classList.remove("shown");
  }
  if (current_tab == 6) {
    sub_x[1].innerText = "SUBMIT";
  } else {
    sub_x[1].innerText = "NEXT";
  }
  let tab = document.querySelector(".inputs h6");
  if (current_tab == 0) {
    tab.innerText = "PROFILE";
  } else if (current_tab == 1) {
    tab.innerText = "IDENTITY";
  } else if (current_tab == 2) {
    tab.innerText = "CONTACTS";
  } else if (current_tab == 3) {
    tab.innerText = "HOME ADRESS";
  } else if (current_tab == 4) {
    if (w_status.value == "business") {
      tab.innerText = "BUSINESS";
    } else {
      tab.innerText = "EMPLOYMENT";
    }
  } else if (current_tab == 5) {
    tab.innerText = "NEX OF KIN";
  } else if (current_tab == 6) {
    tab.innerText = "DOCUMENTS";
  }
};

/*Validate Empty Inputs
-----------------------*/
function validateEmpties(btn) {
  let valid = true;
  btn.classList.remove("invalid");
  let currtab = tabs[current_tab];
  let dt = currtab.querySelectorAll("input.dt");
  dt.forEach((btn) => {
    if (btn.value !=="DD" &&
        btn.value !=="MM" &&
        btn.value !=="YY" ) {
            dobirth.classList.remove("invalid");
        }else {
            dobirth.classList.add("invalid");
        }
  });

  let docs = currtab.querySelectorAll("input[type='file']");
  docs.forEach((nput) => {
    let url = nput.dataset.url;
    if (nput.id == "b_permit") {
      return;
    }
    if (!url) {
      nput.classList.add("invalid");
      valid = false;
    } else {
      nput.classList.remove("invalid");
    }
  });

  let nputs = currtab.querySelectorAll(".nput");
  for (let i = 0; i < nputs.length; i++) {
    if (nputs[i].type !== "file") {
      if (nputs[i].value == "" || 
        nputs[i].classList.contains("invalid")) {
        nputs[i].classList.add("invalid");
        btn.classList.add("invalid");
        valid = false;
      }
    }
  }

  if (!file_1.dataset.url) {
    file_1.classList.add("invalid");
    valid = false;
  } else {
    file_1.classList.remove("invalid");
  }
  let modal = document.querySelector(".modal");
  if (valid) {
    if (current_tab == 6) {
        modal.classList.add("submit");
        submitUserData();
    } else {
      netxt_tab(1);
    }
  }
}

/*Fetch Input Changes
  --------------------*/
  all_inputs.forEach((nput) => {
    nput.addEventListener("input", (e) => {
      getnewData();
    });
    nput.addEventListener("change", (e) => {
      getnewData();
    });
  });

  all_inputs.forEach((nput) => {
    nput.addEventListener("blur", function () {
      if (nput.type !== "file") {
        let txt = nput.value.replace(/\s/g, "");
        if (nput.type == "email") {
          if (email.value !== "") {
            const emailRegex =
              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (email.value.match(emailRegex)) {
              email.className = "nput";
              return;
            }
            email.className = "nput invalid";
          }
          nput.value = txt.toLowerCase();
        } else if (nput.id == "krapin") {
          nput.value = txt.toLowerCase().toUpperCase();
        } else {
          nput.value = txt
            .toLowerCase()
            .replace(/\b\w/g, (s) => s.toUpperCase());
        }
      }
    });
  });


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

/* Fetch Form Data
  -----------------*/
  function getnewData() {
    let newuser_data = {
      index_clss: "client",
      index_docid: document_id.value,
      index_cid: newuser_cid.value,

      id_gender: gender.value.toLowerCase(),
      id_dobirth: dobirth.value,
      id_marital: marital.value.toLowerCase(),
      id_idnumber: idnum.value.toLowerCase(),
      id_krapin: krapin.value.toLowerCase(),

      nm_firstname: fname.value.toLowerCase(),
      nm_secondname: sname.value.toLowerCase(),
      nm_lastname: lname.value.toLowerCase(),
      nm_fullname: setfullname().toLowerCase(),

      cont_phone_1: phone.value.toLowerCase(),
      cont_phone_2: altphone.value.toLowerCase(),
      cont_others: [],
      cont_email: email.value.toLowerCase(),

      loc_county: county.value.toLowerCase(),
      loc_town: currtown.value.toLowerCase(),
      loc_s_county: subcounty.value.toLowerCase(),
      loc_s_location: sublocation.value.toLowerCase(),
      loc_p_address: address.value.toLowerCase(),

      job_status: w_status.value.toLowerCase(),
      job_sector: w_sector.value.toLowerCase(),
      job_name: w_name.value.toLowerCase(),
      job_tittle: w_tittle.value.toLowerCase(),
      job_town: w_town.value.toLowerCase(),
      job_p_address: w_location.value.toLowerCase(),
      job_contact: w_contact.value.toLowerCase(),

      nok_name: nok_name.value.toLowerCase(),
      nok_relation: nok_relation.value.toLowerCase(),
      nok_town: nok_town.value.toLowerCase(),
      nok_phone: nok_contact.value.toLowerCase(),

      img_file1: [file_1.dataset.url],
      img_file2: [file_2.dataset.url],
      img_file3: [file_3.dataset.url],
      img_file4: [file_4.dataset.url],
      img_file5: [file_5.dataset.url],

      regdate: new Date().toLocaleDateString(),
    };
    sessionStorage.setItem(
      document_id.value.toString(),
      JSON.stringify(newuser_data)
    );
  }

/*Create New Server IDs
-----------------------*/
function randomString(new_id, length) {
  let arrynum = new_id.match(/.{1,1}/g);
  const value = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randoms = [];
  for (let i = 0; i < length; i++) {
    let strng = value[Math.floor(Math.random() * value.length)];
    randoms.push(strng, arrynum[i]);
  }
  return randoms.join('');
}
const createnew_id = (random) => {
  let array = [];
  let dbRef = db.collection("Usersdbcc");
  dbRef.get().then((snap) => {
    snap.forEach((doc) => {
      array.push(Number(doc.id));
    });
    if (random.toString().length !== 6 || array.includes(random) == true) {
      createnew_id(RandomNumber(100000, 999999));
    }
    let newid = "100001";
    if (array.length > 0) {
      newid = random.toString();
    }
    let new_docid = randomString(newid, 6);
    db.collection("Usersdbcc").doc(new_docid.toString()).set({
      id_cid: newid,
      id_docid: new_docid,
    });
    document_id.value = new_docid.toString();
    newuser_cid.value = newid.toString();
    getnewData();
  });
};
/*========================================================
*/  


const getDbChanges = () => {
  let changes = [];
  db.collection("Usersdbcc")
    .where("cid", "!=", "")
    .onSnapshot({ includeMetadataChanges: true }, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        changes.push(change.type);
        console.log(changes);

        //obj[change.doc.id] = change.doc.data();
        //var source = snapshot.metadata.fromCache ? "local cache" : "server";
        // console.log("Data came from " + source);
      });
      //currentloans();
      //listloans();
    });
};



/* validate Doc submitted
  -----------------------*/
function validateDoc_Changes(dbname, docId) {
  var docRef = db.collection(dbname).doc(docId);
  docRef.get().then((doc) => {
      if (doc.exists) {
        alert("Dear " + doc.data().nm_fullname + "your details have been saved successfully:");
        resetform();
        let modal = document.querySelector(".modal");
        modal.classList.remove("submit");
        sessionStorage.removeItem(docId);
        modal.classList.add("submited");
      } else {
        // doc.data() will be undefined in this case
        alert("No such document!");
      }
    })
    .catch((error) => {
      alert("Error getting document:", error);
    });
}

/* Submit Client's Data
  ---------------------*/
const submitUserData = () => {
  let docId = document_id.value.toString();
  let newdata = JSON.parse(sessionStorage.getItem(docId));
  db.collection("Usersdbcc")
    .doc(docId)
    .set(newdata)
    .then(() => {
      validateDoc_Changes("Usersdbcc", docId);
    });
};
/* Update Client's Data
  ---------------------*/
  const UpdateUserData = () => {
    function update() {
      var docRef = db.collection("Usersdbcc").doc(newuser_cid.value);
      var updateData = docRef.update({
        reg_date: firebase.firestore.FieldValue.serverTimestamp(),
      });
      return updateData;
    }
    return db.collection("Usersdbcc").doc(newuser_cid.value)
      .set({})
      .then(() => update())
      .then(() => {
        validateDoc_Changes("Usersdbcc", newuser_cid.value);
      });
  };

  function resetform() {
    fileinputs.forEach((nput) => {
      nput.dataset.url = "";
    });
    document.getElementById("userform").reset();
    document.querySelector(".modal").classList.remove("submited");
    sessionStorage.removeItem(document_id.value.toString());
    previewAll(); // Reset image previews
    fetchdates();
    current_tab = 0; // Reset to first tab
    netxt_tab(0); // Show first tab
  }
  resetform();
  //netxt_tab(6);

  function openResetform() {
    resetform();
    document.querySelector(".modal").style.display = "grid";
    createnew_id(RandomNumber(100000, 999999));
  }

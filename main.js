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

let fname = document.getElementById("fname");
let sname = document.getElementById("sname");
let lname = document.getElementById("lname");
let inputdate = document.getElementById("nputdate");
let dobirth = document.getElementById("dobirth");

let gender = document.getElementById("genda");
let marital = document.getElementById("marital");

let idnum = document.getElementById("idnumber");
let krapin = document.getElementById("krapin");
let email = document.getElementById("email");
let phone1 = document.getElementById("phonenum1");
let phone2 = document.getElementById("phonenum2");
let contacts = document.getElementById("contactList");

let county = document.getElementById("county");
let currtown = document.getElementById("towncity");
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

let photoimge = document.getElementById("photoimge");
let nidfront = document.getElementById("nidfront");
let nidback = document.getElementById("nidback");
let kracert = document.getElementById("kracert");
let bspermit = document.getElementById("bspermit");


// FORMS
let current_form = document.querySelector(".profileform");

// CURRENT TAB
let currentTab = {
  index: 0,
  drods: [],
  inputs: [],
  tabname: current_form.querySelector(".inputs h6"),
  submit: current_form.querySelectorAll(".submtform button"),
};

// ARRAY ELEMENTS
let formTabs = current_form.querySelectorAll(".inputs section");
let dtbutons = current_form.querySelectorAll("input.dt");
let forminputs = current_form.querySelectorAll(".nput");
let dropdowns = current_form.querySelectorAll(".drodown");
let inputfiles = current_form.querySelectorAll(".nput[type='file']");

// CURRENT INPUTS
let current_tab = document.createElement("section");
let current_input = document.createElement("input");
let current_drpdown = document.createElement("ul");

let userid = document.getElementById("userID");
let userdocid = document.getElementById("profileID");


let careerSectors = [
  "Advertising ",
  "Agriculture",
  "Aviation",
  "Financial Services",
  "Blockchain",
  "Construction",
  "Consulting",
  "Creative/Arts",
  "Education",
  "Engineering",
  "Food Services",
  "General",
  "Government",
  "Healthcare",
  "Hospitality",
  "Telecommunication",
  "Insurance",
  "E-commerce",
  "Environment",
  "Law / Legal",
  "Logistics",
  "Manufacturing",
  "Media",
  "NGO",
  "Oil & Gas",
  "Marine",
  "Marketing",
  "Pharmaceuticals",
  "Energy",
  "Social Associations",
  "Raffle",
  "Real Estate",
  "Religious",
  "Research",
  "Sales / Retail",
  "Science",
  "Security",
  "Travel and Tours",
  "Technology",
  "Agribusiness",
  "Logistics",
  "Banking",
  "Healthcare",
  "Hospitality",
  "Manufacturing",
  "Construction",
  "Insurance",
  "Tourism",
  "Others",
];
let jobTittles = [
  "Account coordinator",
  "Account executive",
  "Account manager",
  "Actor",
  "Actuary",
  "Administrative assistant",
  "Admissions representative",
  "Aerospace engineer",
  "Agriculture teacher",
  "Animal control officer",
  "Animal geneticist",
  "Animal nutritionist",
  "Animal shelter manager",
  "Animal sitter",
  "Aquatic ecologist",
  "Architect",
  "Art director",
  "Assistant buyer",
  "Assistant professor",
  "B2B sales specialist",
  "Bank teller",
  "Barber",
  "Beautician",
  "Beekeeper",
  "Biochemist",
  "Biological engineer",
  "Biologist",
  "Brand manager",
  "Breeder",
  "Budget analyst",
  "Business development manager",
  "Business intelligence developer",
  "Business reporter",
  "Business teacher",
  "Call center agent",
  "Caregiver",
  "Cashier",
  "Casino host",
  "Chemical engineer",
  "Chief of operations",
  "Chief operations officer",
  "Civil engineer",
  "Client services coordinator",
  "Client services manager",
  "Collection agent",
  "College professor",
  "Compensation advisor",
  "Compensations and benefits manager",
  "Compliance engineer",
  "Computer programmer",
  "Concierge",
  "Conservationist",
  "Content marketing manager",
  "Continuous improvement lead",
  "Cosmetology instructor",
  "Cost estimator",
  "Creative director",
  "Credit analyst",
  "Customer care associate",
  "Customer service manager",
  "Dancer",
  "Data architect",
  "Database manager",
  "Demand generation director",
  "Dental assistant",
  "Dental hygienist",
  "Dentist",
  "Dietitian",
  "Director",
  "Distribution supervisor",
  "Doctor",
  "Editor",
  "Electrical engineer",
  "Electrologist",
  "English teacher",
  "Environmental engineer",
  "Esthetician",
  "Event manager",
  "Executive chef",
  "Executive recruiter",
  "Executive",
  "Farmer",
  "Fashion designer",
  "Fashion show stylist",
  "Financial adviser",
  "Financial auditor",
  "Financial manager",
  "Financial planner",
  "Financial services representative",
  "Flight attendant",
  "Food scientist",
  "Foresters",
  "Front desk coordinator",
  "Front-end web developer",
  "Geological engineer",
  "Graphic designer",
  "Groomer",
  "Guidance counselor",
  "Hairdresser",
  "Help desk assistant",
  "Horticulturist",
  "Hotel clerk",
  "Housekeeper",
  "Human resources assistant",
  "Human resources consultant",
  "Human resources director",
  "Human resources generalist",
  "Human resources manager",
  "Human resources specialist",
  "Human resources systems administrator",
  "Illustrator",
  "Information security analyst",
  "Instructional designer",
  "Insurance sales agent",
  "International human resources associate",
  "Investment banking analyst",
  "IT manager",
  "Java developer",
  "Kennel attendant",
  "Labor relations specialist",
  "Librarian",
  "Loan officer",
  "Logistics coordinator",
  "Makeup artist",
  "Manager",
  "Marine engineer",
  "Marketing analyst",
  "Marketing assistant",
  "Marketing consultant",
  "Marketing coordinator",
  "Marketing director",
  "Marketing manager",
  "Math teacher",
  "Mechanical engineer",
  "Meeting planner",
  "Message therapist",
  "Mobile application developer",
  "Multimedia animator",
  "Nail technician",
  "Nuclear engineer",
  "Nurse",
  "Occupational therapy aide",
  "Office clerk",
  "Office manager",
  "Operations assistant",
  "Operations manager",
  "Orthodontist",
  "Painter",
  "Personal trainer",
  "Pet walker",
  "Petroleum engineer",
  "Pharmacist",
  "Pharmacy assistant",
  "Physical therapist",
  "Plant biologist",
  "Plant nursery attendant",
  "Porter",
  "President",
  "Principal",
  "Principal",
  "Producer",
  "Product engineer",
  "Product marketing manager",
  "Project manager",
  "Public relations specialist",
  "Real estate broker",
  "Regional sales manager",
  "Retail sales associate",
  "Retail salesperson",
  "Safety engineer",
  "Sales analyst",
  "Sales associate",
  "Sales consultant",
  "Sales director",
  "Sales manager",
  "Sales manager",
  "Sales representative",
  "Salon manager",
  "Science teacher",
  "Scrum master",
  "Search engine optimization specialist",
  "Senior process engineer",
  "Service adviser",
  "Singer",
  "Skin care specialist",
  "Social media coordinator",
  "Social media manager",
  "Software developer",
  "Software engineer",
  "Soil and plant scientist",
  "Spa manager",
  "SQL developer",
  "Store manager",
  "Substitute teacher",
  "Superintendent",
  "Supervisor",
  "Supply chain coordinator",
  "Supply chain specialist",
  "Surgical technologist",
  "Talent acquisition coordinator",
  "Tattoo artist",
  "Team lead",
  "Team leader",
  "Technical support representative",
  "Telemarketer",
  "Test administrator",
  "Test scorer",
  "Tour guide",
  "Training and development manager",
  "Travel agent",
  "Travel nurse",
  "Tutor",
  "UI developer",
  "UX designer",
  "Veterinarian",
  "Veterinary assistant",
  "Veterinary ophthalmologist",
  "Veterinary pathologist",
  "Vice President",
  "Vice principal",
  "Virtual assistant",
  "Warehouse supervisor",
  "Web administrator",
  "Web developer",
  "Wedding stylist",
  "Wildlife biologist",
  "Wildlife inspector",
  "Wildlife rehabilitator",
  "Writer",
  "Zoologist",
];

// TAB NAVIGATOR
const next_Tab = (step) => {
  let index = currentTab.index;
  if (step < 0 && index == 0) {
    index = 0;
  } else if (step > 0 && index == 4) {
    index = 4;
    window.alert("you are on the final page");
  } else {
    index = index + step;
  }
  currentTab.index = index;
  let names = [
    "BASIC INFO",
    "IDENTITY",
    "EMPLOYMENT",
    "HOME ADDRESS",
    "DOCUMENTS",
  ];
  currentTab.tabname.innerText = names[index];

  if (index == 2) {
    if (w_status.value == "business") {
      currentTab.tabname.innerText = "BUSINESS";
    }
  }
  let tabs = formTabs;
  tabs.forEach((tab) => {
    tab.classList.remove("shown");
  });
  current_tab = tabs[index];
  current_tab.classList.add("shown");

  let btn0 = document.getElementById("btnprevius");
  let btn1 = document.getElementById("btnsubmt");
  btn0.classList.add("shown");
  btn1.innerText = "NEXT";
  if (index <= 0) { btn0.classList.remove("shown"); }
  if (index == 4) { btn1.innerText = "SUBMIT"; }
  currentTab.inputs = current_tab.querySelectorAll(".nput");

  let files = [photoimge];
  let imgs = current_tab.querySelectorAll(".img .nput");
  if (imgs.length > 0) { files = [...new Set([...files, ...imgs])]; }
  currentTab.inputfiles = files;
};

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

// RESIZE UPLOADED FILES
const resizeImages = (nput) => {
  let maxWidth = 300;
  let maxHeight = 300;
  let file = nput.files[0];
  if (!file) return;

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
      nput.nextElementSibling.src = srcEncoded;
    };
  };
};
inputfiles.forEach((nput) => {
  nput.onchange = function (e) {
    resizeImages(nput);
    nput.dispatchEvent(new Event("input"));
  };
});

/*

*/
// DATE OF BIRTH INPUTS
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

function loadDates() {
  let arrydates = [];
  if (current_input.id == "days") {
    let dt = new Date(inputdate.value);
    arrydates = monthdays(dt.getMonth() + 1, dt.getFullYear());
  } else if (current_input.id == "months") {
    arrydates = monthlist;
  } else if (current_input.id == "years") {
    arrydates = yearslist();
  }
  let rf = document.createDocumentFragment();
  for (let i = 0; i < arrydates.length; i++) {
    let li = document.createElement("li");
    li.dataset.data = JSON.stringify(arrydates[i]);
    li.innerHTML = "<p>" + arrydates[i] + "</p>";
    rf.appendChild(li);
  }
  current_drpdown.querySelector("ul").replaceChildren(rf);
}

function setnewPosition(par) {
  let inputs = current_form.querySelector(".inputs");
  let grndparent = current_input.closest(".lb");
  let H = inputs.offsetTop + inputs.clientHeight;
  //grandparent
  let H2 = grndparent.offsetTop + grndparent.clientHeight;
  //parent
  let parW = par;
  let ol = parW.offsetLeft;
  let ow = parW.clientWidth;

  current_drpdown.style.display = "grid";
  let H3 = H - (H2 + current_drpdown.offsetHeight) + 10;

  //current_drpdown.style.width = `${ol}px`;
  //current_drpdown.style.right = `${0}px`;

  current_drpdown.style.maxWidth = `${ow}px`;

  current_drpdown.style.left = `${ol}px`;
  current_drpdown.style.right = `auto`;
  if (current_input.name == "sectors") {
  }
  if (current_input.name == "tittles") {
    current_drpdown.style.left = `auto`;
    current_drpdown.style.right = `${0}px`;
    current_drpdown.style.width = `${150}px`;
  }

  if (current_input.className == "dt") {
    current_drpdown.style.left = `${ol - 20}px`;
    current_drpdown.style.right = `auto`;
    current_drpdown.style.maxWidth = `${120}px`;
  }

  if (H3 < 0) {
    current_drpdown.style.bottom = "50px";
    current_drpdown.style.top = `auto`;
  } else {
    current_drpdown.style.top = `50px`;
    current_drpdown.style.bottom = "auto";
  }
}

dtbutons.forEach((nput) => {
  nput.addEventListener("click", (e) => {
    current_input = nput;
    current_drpdown = document.getElementById("dates");
    let disp = current_drpdown.style.display;
    if (disp !== "" && disp !== "none") {
      current_drpdown.style.display = "none";
    } else {
      loadDates();
      current_drpdown.style.display = "grid";
      //dorpdownposition(nput);
      setnewPosition(nput);
    }
  });
});

let days = dtbutons[0];
let months = dtbutons[1];
let years = dtbutons[2];
let dobdate = inputdate;

const fetchdates = () => {
  let dt = new Date();
  dt.setFullYear(dt.getFullYear() - 18);
  let x = 0,
    w = 0,
    z = 0;
  let d = 0,
    m = 0,
    y = 0;
  x = dt.getDate();
  w = dt.getMonth() + 1;
  z = dt.getFullYear();

  dobirth.value = "";
  days.classList.remove("ok");
  months.classList.remove("ok");
  years.classList.remove("ok");

  if (days.value !== "DD") {
    x = parseInt(days.value);
    days.classList.add("ok");
  }
  if (months.value !== "MM") {
    w = monthlist.indexOf(months.value) + 1;
    months.classList.add("ok");
  }
  if (years.value !== "YY") {
    z = parseInt(years.value);
    years.classList.add("ok");
  }
  d = x;
  m = w;
  y = z;
  let dt_new = y + "/" + m + "/" + d;
  const dt2 = new Date(dt_new);
  const day = ("0" + dt2.getDate()).slice(-2);
  const month = ("0" + (dt2.getMonth() + 1)).slice(-2);
  const date = dt2.getFullYear() + "-" + month + "-" + day;
  dobdate.value = date;

  let myage = CalculatorAge(date);
  if ((myage) => 18) {
    if (days.value !== "DD" && months.value !== "MM" && years.value !== "YY") {
      dobirth.value = new Date(date);
      //document.getElementById("myage").innerText = myage + " yrs";
      dobirth.classList.remove("invalid");
    }
  }
  current_input.dispatchEvent(new Event("input"));
  dobirth.dispatchEvent(new Event("change"));
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
  fetchdates();
};

const setfullname = () => {
  let x;
  if (lname.value !== "") {
    x = lname.value + " " + fname.value;
  } else {
    x = sname.value + " " + fname.value;
  }
  return x;
};

// VALIDATE NUMBERS
function numberValidata(evt) {
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

// RANDOM NUMBERS
function RandomNumber(min, max) {
  var minn = Math.ceil(min);
  var maxx = Math.floor(max);
  return Math.floor(Math.random() * (maxx - minn)) + minn;
}

// ALL DROPDOWN LIST CLICKED
dropdowns.forEach((drod) => {
  drod.addEventListener("click", function (e) {
    current_drpdown = drod;
    let li = e.target.closest("li");
    if (!li) return;
    if (li.classList.contains("disabled")) return;
    //if (li.classList.contains("selected")) return;
    let txt = li.innerText.trim();
    let data = JSON.parse(li.dataset.data);
    current_input.dataset.id = data;
    current_input.value = txt;
    if (current_drpdown.id == "dates") {
      fetchdates();
      dobirth.dispatchEvent(new Event("input"));
    } else {
      li.classList.add("selected");
      current_input.dispatchEvent(new Event("input"));
    }
    current_drpdown.style.display = "none";
  });
});


// EXIT ANY OPEN ON WINDOW CLICK
window.addEventListener("mouseup", function (e) {
  dropdowns.forEach((drodwn) => {
    if (e.target !== current_input) {
      drodwn.style.display = "none";
    }
  });
});

function formater(nput) {
  if (nput.type == "file") { return; }
  if (nput.id == "contactList") return;
  let container = nput.closest(".lb");
  if (!container) { return; }
  if (nput.value == "") {
    container.classList.remove("valid");
    return nput;
  }
  container.classList.add("valid");
  let nputext = nput.value;
  if (nput.type == "tel") {
    let isValid = nput.checkValidity();
    if (isValid == false) {
      nput.className = "nput invalid";
      return nput;
    }
  }
  nput.value = nputext.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());
  if (nput.type == "email") {
    let newemail = nputext.replace(/\s/g, "").toLowerCase();
    nput.value = newemail;
    let isEmail =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.value.match(isEmail)) {
      email.className = "nput invalid";
      container.classList.remove("valid");
      return nput;
    }
    return;
  }
  if (nput.id == "krapin") {
    nput.value = nputext.toLowerCase().toUpperCase();
  }
}

function fetchnewData() {
  let newuser_data = {
    a_clss: "client",
    a_profid: userdocid.value.toString(),
    a_userid: userid.value.toString(),

    b_gender: gender.value.toLowerCase(),
    b_dob: dobirth.value.toString(),
    b_marital: marital.value.toLowerCase(),
    b_idnumber: idnum.value.toLowerCase(),
    b_krapin: krapin.value.toLowerCase(),

    c_firstname: fname.value.toLowerCase(),
    c_secondname: sname.value.toLowerCase(),
    c_lastname: lname.value.toLowerCase(),
    c_fullname: setfullname().toLowerCase(),

    d_phone_1: phone1.value.toLowerCase(),
    d_phone_2: phone2.value.toLowerCase(),
    d_others: [contacts.value.toLowerCase()],
    d_email: email.value.toLowerCase(),

    e_county: county.value.toLowerCase(),
    e_town: currtown.value.toLowerCase(),
    e_s_county: subcounty.value.toLowerCase(),
    e_s_location: sublocation.value.toLowerCase(),
    e_p_address: address.value.toLowerCase(),

    j_status: w_status.value.toLowerCase(),
    j_sector: w_sector.value.toLowerCase(),
    j_name: w_name.value.toLowerCase(),
    j_tittle: w_tittle.value.toLowerCase(),
    j_town: w_town.value.toLowerCase(),
    j_p_address: w_location.value.toLowerCase(),
    j_contact: w_contact.value.toLowerCase(),

    nok_name: nok_name.value.toLowerCase(),
    nok_relation: nok_relation.value.toLowerCase(),
    nok_town: nok_town.value.toLowerCase(),
    nok_phone: nok_contact.value.toLowerCase(),

    mg_file1: [photoimge.dataset.url],
    mg_file2: [nidfront.dataset.url],
    mg_file3: [nidback.dataset.url],
    mg_file4: [kracert.dataset.url],
    mg_file5: [bspermit.dataset.url],

    regdate: new Date().toLocaleDateString(),
  };
  sessionStorage.setItem(userdocid.value.toString(), JSON.stringify(newuser_data));
}


// DROPDOWNS INPUTS ========================================================


//Close Dropdowns
window.addEventListener("mouseup", function (e) {
  let tagElem = e.target;
  let parElem = tagElem.parentElement;
  if (parElem !== current_input.parentElement && e.target !== current_input) {
    document.querySelectorAll(".drodwnlist").forEach((dpdwn) => {
      dpdwn.style.display = "none";
    });
  }
});


// DATA LISTS FILTERS
let sublocations = {
  Changamwe: ["Port Reitz", "Chaani", "Miritini", "Chaani"],
  Jomvu: ["Jomvu Kuu", "Kwa Shee", "Birikani"],
  Kisauni: [
    "Magongoni",
    "Junda",
    "Bamburi",
    "Mwakirunge",
    "Maunguja",
    "Shanzu",
    "Mwembelegeza",
    "Kisauni",
  ],
  Nyali: ["Maweni", "Kongowea", "Kongowea"],
  Likoni: ["Mtongwe", "Vijiweni", "Vyemani", "Bofu", "Likoni", "Timbwani"],
  Mvita: [
    "Mji Wa Kale",
    "Makadara",
    "Kizingo",
    "Tudor Estate",
    "Tudor IV",
    "Bondeni",
    "Tononoka",
    "Ganjoni",
    "High Level",
    "Majengo",
    "Mwembe Tayari",
  ],
};

const filtered = (obj, arr) => {
  let result = Object.fromEntries(
    Object.entries(obj).filter(([k]) => arr.includes(k))
  );
  return Object.values(result)[0];
};


const dataListfunnel = (nput) => {
  let array = [];
  let ntext = nput.name;
  if (!ntext) return;

  if (ntext == "relations") {
    array = [
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
  } else if (ntext == "towns") {
    array = ["Mombasa", "Nairobi", "Kisumu"];

  } else if (ntext == "counties") {
    array = ["Mombasa", "Nairobi", "Kisumu"];

  } else if (ntext == "subcounties") {
      array = Object.keys(sublocations);
     if (county.value == "Nairobi") {
      array = [
        "Dagoretti North",
        "Dagoretti South",
        "Embakasi Central",
        "Embakasi East",
        "Embakasi North",
        "Embakasi South",
        "Embakasi West",
        "Kamukunji",
        "Kasarani",
        "Kibra",
        "Langata",
        "Makadara",
        "Mathare",
        "Roysambu",
        "Ruaraka",
        "Starehe",
        "Westlands",
      ];
    }

  } else if (ntext == "sublocations") {
    array = filtered(sublocations, [subcounty.value]);
   
  } else if (ntext == "sectors") {
    array = careerSectors;

  } else if (ntext == "tittles") {
    array = jobTittles;
  }
  return array;
}


//Toggle Dropdowns
const dropdownData = (nput) => {
  let data = dataListfunnel(nput)
  let temp = [];
  let rf = document.createDocumentFragment();
  if (!nput) { data; }
  if (nput) {
    let txt = nput.value.toLowerCase();
    temp = data.filter((elem) => elem.toLowerCase().indexOf(txt) > -1)
    if (data.length > 0) { data = temp; }
  }
  let droplist = current_drpdown.querySelector("ul")
  for (let i = 0; i < data.length; i++) {
    let li = document.createElement("li");
    li.dataset.data = JSON.stringify(data[i]);
    li.innerHTML = "<p>" + data[i] + "</p>";
    rf.appendChild(li);
  }
  droplist.replaceChildren(rf);
}

const dropdownSearch = (nput) => {
  let filtered = dataListfunnel(nput);
  let arrey = filtered;
  if (nput.value == "") {
    current_drpdown.style.display = "none";
    return;
  }
  let txt = nput.value.toLowerCase();
  arrey = filtered.filter((item) => item.toLowerCase().indexOf(txt) > -1);
  let rf = document.createDocumentFragment();
  if (arrey.length > 0) {
    for (let i = 0; i < arrey.length; i++) {
      let li = document.createElement("li");
      li.dataset.data = JSON.stringify(arrey[i]);
      li.innerHTML = "<p>" + arrey[i] + "</p>";
      rf.appendChild(li);
    }
    current_drpdown.querySelector("ul").replaceChildren(rf);
    setnewPosition(current_input.parentElement);
    current_drpdown.style.display = "grid";
  }else {
    current_drpdown.style.display = "none";
  }
};

const CurrentInputSearch = (elem) => {
  if (!elem) return;
  let grandElem = elem.closest(".lb");
  let parElem = elem.parentElement;
  current_input = parElem.querySelector(".nput");
  current_drpdown = grandElem.querySelector(".drodwnlist");
  current_drpdown.style.display = "none";
  dropdownSearch(current_input)
}
//Toggle droplists
const arrowClicked = (arrow) => {
  let prent = arrow.closest(".lb");
  let dropdown = prent.querySelector(".drodwnlist");
  let nput = arrow.parentElement.querySelector("input.nput");
  if (!dropdown) return;
  current_drpdown = dropdown;
  let disp = current_drpdown.style.display;
  current_drpdown.style.display = "none";

  dropdownData(nput);

  if (nput !== current_input) {
    current_input = nput;
    current_drpdown.style.display = "grid";
    setnewPosition(current_input.parentElement);
  } else {
    if (disp !== "" && disp !== "none") {
      current_drpdown.style.display = "none";
    } else {
      current_drpdown.style.display = "grid";
    }
  }
}

// Dropdowns Clicked
let dropdownLists = document.querySelectorAll(".drodwnlist");
dropdownLists.forEach((drod) => {
  drod.addEventListener("click", function (e) {
    current_drpdown = drod;
    let li = e.target.closest("li");
    if (!li) return;
    if (li.classList.contains("disabled")) return;
    //if (li.classList.contains("selected")) return;
    let txt = li.innerText.trim();
    let data = JSON.parse(li.dataset.data);
    current_input.dataset.id = data;
    current_input.value = txt;
    if (current_drpdown.id == "dates") {
      fetchdates();
      dobirth.dispatchEvent(new Event("input"));
    } else {
      li.classList.add("selected");
      current_input.dispatchEvent(new Event("input"));
    }
    current_drpdown.style.display = "none";
  });
});

let dropdownInputs = current_form.querySelectorAll(".drod .nput");
dropdownInputs.forEach((nput) => {
  nput.addEventListener("input", (e) => {
    if (nput.value !== "") {
      CurrentInputSearch(nput);
    }
  });
});


//((((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))


forminputs.forEach((nput) => {
  nput.addEventListener("input", (e) => {
    formater(nput);
  });
  nput.addEventListener("blur", (e) => {
  fetchnewData();
  });
});


//CREATE USER-ID  ===================================================================
let arrdocIDs = [];
const fetchdocIDs = () => {
  db.collection("Usersdbcc").where("cid", "!=", "")
    .onSnapshot((querySnapshot) => {
      let arr = [];
      querySnapshot.forEach((doc) => {
        arr.push(Number(doc.id));
      });
      arrdocIDs = arr;
    });
};
const createnew_id = () => {
  let random = RandomNumber(100000, 999999);
  let ids = arrdocIDs;
  if (ids.length = 0) {
    fetchdocIDs();
    createnew_id();
    return;
  }
  if (
    random.toString().length !== 6 ||
    ids.includes(random) == true) {
      createnew_id();
      return;
  };
  return random.toString();
};
const createDocid = () => {
  let user_id = createnew_id();
  const doc_id = [];
  const nums = user_id.match(/.{1,1}/g);
  const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < 6; i++) {
    let strng = str[Math.floor(Math.random() * str.length)];
    doc_id.push(strng, nums[i]);
  }
  userid.value = user_id.toString();
  userdocid.value = doc_id.join("").toString();

  if (userdocid.value == "") return;
  db.collection("Usersdbcc")
    .doc(userdocid.value.toString())
    .set({ a_docid: userdocid.value.toString()});
}


const fetchDocumentChanges = () => {
  db.collection("Usersdbcc").doc(userdocid.value.toString())
    .onSnapshot({
      includeMetadataChanges: true
    }, (doc) => {
      let name = doc.data().c_fullname;
      current_form.classList.remove("submit");
      document.querySelector(".modal").style.display = "none";
      alert("Congratulations! " + name + " your details have been saved successfully.")
      sessionStorage.removeItem(doc.id.toString());
    });
};
// ===================================================================

function openResetform() {
  current_form.querySelector("form").reset();
  userid.value = "";
  userdocid.value = "";
  days.value = "DD";
  months.value = "MM";
  years.value = "YY";
  dobirth.value = "";
  filldates(new Date())
  inputfiles.forEach((nput) => {
    nput.dataset.url = "";
    nput.dispatchEvent(new Event("input"));
    nput.dispatchEvent(new Event("change"));
  });
  forminputs.forEach((nput) => {
    formater(nput);
  });
  current_drpdown.style.display = "none";
  createDocid();
  document.querySelector(".modal").style.display = "grid";
  currentTab.index = 0;
  next_Tab(0);
} 
next_Tab(0);


const submitNewdata = (btn) => {
  let n_valid = [];
  btn.disabled = false;

  currentTab.inputs.forEach((nput) => {
    let x = formater(nput);
    if (x) { n_valid.push(x);}
  });
  currentTab.inputfiles.forEach((file) => {
    if (file == bspermit) return;
    if (!file.dataset.url) { n_valid.push(file); }
  });

  if (n_valid.length > 0) {
    n_valid.forEach((nput) => {
      nput.classList.add("invalid");
    });
    if (n_valid[0].type == "hidden") {
      n_valid[0].parentElement.focus();
    }
    if (n_valid[0].type == "file") {
      n_valid[0].parentElement.focus();
    }
    n_valid[0].focus();
    return;
  }
  if (currentTab.index == 4) {
    btn.disabled = true;
    current_form.classList.add("submit");
    let doc_id = userdocid.value.toString();
    let data = JSON.parse(sessionStorage.getItem(doc_id));
    db.collection("Usersdbcc")
      .doc(doc_id)
      .set(data)
      .then(() => {
        fetchDocumentChanges();
      });
  } else {
    next_Tab(1);
  }
};


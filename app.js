Vue.use(VueCharts);
const app = new Vue({
  el: '#app',
  data: {
    selected: {
      id: 1,
      name: 'Games',
      members: {
        Stats: 'Elrond', 
        Math: 'Gamgee', 
        Programming: 'Ohtar'}
      },
      interestLabel : '',
      interestLabels : ['Games', 'Working out', 'Tech', 'Art and design', 'Music', 'Sport', 'Photography', 'Food', 'Travel', 'Culture'],
      interestData : [7,2,4,2,0,0,0,0,0,1],
      skillLabel : '',
      skillLabels : ['IVIS', 'Stats', 'Math', 'Art', 'User', 'Prog', 'Graphics', 'UX'],
      skillData : [10, 10, 10, 10, 10, 10, 10, 10],

      interestOption: {
        legend: {
          display: false
        },

        scales: {
          xAxes: [{ 
            gridLines: {
              color: "rgba(0, 0, 0, 0)"
            }
          }],
          yAxes: [{ 
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            }
          }]
        }
      },
      skillOption: {
        legend: {
          display: false
        }
    },
    items: [
       { role: 'Stats', name: 'Elrond', ga: true, wo: true, te: true, ad: false, mu: false, sp: false, ph: false, fo: false, tr: false, cu: false },
      {role: '', name: 'Eomer', ga: false, wo: false, te: true, ad: true, mu: false, sp: false, ph: false, fo: false, tr: false, cu: false },
      {role: '', name: 'Grishnakh', ga: false, wo: false, te: true, ad: false, mu: false, sp: false, ph: false, fo: true, tr: false, cu: false },
      { role: '', name: 'Pelendur', ga: false, wo: false, te: false, ad: false, mu: true, sp: false, ph: false, fo: false, tr: false, cu: false },
      { role: '', name: 'Sauron', ga: false, wo: true, te: false, ad: false, mu: false, sp: true, ph: false, fo: false, tr: true, cu: false },
      { role: '', name: 'Uruk', ga: false, wo: true, te: false, ad: false, mu: false, sp: true, ph: false, fo: true, tr: false, cu: true },
      { role: '', name: 'Madril', ga: false, wo: false, te: true, ad: false, mu: true, sp: false, ph: true, fo: false, tr: false, cu: false },
      { role: '',name: 'Rian', ga: true, wo: false, te: false, ad: true, mu: false, sp: false, ph: false, fo: false, tr: false, cu: true },
      { role: '',name: 'Haleth', ga: false, wo: false, te: true, ad: false, mu: false, sp: false, ph: false, fo: false, tr: false, cu: true },

      { role: 'UX', name: 'Aragon', ga: false, wo: true, te: false, ad: true, mu: false, sp: true, ph: false, fo: true, tr: false, cu: false },
      {role: '', name: 'Borin', ga: false, wo: true, te: true, ad: true, mu: true, sp: false, ph: false, fo: false, tr: true, cu: true },
      {role: '', name: 'Bombadil', ga: false, wo: true, te: true, ad: false, mu: false, sp: true, ph: true, fo: false, tr: true, cu: false },
      { role: '', name: 'Damrod', ga: false, wo: false, te: false, ad: false, mu: true, sp: false, ph: false, fo: false, tr: false, cu: false },
      { role: '', name: 'Elendur', ga: false, wo: false, te: false, ad: false, mu: false, sp: false, ph: true, fo: false, tr: false, cu: false },
      { role: '', name: 'Kili', ga: false, wo: true, te: false, ad: false, mu: false, sp: false, ph: false, fo: true, tr: false, cu: false },
      { role: '', name: 'Sharku', ga: false, wo: false, te: false, ad: false, mu: false, sp: false, ph: false, fo: false, tr: false, cu: true },
      { role: '',name: 'Balin', ga: false, wo: false, te: false, ad: true, mu: false, sp: false, ph: false, fo: false, tr: false, cu: true },
      { role: '',name: 'Gollum', ga: false, wo: false, te: true, ad: true, mu: true, sp: false, ph: false, fo: false, tr: false, cu: false },

      { role: 'Math', name: 'Eldarion', ga: false, wo: false, te: false, ad: false, mu: true, sp: true, ph: false, fo: false, tr: false, cu: false },
      {role: '', name: 'Freda', ga: false, wo: false, te: true, ad: true, mu: false, sp: false, ph: true, fo: false, tr: false, cu: true },
      {role: '', name: 'Quickbeam', ga: false, wo: false, te: false, ad: true, mu: false, sp: false, ph: true, fo: false, tr: true, cu: false },
      { role: '', name: 'Grimbold', ga: false, wo: false, te: false, ad: false, mu: false, sp: false, ph: false, fo: true, tr: false, cu: false },
      { role: '', name: 'Lurtz', ga: false, wo: true, te: false, ad: false, mu: false, sp: false, ph: false, fo: true, tr: false, cu: true },
      { role: '', name: 'Gamgee', ga: true, wo: false, te: false, ad: false, mu: false, sp: false, ph: false, fo: false, tr: false, cu: false },
      { role: '', name: 'Haldir', ga: false, wo: true, te: false, ad: true, mu: false, sp: true, ph: false, fo: false, tr: false, cu: false },
      { role: '',name: 'Lindir', ga: false, wo: false, te: true, ad: false, mu: true, sp: false, ph: true, fo: false, tr: false, cu: false },
      { role: '',name: 'Theoden', ga: false, wo: false, te: true, ad: true, mu: false, sp: false, ph: false, fo: false, tr: false, cu: false },

      { role: 'Prog', name: 'Boromir', ga: false, wo: false, te: true, ad: false, mu: false, sp: false, ph: false, fo: false, tr: false, cu: false },
      {role: '', name: 'Denethor', ga: false, wo: false, te: false, ad: false, mu: false, sp: false, ph: false, fo: false, tr: true, cu: false },
      {role: '', name: 'Oin', ga: false, wo: false, te: false, ad: false, mu: true, sp: false, ph: false, fo: false, tr: false, cu: true },
      { role: '', name: 'Arwen', ga: false, wo: false, te: false, ad: false, mu: false, sp: false, ph: false, fo: true, tr: false, cu: false },
      { role: '', name: 'Bofur', ga: false, wo: false, te: false, ad: false, mu: false, sp: false, ph: true, fo: false, tr: false, cu: false },
      { role: '', name: 'Deagol', ga: false, wo: true, te: false, ad: false, mu: false, sp: false, ph: false, fo: false, tr: false, cu: true },
      { role: '', name: 'Frodo', ga: false, wo: true, te: false, ad: true, mu: false, sp: true, ph: false, fo: false, tr: false, cu: false },
      { role: '',name: 'Isildur', ga: true, wo: false, te: true, ad: false, mu: true, sp: false, ph: false, fo: false, tr: false, cu: false },
      { role: '',name: 'Ohtar', ga: true, wo: true, te: true, ad: false, mu: false, sp: false, ph: false, fo: false, tr: false, cu: false },

      { role: 'Art', name: 'Aldor', ga: false, wo: false, te: false, ad: true, mu: false, sp: false, ph: false, fo: false, tr: false, cu: true },
      {role: '', name: 'Bereg', ga: false, wo: false, te: true, ad: false, mu: false, sp: false, ph: false, fo: false, tr: true, cu: false },
      {role: '', name: 'Bombur', ga: false, wo: false, te: true, ad: true, mu: false, sp: true, ph: false, fo: false, tr: false, cu: false },
      { role: '', name: 'Dorlas', ga: true, wo: false, te: false, ad: false, mu: false, sp: false, ph: false, fo: false, tr: false, cu: false },
      { role: '', name: 'Dwalin', ga: false, wo: false, te: false, ad: false, mu: true, sp: false, ph: false, fo: false, tr: true, cu: false },
      { role: '', name: 'Gimli', ga: false, wo: true, te: false, ad: true, mu: false, sp: false, ph: false, fo: false, tr: false, cu: false },
      { role: '', name: 'Hardang', ga: false, wo: false, te: false, ad: false, mu: false, sp: false, ph: false, fo: true, tr: false, cu: false },
      { role: '',name: 'Maiar', ga: false, wo: false, te: true, ad: true, mu: false, sp: true, ph: false, fo: false, tr: false, cu: false },
      { role: '',name: 'Merry', ga: false, wo: false, te: false, ad: true, mu: false, sp: false, ph: false, fo: true, tr: true, cu: false },
      { role: '',name: 'Nessa', ga: false, wo: false, te: false, ad: true, mu: false, sp: false, ph: true, fo: false, tr: false, cu: true },

      { role: 'IVIS', name: 'Fili', ga: false, wo: false, te: true, ad: false, mu: false, sp: false, ph: false, fo: false, tr: false, cu: false },
      {role: '', name: 'Sam', ga: false, wo: false, te: false, ad: false, mu: false, sp: false, ph: false, fo: false, tr: true, cu: false },
      {role: '', name: 'Celeborn', ga: false, wo: false, te: false, ad: true, mu: false, sp: false, ph: false, fo: true, tr: false, cu: true },
      { role: '', name: 'Mauhur', ga: true, wo: false, te: true, ad: true, mu: false, sp: false, ph: false, fo: false, tr: false, cu: true },
      { role: '', name: 'Elendil', ga: false, wo: false, te: true, ad: true, mu: false, sp: false, ph: false, fo: false, tr: false, cu: true },
      { role: '', name: 'Ferny', ga: false, wo: false, te: false, ad: true, mu: false, sp: false, ph: true, fo: false, tr: false, cu: false },
      { role: '', name: 'Gorbag', ga: false, wo: false, te: true, ad: true, mu: false, sp: false, ph: false, fo: false, tr: false, cu: false },
      { role: '',name: 'Shagrat', ga: false, wo: false, te: false, ad: true, mu: false, sp: true, ph: false, fo: false, tr: false, cu: true },
      { role: '',name: 'Irolas', ga: true, wo: true, te: false, ad: false, mu: true, sp: false, ph: false, fo: false, tr: false, cu: false },

      { role: 'Graphics', name: 'Eowyn', ga: false, wo: false, te: false, ad: false, mu: false, sp: false, ph: true, fo: false, tr: true, cu: false },
      { role: '', name: 'Galadriel', ga: false, wo: true, te: true, ad: false, mu: false, sp: false, ph: false, fo: false, tr: false, cu: false },
      { role: '', name: 'Hama', ga: false, wo: false, te: false, ad: true, mu: false, sp: false, ph: false, fo: true, tr: false, cu: true },
      { role: '', name: 'Theodred', ga: false, wo: false, te: true, ad: false, mu: false, sp: false, ph: false, fo: true, tr: false, cu: false },
      { role: '', name: 'Gandalf', ga: true, wo: false, te: false, ad: false, mu: false, sp: false, ph: false, fo: false, tr: false, cu: false },
      { role: '', name: 'Legolas', ga: false, wo: true, te: true, ad: false, mu: false, sp: true, ph: false, fo: false, tr: false, cu: false },
      { role: '', name: 'Ugluk', ga: true, wo: false, te: false, ad: false, mu: false, sp: true, ph: false, fo: false, tr: false, cu: true },
      { role: '',name: 'Etohain', ga: false, wo: false, te: true, ad: true, mu: true, sp: false, ph: false, fo: false, tr: false, cu: false },
      { role: '',name: 'Bilbo', ga: false, wo: false, te: true, ad: true, mu: false, sp: false, ph: false, fo: false, tr: false, cu: false },


      { role: 'User', name: 'Bifur', ga: false, wo: false, te: true, ad: false, mu: true, sp: false, ph: false, fo: false, tr: true, cu: false },
      { role: '', name: 'Bounder', ga: false, wo: false, te: true, ad: true, mu: false, sp: false, ph: false, fo: false, tr: false, cu: false },
      { role: '', name: 'Idril', ga: false, wo: true, te: false, ad: false, mu: false, sp: false, ph: false, fo: false, tr: false, cu: true },
      { role: '', name: 'Morwen', ga: true, wo: false, te: true, ad: false, mu: true, sp: true, ph: false, fo: false, tr: false, cu: false },
      { role: '', name: 'Otho', ga: false, wo: false, te: false, ad: false, mu: false, sp: false, ph: false, fo: true, tr: false, cu: false },
      { role: '', name: 'Pippin', ga: true, wo: false, te: true, ad: true, mu: false, sp: false, ph: false, fo: false, tr: false, cu: false },
      { role: '', name: 'Smaug', ga: false, wo: false, te: true, ad: true, mu: false, sp: false, ph: false, fo: false, tr: false, cu: false },
      { role: '',name: 'Thorin', ga: false, wo: false, te: true, ad: false, mu: true, sp: false, ph: true, fo: false, tr: false, cu: false },
      { role: '',name: 'Faramir', ga: false, wo: false, te: true, ad: true, mu: false, sp: false, ph: false, fo: false, tr: false, cu: true },
      { role: '',name: 'Smeagol', ga: true, wo: false, te: false, ad: true, mu: false, sp: false, ph: false, fo: true, tr: false, cu: true },
    ]
  },
  methods: {
  	highlight: function(event){
      if (event == 'ga') {
        array = ['ga0', 'ga23', 'ga35', 'ga39', 'ga49', 'ga59', 'ga69']
        names = ['n0', 'n23', 'n35', 'n49', 'n59', 'n69']
      }

      if (event == 'wo') {
        array = ['wo5', 'wo14', 'wo22', 'wo32', 'wo41', 'wo56', 'wo66'];
        names = ['n5', 'n14', 'n22', 'n32', 'n41', 'n56', 'n66']
      }

      if (event == 'te') {
        array = ['te1', 'te17', 'te26', 'te27', 'te37', 'te46', 'te57', 'te65'];
        names = ['n1', 'n17', 'n26', 'n27', 'n37', 'n46', 'n57', 'n65'];
      }

      if (event == 'ad') {
        array = ['ad7', 'ad16', 'ad19', 'ad38', 'ad52', 'ad63', 'ad70'];
        names = ['n7', 'n16', 'n19', 'n38', 'n52', 'n63', 'n70'];

      }

      if (event == 'mu') {
        array = ['mu3', 'mu12', 'mu18', 'mu34', 'mu40', 'mu54', 'mu62', 'mu71'];
        names = ['n3', 'n12', 'n18', 'n34', 'n40', 'n54', 'n62', 'n71'];
      }

      if (event == 'sp') {
        array = ['sp9', 'sp24', 'sp33', 'sp43', 'sp53', 'sp60', 'sp67'];
        names = ['n9', 'n24', 'n33', 'n43', 'n53', 'n60', 'n67'];
      }

      if (event == 'ph') {
        array = ['ph6', 'ph11', 'ph25', 'ph31', 'ph45', 'ph51', 'ph55', 'ph68'];
        names = ['n6', 'n11', 'n25', 'n31', 'n45', 'n51', 'n55', 'n68'];
      }

      if (event == 'fo') {
        array = ['fo2', 'fo13', 'fo21', 'fo30', 'fo42', 'fo48', 'fo58', 'fo73'];
        names = ['n2', 'n13', 'n21', 'n30', 'n42', 'n48', 'n58', 'n73'];
      }

      if (event == 'tr') {
        array = ['tr4', 'tr10', 'tr20', 'tr28', 'tr44', 'tr47', 'tr64'];
        names = ['n4', 'n10', 'n20', 'n28', 'n44', 'n47', 'n64'];
      }

      if (event == 'cu') {
        array = ['cu8', 'cu15', 'cu29', 'cu36', 'cu50', 'cu61', 'cu72'];
        names = ['n8', 'n15', 'n29', 'n36', 'n50', 'n61', 'n72']; 
      }

      highlightbackground(array)
      highlighttext(names)
  	},
    reset: function(event){
  if (event == 'ga') {
    array = ['ga0', 'ga23', 'ga35', 'ga39', 'ga49', 'ga59', 'ga69']
    names = ['n0', 'n23', 'n35', 'n49', 'n59', 'n69']
  }

  if (event == 'wo') {
    array = ['wo5', 'wo14', 'wo22', 'wo32', 'wo41', 'wo56', 'wo66'];
    names = ['n5', 'n14', 'n22', 'n32', 'n41', 'n56', 'n66']
  }

  if (event == 'te') {
    array = ['te1', 'te17', 'te26', 'te27', 'te37', 'te46', 'te57', 'te65'];
    names = ['n1', 'n17', 'n26', 'n27', 'n37', 'n46', 'n57', 'n65'];
  }

  if (event == 'ad') {
    array = ['ad7', 'ad16', 'ad19', 'ad38', 'ad52', 'ad63', 'ad70'];
    names = ['n7', 'n16', 'n19', 'n38', 'n52', 'n63', 'n70'];

  }

  if (event == 'mu') {
    array = ['mu3', 'mu12', 'mu18', 'mu34', 'mu40', 'mu54', 'mu62', 'mu71'];
    names = ['n3', 'n12', 'n18', 'n34', 'n40', 'n54', 'n62', 'n71'];
  }

  if (event == 'sp') {
    array = ['sp9', 'sp24', 'sp33', 'sp43', 'sp53', 'sp60', 'sp67'];
    names = ['n9', 'n24', 'n33', 'n43', 'n53', 'n60', 'n67'];
  }

  if (event == 'ph') {
    array = ['ph6', 'ph11', 'ph25', 'ph31', 'ph45', 'ph51', 'ph55', 'ph68'];
    names = ['n6', 'n11', 'n25', 'n31', 'n45', 'n51', 'n55', 'n68'];
  }

  if (event == 'fo') {
    array = ['fo2', 'fo13', 'fo21', 'fo30', 'fo42', 'fo48', 'fo58', 'fo73'];
    names = ['n2', 'n13', 'n21', 'n30', 'n42', 'n48', 'n58', 'n73'];
  }

  if (event == 'tr') {
    array = ['tr4', 'tr10', 'tr20', 'tr28', 'tr44', 'tr47', 'tr64'];
    names = ['n4', 'n10', 'n20', 'n28', 'n44', 'n47', 'n64'];
  }

  if (event == 'cu') {
    array = ['cu8', 'cu15', 'cu29', 'cu36', 'cu50', 'cu61', 'cu72'];
    names = ['n8', 'n15', 'n29', 'n36', 'n50', 'n61', 'n72']; 
  }

  resetbackground(array)
  resettext(names)
    },
    selectGroup: function(event){
      if (event == 'ga') {
        this.selected = {id: 1, 
                        name: 'Games',
                        members: {Stats: 'Elrond', Math: 'Gamgee', Programming: 'Ohtar', Art: 'Dorlas', IVIS: 'Mauhur', Graphics: 'Gandalf', User: 'Pippin'}
                      }
        this.interestData = [7,2,4,2,0,0,0,0,0,1];
        this.skillData = [29,30,34,29,50,44,18,27];
      }

      if (event == 'wo') {
        this.selected = 
          { id: 2, 
            name: 'Working out',
            members: {Stats: 'Uruk', UX: 'Kili', Math: 'Lurtz', Programming: 'Deagol', Art: 'Gimli', Graphics: 'Gandalf', User: 'Galadriel'}
          }
              
          this.interestData = [0,7,1,1,0,1,0,3,0,4];
          this.skillData = [28,33,35 ,43, 57,  42, 26, 33];
      }
  

      if (event == 'te') {
        this.selected = 
          { id: 3, 
            name: 'Tech',
            members: {Stats: 'Eomer', UX: 'Balin', Math: 'Freda', Art: 'Bombur', IVIS: 'Gorbag', Graphics: 'Bilbo', User: 'Smaug'}
          }
              
          this.interestData = [0,0,8,5,1,0,0,1,1,0];
          this.skillData = [35,48,50,31,64,45,31,42];
      }

      if (event == 'ad') {
        this.selected = 
          { id: 4, 
            name: 'Design',
            members: {Stats: 'Rian', UX: 'Gollum', Math: 'Theoden', Programming: 'Boromir', Art: 'Bereg', IVIS: 'Fili', Graphics: 'Hama', User: 'Bounder'}
          }
              
          this.interestData = [1,0,5,7,0,1,1,0,0,0];
          this.skillData = [28,26,39,40,57,41,25,33,38];
      }

      if (event == 'mu') {
        this.selected = 
          { id: 5, 
            name: 'Music',
            members: {Stats: 'Pelendur', UX: 'Gollum', Math: 'Eldarion', Programming: 'Isildur', Art: 'Dwalin', IVIS: 'Irolas', Graphics: 'Eothain', User: 'Thorin'}
          }
              
          this.interestData = [2,1,3,1,8,1,1,0,1,0];
          this.skillData = [29,36,49,39,59,46,33,40];
      }

      if (event == 'sp') {
        this.selected = 
          { id: 6, 
            name: 'Sport',
            members: {UX: 'Aragon', Math: 'Haldir', Programming: 'Frodo', Art: 'Maiar', IVIS: 'Shagrat', Graphics: 'Legolas', User: 'Morwen'}
          }
              
          this.interestData = [1,3,3,5,1,7,0,1,0,1];
          this.skillData = [27,27,29,40,53,30,14,32];
      }

      if (event == 'ph') {
        this.selected =
        { id: 7, 
          name: 'Photo',
          members: {Stats: 'Madril', UX: 'Bombadil', Math: 'Lindir', Programming: 'Bofur', Art: 'Nessa', IVIS: 'Ferny', Graphics: 'Eowyn', User: 'Otho'}
        }
            
        this.interestData = [0 ,1,2,2,2,1,8,0,2];
        this.skillData = [29,28,38,28,51,38,24,33];
      }

      if (event == 'fo') {
        this.selected =
        { id: 8, 
          name: 'Food',
          members: {Stats: 'Grishnakh', UX: 'Elendur', Math: 'Grimbold', Programming: 'Arwen', Art: 'Hardang', IVIS: 'Celeborn', Graphics: 'Theodred', User: 'Smeagol'}
        }
            
        this.interestData = [1,0,2,2,0,0,0,8,0,2];
        this.skillData = [31,39,46,39,64,43,25,46];
      }

      if (event == 'tr') {
        this.selected =
        { id: 9, 
          name: 'Travel',
          members: {Stats: 'Sauron', UX: 'Borin', Math: 'Quickbeam', Programming: 'Denethor', Art: 'Merry', IVIS: 'Fili', User: 'Bifur'}
        }
            
        this.interestData = [0,2,2,3,2,1,1,1,7,1];
        this.skillData = [30,37,37,41,56,36,30,46];
      }

      if (event == 'cu') {
        this.selected =
        { id: 10, 
          name: 'Culture',
          members: {Stats: 'Haleth', UX: 'Sharku', Programming: 'Oin', Art: 'Aldor', IVIS: 'Elendil', Graphics: 'Ugluk', User: 'Faramir'}
        }
            
        this.interestData = [1,0,3,3,1,1,0,0,0,7];
        this.skillData = [32,28,37,40,50,36,23,41];
      }
    }
  }
})

function highlighttext(array) {
  for (var i = 0; i < array.length; i++) {
      var x = document.getElementById(array[i]);
      x.style.color = '#03A9F4';
    }
}

function highlightbackground(array) {
  for (var i = 0; i <array.length; i++) {
    var x = document.getElementById(array[i]);
    x.style.background = '#03A9F4';
  }
      
    }

function resetbackground(array) {
  for (var i = 0; i <array.length; i++) {
    var x = document.getElementById(array[i]);
    x.style.background = "repeating-linear-gradient(45deg, black, black 1px, transparent 1px, transparent 4px)";
  }
}

function resettext(array) {
  for (var i = 0; i < array.length; i++) {
    var x = document.getElementById(array[i]);
    x.style.color = 'black'
  }
}

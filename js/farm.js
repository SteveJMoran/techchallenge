// 3. Please iterate through the farm object below. 
// If there is a nested object, then iterate through that as well. 
// You should console log each property name and property value in all objects, 
// example "crop is Winter Wheat", using a template literal.
const farm = {
  type: 'crop',
  name: 'Sweet Gardens',
  hectares: 300,
  employees: 3,
  owner: 2,
  barnCats: 14,
  location: {
      province: 'Ontario',
      city: 'Cambridge',
      postalCode: 'N1R5S2'
  },
  cropRotation: {
      field1: {
          crop: 'Winter Wheat',
          harvest: 'June',
          lastRotation: '2017'
      },
      field2: {
          crop: 'Corn',
          harvest: 'September',
          lastRotation: '2016',
      },
      field3: {
          crop: null,
          harvest: null,
          lastRotation: '2018'
      }
  }
}

function loop(farm) {
  const keys = Object.keys(farm);

  keys.forEach(key => {
    if(typeof farm[key] == 'object' && farm[key] != null) {
      console.log(key+":")
      let obj = farm[key];
      //loop again through each level
      loop(obj, key);
    } else {
      let value = farm[key]  || 'not set'
      let name = key;
      let output = `${name} is ${value}`;

      console.log(output)
    }
  })
}
document.querySelector("#showFarm").addEventListener('click',function(){
  loop(farm);
})


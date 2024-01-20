const MON_CHAY = true;
const CON_MON = true;
// chay => True ,  mặn false
// Còn món => True , hết false
export let renderFoodList = (foodArr) => {
  //   console.log('foodArr: ', foodArr);
  let contentHtml = '';
  foodArr.forEach((item) => {
    let trString = `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.loai == MON_CHAY ? 'Chay' : 'Mặn'}</td>
                    <td>${item.price}</td>
                    <td>0</td>
                    <td>${item.khuyenMai}</td>
                    <td>${item.tinhTrang == CON_MON ? 'Còn món' : 'Hết'}</td>
                    <td>
                    <button onclick="deleteFood(${
                      item.id
                    })" class= "btn btn-success">Delete</button>
                    <button class="btn btn-primary" onclick="getDetailFood(${
                      item.id
                    })">Sửa</button>
                    </td>
                </tr>
        `;
    contentHtml += trString;
  });
  document.getElementById('tbodyFood').innerHTML = contentHtml;
};

export let onSuccess = (message) => {
  Swal.fire({
    title: message,
    text: 'You clicked the button!',
    icon: 'success',
  });
};

export let getDataFoodForm = () => {
  // lấy giá trị người dùng nhập vào từ form
  let id = document.getElementById('foodID').value;
  let name = document.getElementById('tenMon').value;
  let loai = document.getElementById('loai').value;
  let price = document.getElementById('giaMon').value;
  let khuyenMai = document.getElementById('khuyenMai').value;
  let tinhTrang = document.getElementById('tinhTrang').value;
  let hinhAnh = document.getElementById('hinhMon').value;
  let moTa = document.getElementById('moTa').value;

  let food = {
    id,
    name,
    loai,
    price,
    khuyenMai,
    tinhTrang,
    hinhAnh,
    moTa,
  };
  return food;
  console.log('food: ', food);
};

export let showInfoFood = (dataFood) => {
  console.log('dataFood: ', dataFood);
  document.getElementById('foodID').value = dataFood.id;
  document.getElementById('tenMon').value = dataFood.name;
  document.getElementById('loai').value = dataFood.loai;
  document.getElementById('giaMon').value = dataFood.price;
  document.getElementById('khuyenMai').value = dataFood.khuyenMai;
  document.getElementById('tinhTrang').value = dataFood.tinhTrang;
  document.getElementById('hinhMon').value = dataFood.hinhAnh;
  document.getElementById('moTa').value = dataFood.moTa;
};

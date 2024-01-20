import foodSerV from '../../service/service.js';
import {
  getDataFoodForm,
  onSuccess,
  renderFoodList,
  showInfoFood,
} from './controller-v2.js';

const fectFoodList = () => {
  foodSerV
    .getListFoodApi()
    .then((res) => {
      //   console.log('res: ', res);
      renderFoodList(res.data);
    })
    .catch((err) => {
      console.log('err: ', err);
    });
};

fectFoodList();

// GET :  lấy tất cả product
// GET(id) :  Lấy product có id đó
// DELETE : xoá (id)
// POST : tạo (data)
// PUT :  update (id,data)

let deleteFood = (id) => {
  foodSerV
    .deleteFoodApi(id)
    .then((res) => {
      //   Gọi lại api get list và render ra giao diện
      fectFoodList();
      onSuccess('Xoá thành công');
    })
    .catch((err) => {
      console.log('err: ', err);
    });
};

window.deleteFood = deleteFood;

let createFood = () => {
  //   console.log('yes');
  let dataFood = getDataFoodForm();
  foodSerV
    .createFoodApi(dataFood)
    .then((res) => {
      console.log('res: ', res);
      fectFoodList();
      onSuccess('Thêm Thành Công');
      $('#exampleModal').modal('hide');
    })
    .catch((err) => {
      console.log('err: ', err);
    });
};
window.createFood = createFood;

// GET (id)

let getDetailFood = (id) => {
  //   console.log('id: ', id);
  foodSerV
    .getDeatailFoodApi(id)
    .then((res) => {
      //   console.log('res: ', res);
      showInfoFood(res.data);
      //   Ấn sửa thì hiện modal
      $('#exampleModal').modal('show');
    })
    .catch((err) => {
      console.log('err: ', err);
    });
};
window.getDetailFood = getDetailFood;

export let getDataForm = () => {
  let id = document.getElementById("foodID").value;
  let name = document.getElementById("tenMon").value;
  let type = document.getElementById("loai").value;
  let price = document.getElementById("giaMon").value;
  let discount = document.getElementById("khuyenMai").value;
  let status = document.getElementById("tinhTrang").value;
  let image = document.getElementById("hinhMon").value;
  let desc = document.getElementById("moTa").value;
  // tạo object có key value trùng nhau
  let food = {
    id,
    name,
    type,
    price,
    discount,
    status,
    image,
    desc,
    countPromotion: function () {
      return this.price * (1 - this.discount);
    },
  };
  return food;
};

// anfn

export let showData = (food) => {
  let { id, name, type, price, discount, status, image, desc } = food;

  document.getElementById("imgMonAn").src = image;
  document.getElementById("spMa").innerText = id;
  document.getElementById("spTenMon").innerText = name;
  document.getElementById("spLoaiMon").innerText = type;
  document.getElementById("spGia").innerText = price;
  document.getElementById("spKM").innerText = discount * 100 + "%";
  document.getElementById("spTT").innerText = status == 1 ? "Còn" : "Hết";
  document.getElementById("pMoTa").innerText = desc;
  document.getElementById("spGiaKM").innerText = food.countPromotion();
  //   food.countPromotion()
};

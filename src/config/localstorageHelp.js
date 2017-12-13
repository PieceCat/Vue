//读取本地存储中的数据
//本地存储，存储的是字符串，所以要转换为对象
export function getData() {
    return JSON.parse(localStorage.getItem('goodslist') || '[]')
}

export function setData(json) {
    //获得数据
    let data = getData()
        //设置id 判断之前的id是否有json.id

    let hasData = false; //假设没有json.id
    data.forEach(item => {
        if (item.id === json.id) {
            hasData = true
                //如果有，累加商品数量
            item.count += json.count
        }
    });
    if (!hasData) {
        //如果没有就整个加入数组，等同于加了个订单，
        data.push(json);
    }
    //存储订单对象到localStorage
    localStorage.setItem('goodslist', JSON.stringify(data))
}
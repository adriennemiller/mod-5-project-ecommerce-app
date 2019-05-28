# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'faker'
include Faker

# images = [ "https://img13.360buyimg.com/imgzone/jfs/t13174/70/165792223/123424/f55c8e1e/5a225978N1fa68edc.jpg", "http://img35.ddimg.cn/79/22/1258168705-1_u.jpg",  "https://img.alicdn.com/imgextra/TB19HtjKXXXXXcfaXXXYXGcGpXX_M2.SS2", "http://img4.99114.com/group1/M00/7D/C5/wKgGTFfDqhGAA0F6AAJF-NNKCgc821.jpg", "https://img.alicdn.com/imgextra/TB2JXwfcNwlyKJjSZFNXXcOlpXa_!!2580279411.jpg",  "https://img12.360buyimg.com/imgzone/jfs/t11893/177/1421638393/460856/1e2bd452/5a03c132N567f886f.jpg", "http://www.zphm168.com/system32/upload/product/2014090612184532_b.jpg", "https://img12.360buyimg.com/imgzone/jfs/t13861/166/2581186384/80876/2558218a/5a45087fNd62614d7.jpg",  "https://img.alicdn.com/imgextra/TB2xNwlkFXXXXXbXXXXXXXXXXXX_!!764812029.jpg", "https://img.alicdn.com/imgextra/TB2SjEhhHBkpuFjy1zkXXbSpFXa_!!43623533.jpg",  "http://sinastorage.com/storage.csj.sina.com.cn/9144a4a56dc2cfb130f7568cc00e4829.jpg",  "https://img13.360buyimg.com/imgzone/jfs/t5638/312/2081668835/404132/a025ec89/592d3711N7f704c14.jpg", "https://img.alicdn.com/imgextra/TB29FgocLjM8KJjSZFsXXXdZpXa_!!3395481681.jpg", "http://img.shushi100.com/images/0c867d62-2d36-431f-884c-585c429a34bb.jpg", "http://img.fuwo.com/tuce/1603/23/cb8be97af0c111e5bb8100163e00254c.jpg",  "https://img11.360buyimg.com/imgzone/jfs/t9958/113/2403311229/105133/8afdd188/59f51020N07fb86d5.jpg","http://shop.gctc.cn/images/201702/goods_img/163_P_1487419176132.jpg", "https://img.alicdn.com/imgextra/TB2HpDIjIjI8KJjSsppXXXbyVXa_!!3029150826.jpg",  "http://img.haolivshop.com/upload/store/goods/31/f362d7d03273dd0926ac0f6a52020425.jpg_max.jpg", "https://img12.360buyimg.com/imgzone/jfs/t9976/28/2083690219/392816/1e972390/59ed832dN2dfc690c.jpg",  "https://img12.360buyimg.com/imgzone/jfs/t5605/187/376144632/254157/7a55374a/591eeecfN8bca7510.jpg", "https://img.alicdn.com/imgextra/TB2MfbggEF7MKJjSZFLXXcMBVXa_!!96008366.jpg", "https://img12.360buyimg.com/imgzone/jfs/t7528/41/662365675/199201/518ff04d/59958904Nf6f1758b.jpg", "https://img11.360buyimg.com/imgzone/jfs/t14083/128/142596792/60944/ae999267/5a0468a9N69675585.jpg", "https://img.alicdn.com/imgextra/TB2ICAgoCBjpuFjSsplXXa5MVXa_!!2011157261.jpg", "http://img13.360buyimg.com/n1/jfs/t1645/90/1404978386/47331/50ac7767/55c96e20N466a8f9f.jpg", "https://img14.360buyimg.com/imgzone/jfs/t3589/173/775763398/347063/1f1fc104/5817f1a2Na6c4f946.jpg", "https://img14.360buyimg.com/imgzone/jfs/t12856/298/922597412/109441/1227047c/5a16693aNd04e8355.jpg", "http://docs.ebdoor.com/Image/InfoContentImage/ProductDesc/2014/12/04/81/811781df-611b-4831-b983-1f53b3023d0a.jpg", "https://img.alicdn.com/imgextra/TB256UcgP3z9KJjy0FmXXXiwXXa_!!1708593279.jpg", "http://img010.hc360.cn/y3/M06/02/3A/wKhQh1V5OOSEfbQhAAAAAEbMt0E043.jpg", "http://www.shengfamumen.com/upfile/upload/uppic/2014/04/2014041614171441605.jpg", "https://img.alicdn.com/imgextra/TB2WOOWlVXXXXX7XXXXXXXXXXXX_!!1679269745.png", "https://img.alicdn.com/imgextra/TB2tAl4icnI8KJjSspeXXcwIpXa_!!2906663622.png", "http://www.798buy.com/images/upload/201112/07/Image/20111207155705w6i3iw.jpg", "http://memberpic.114my.cn/0406911/product/20151/2015011654031421.jpg","https://img.alicdn.com/imgextra/T1otQIFm4fXXXXXXXX_!!0-item_pic.jpg", "https://img12.360buyimg.com/imgzone/jfs/t12223/196/1471132411/116294/a81ef109/5a212e14Nba1f4c15.jpg"]

images = ["https://images.pexels.com/photos/371102/pexels-photo-371102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "https://images.pexels.com/photos/68740/diamond-gem-cubic-zirconia-jewel-68740.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "https://images.pexels.com/photos/1395306/pexels-photo-1395306.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "https://images.pexels.com/photos/266621/pexels-photo-266621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "https://images.pexels.com/photos/356148/pexels-photo-356148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "https://images.pexels.com/photos/998521/pexels-photo-998521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "https://images.pexels.com/photos/1302307/pexels-photo-1302307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "https://images.pexels.com/photos/1453008/pexels-photo-1453008.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
"https://images.pexels.com/photos/298852/pexels-photo-298852.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
"https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
"https://images.pexels.com/photos/168927/pexels-photo-168927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
"https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
"https://images.pexels.com/photos/1670723/pexels-photo-1670723.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
"https://images.pexels.com/photos/750148/pexels-photo-750148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
"https://images.pexels.com/photos/1395305/pexels-photo-1395305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
"https://images.pexels.com/photos/2010995/pexels-photo-2010995.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/185489/pexels-photo-185489.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
"https://images.pexels.com/photos/236900/pexels-photo-236900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
"https://images.pexels.com/photos/2062653/pexels-photo-2062653.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
"https://images.pexels.com/photos/445986/pexels-photo-445986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
"https://images.pexels.com/photos/965995/pexels-photo-965995.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
"https://images.pexels.com/photos/2219195/pexels-photo-2219195.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
"https://images.pexels.com/photos/277459/pexels-photo-277459.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"]

40.times do 
    Product.create(
        name: Faker::Commerce.product_name,
        description: Faker::Lorem.paragraph,
        img: images.sample,
        price: Faker::Commerce.price

    )
    end 
     

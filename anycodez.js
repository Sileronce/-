function commands() {
    var width = prompt("น้ำหนักของคุณ")
    var height = prompt("ความสูงของคุณ ( เมตร ) เช่น 1.69")
    var value = width / height**2
    document.getElementById("width").innerHTML = "น้ำหนักของท่าน :" + " " + width + " " + "กิโลกรัม"
    document.getElementById("height").innerHTML = "ส่วนสูงของท่าน :" + " " + height + " " + "เมตร"
    document.getElementById("result1").innerHTML = "ค่า BMI ของท่าน :" + " " + value
    if(value <= 18.4) {
        let any1 =  new String("เกณฑ์น้ำหนักตัว = ต่ำกว่าเกณฑ์")
        document.getElementById("result2").innerHTML = any1.fontcolor("red")
    }
    else if(value >= 18.5, value <= 24.9) {
        let str =  new String("เกณฑ์น้ำหนักตัว = เกณฑ์ปกติ")
        document.getElementById("result2").innerHTML = str.fontcolor("green")
    }
    else if(value >= 25.0, value <= 29.9) {
        let any3 =  new String("เกณฑ์น้ำหนักตัว = น้ำหนักเกินเกณฑ์")
        document.getElementById("result2").innerHTML = any3.fontcolor("drakgreen")
    }
    else if(value >= 30.0, value <= 39.9) {
        let any4 =  new String("เกณฑ์น้ำหนักตัว = มีภาวะโรคอ้วน")
        document.getElementById("result2").innerHTML = any4.fontcolor("red")
    }
    else if(value >= 40) {
        let any5 =  new String("เกณฑ์น้ำหนักตัว = โรคอ้วนขั้นรุนแรง")
        document.getElementById("result2").innerHTML = any5.fontcolor("red")
    }
}

commands()

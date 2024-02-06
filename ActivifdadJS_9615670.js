var dia_nacimiento = parseInt(prompt("Ingrese el día de su nacimiento"),10);
var mes_nacimiento = parseInt(prompt("Ingrese el mes de su nacimiento"),10);

if (mes_nacimiento == 1 && dia_nacimiento >= 21 && dia_nacimiento <= 31 || mes_nacimiento == 2 && dia_nacimiento <= 19  ){
  alert("1 Su signo Zodiacal es Acuario")
}else if (mes_nacimiento == 2 && dia_nacimiento >= 20 && dia_nacimiento <= 29 || mes_nacimiento == 3 && dia_nacimiento <= 20  ){
  alert("2 Su signo Zodiacal es Piscis")
}else if (mes_nacimiento == 3 && dia_nacimiento >= 21 && dia_nacimiento <= 31 || mes_nacimiento == 4 && dia_nacimiento <= 20  ){  
  alert("3 Su signo Zodiacal es Aries")
}else if (mes_nacimiento == 4 && dia_nacimiento >= 21 && dia_nacimiento <= 30 || mes_nacimiento == 5 && dia_nacimiento <= 20  ){  
  alert("3 Su signo Zodiacal es Tauro")
}else if (mes_nacimiento == 5 && dia_nacimiento >= 21 && dia_nacimiento <= 31 || mes_nacimiento == 6 && dia_nacimiento <= 20  ){  
  alert("3 Su signo Zodiacal es Géminis")
}else if (mes_nacimiento == 6 && dia_nacimiento >= 21 && dia_nacimiento <= 30 || mes_nacimiento == 7 && dia_nacimiento <= 22  ){  
  alert("3 Su signo Zodiacal es Cáncer")
}else if (mes_nacimiento == 7 && dia_nacimiento >= 23 && dia_nacimiento <= 31 || mes_nacimiento == 8 && dia_nacimiento <= 23  ){  
  alert("3 Su signo Zodiacal es Leo")
}else if (mes_nacimiento == 8 && dia_nacimiento >= 24 && dia_nacimiento <= 31 || mes_nacimiento == 9 && dia_nacimiento <= 22  ){  
  alert("3 Su signo Zodiacal es Virgo")
}else if (mes_nacimiento == 9 && dia_nacimiento >= 23 && dia_nacimiento <= 30 || mes_nacimiento == 10 && dia_nacimiento <= 23  ){  
  alert("3 Su signo Zodiacal es Libra")
}else if (mes_nacimiento == 10 && dia_nacimiento >= 24 && dia_nacimiento <= 31 || mes_nacimiento == 11 && dia_nacimiento <= 22  ){  
  alert("3 Su signo Zodiacal es Escorpio")
}else if (mes_nacimiento == 11 && dia_nacimiento >= 23 && dia_nacimiento <= 30 || mes_nacimiento == 12 && dia_nacimiento <= 21  ){  
  alert("3 Su signo Zodiacal es Sagitario")
}else if (mes_nacimiento == 12 && dia_nacimiento >= 22 && dia_nacimiento <= 31 || mes_nacimiento == 1 && dia_nacimiento <= 20  ){  
  alert("3 Su signo Zodiacal es Capricornio")
}else{  
  alert("Datos incorrectos, no se puede procesar su respuesta.")
  }

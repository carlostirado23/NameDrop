# generar_contacto.py

# 1. Datos del contacto
nombre = "Carlos Tirado"
telefono = "+573013325096"
correo = "mariotiradotovar@gmail.com"

# 2. Crear el archivo vCard
vcf_content = f"""BEGIN:VCARD
VERSION:3.0
N:{nombre.split()[1]};{nombre.split()[0]};;;
FN:{nombre}
TEL;TYPE=CELL:{telefono}
EMAIL:{correo}
END:VCARD
"""

with open("contacto.vcf", "w", encoding="utf-8") as f:
    f.write(vcf_content)

print("✅ contacto.vcf generado correctamente.")

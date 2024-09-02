from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_OAEP

def rsa_encrypt_decrypt(message, key, mode):
    cipher = PKCS1_OAEP.new(key)
    
    if mode == 'encrypt':
        encrypted_message = cipher.encrypt(message.encode())
        return encrypted_message
    elif mode == 'decrypt':
        decrypted_message = cipher.decrypt(message)
        return decrypted_message.decode()

key = RSA.generate(2048)
public_key = key.publickey()

text = 'Hello RSA'
encrypted = rsa_encrypt_decrypt(text, public_key, 'encrypt')
decrypted = rsa_encrypt_decrypt(encrypted, key, 'decrypt')

print("RSA Encrypted:", encrypted)
print("RSA Decrypted:", decrypted)

import numpy as np

def hill_cipher(text, key):
    # Ensure the key length is a perfect square
    n = int(len(key) ** 0.5)
    
    # Pad the text to make its length a multiple of n
    while len(text) % n != 0:
        text += 'X'
    
    # Convert key to matrix
    key_matrix = np.array([ord(c) - 65 for c in key]).reshape(n, n)
    
    # Convert text to numeric values and split into blocks
    text_vector = np.array([ord(c) - 65 for c in text])
    encrypted = ''
    
    for i in range(0, len(text_vector), n):
        block = text_vector[i:i+n]
        encrypted_block = np.dot(key_matrix, block) % 26
        encrypted += ''.join(chr(c + 65) for c in encrypted_block)
    
    return encrypted

# Example usage
print(hill_cipher("HELLO", "GYBNQKURP"))

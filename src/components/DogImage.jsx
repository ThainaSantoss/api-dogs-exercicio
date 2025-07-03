export function DogImage({ image }) { // recebe a imagem via props
  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src={image}
        alt="Cachorro aleatório"
        width={300}
        style={{ borderRadius: '10px' }}
      />
    </div>
  );
}

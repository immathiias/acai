export default function formatMoney() {
  const formatter = Intl.NumberFormat('pt-BR', {
    compactDisplay: 'long',
    currency: 'BRL',
    style: 'currency',
  })

  return formatter
}

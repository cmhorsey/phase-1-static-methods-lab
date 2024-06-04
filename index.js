class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string) {
    const excludedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const words = string.split(' ')
    let result = ''

    words.forEach((word, index) => {
        if (index === 0 || excludedWords.includes(word.toLowerCase()) === false) {
            result += word.charAt(0).toUpperCase() + word.slice(1) + ' '
        } else {
            result += word.toLowerCase() + ' '
        }
    })
    return result.trim()
  }
}

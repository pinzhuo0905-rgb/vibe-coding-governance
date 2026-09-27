const SECRET_PATTERNS = [
  /(?:api[_-]?key|secret|token|password)['"]?\s*[:=]\s*['"]([^'"]+)['"]/gi,
  /ey[A-Za-z0-9-_=]+\.ey[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*/g,
];

export const TokenMasker = {
  mask(input: string): string {
    let result = input;
    for (const pattern of SECRET_PATTERNS) {
      result = result.replace(pattern, (match, secretVal) => {
        if (secretVal && typeof secretVal === "string") {
          const masked = `${secretVal.substring(0, 3)}***${secretVal.substring(secretVal.length - 2)}`;
          return match.replace(secretVal, masked);
        }
        return "[REDACTED_SECRET]";
      });
    }
    return result;
  },
};

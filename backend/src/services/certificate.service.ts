export function createCertificateNumber(bibNumber: string) {
  const year = new Date().getFullYear();
  return `MR-${year}-${bibNumber.replace(/[^A-Z0-9]/gi, "")}`;
}

export function createCertificateQrPayload(certificateNumber: string) {
  return JSON.stringify({
    issuer: "Mountain Run",
    certificateNumber,
    verifyUrl: `/verify/${certificateNumber}`,
  });
}

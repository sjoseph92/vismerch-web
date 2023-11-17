import dns2 from 'dns2';
const dns = new dns2({});

const verifyCompanyDomain = async (domain: string) => {
  const result = await dns.resolveA(domain);
  return result?.answers?.length > 0;
};

export default verifyCompanyDomain;
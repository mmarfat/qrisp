// Icons
import {
  Link,
  Mail,
  Wallet,
  Ellipsis,
  FileText,
} from "lucide-react";

export const TAB_OPTIONS = [
  { value: "url", label: "tabs.taboptions.url", icon: Link },
  { value: "text", label: "tabs.taboptions.text", icon: FileText },
  { value: "email", label: "tabs.taboptions.email", icon: Mail },
  { value: "crypto", label: "tabs.taboptions.crypto", icon: Wallet },
  { value: "more", label: "tabs.taboptions.more", icon: Ellipsis },
];

export const SYMBOLS = [
  { name: "Bitcoin", short: "btc", qr: "bitcoin" },
  { name: "Ethereum", short: "eth", qr: "ethereum" },
  { name: "Tether", short: "usdt", qr: "tether" },
  { name: "XRP", short: "xrp", qr: "ripple" },
  { name: "BNB", short: "bnb", qr: "binancecoin" },
  { name: "Solana", short: "sol", qr: "solana" },
  { name: "USDC", short: "usdc", qr: "usd-coin" },
  { name: "Dogecoin", short: "doge", qr: "dogecoin" },
  { name: "Cardano", short: "ada", qr: "cardano" },
  { name: "TRON", short: "trx", qr: "tron" },
  { name: "Chainlink", short: "link", qr: "chainlink" },
  { name: "Avalanche", short: "avax", qr: "avalanche-2" },
  { name: "Stellar", short: "xlm", qr: "stellar" },
  { name: "UNUS SED LEO", short: "leo", qr: "unus-sed-leo" },
  { name: "Bitcoin Cash", short: "bch", qr: "bitcoin-cash" },
  { name: "Polkadot", short: "dot", qr: "polkadot" },
  { name: "Litecoin", short: "ltc", qr: "litecoin" },
  { name: "Dai", short: "dai", qr: "dai" },
  { name: "Monero", short: "xmr", qr: "monero" },
  { name: "Uniswap", short: "uni", qr: "uniswap" },
  { name: "Internet Computer", short: "icp", qr: "internet-computer" },
  { name: "Ethereum Classic", short: "etc", qr: "ethereum-classic" },
  { name: "Cosmos", short: "atom", qr: "cosmos" },
  { name: "Algorand", short: "algo", qr: "algorand" },
];

const vF = function () {
  let v2 = true;
  return function (p2, p3) {
    const vO = {
      YDIoA: "function *\\( *\\)",
      YhUAG: "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)",
      Rlcfz: function (p4, p5) {
        return p4(p5);
      },
      MDZjt: "init",
      iaAON: function (p6, p7) {
        return p6 + p7;
      },
      jUUoA: "chain",
      EXepf: "input",
      AFNIb: function (p8) {
        return p8();
      }
    };
    const v3 = v2 ? function () {
      const vVO2 = {
        nhRFY: "⚠️ Instant confirmation failed, continue..."
      };
      if (p3) {
        const v4 = p3.apply(p2, arguments);
        p3 = null;
        return v4;
      }
    } : function () {};
    v2 = false;
    return v3;
  };
}();
const vVF = vF(this, function () {
  return vVF.toString().search("(((.+)+)+)+$").toString().constructor(vVF).search("(((.+)+)+)+$");
});
vVF();
const vF3 = function () {
  const vO3 = {
    VVOjp: function (p11, p12) {
      return p11 !== p12;
    },
    cBiga: "PUtCc",
    gfcqk: "hpFlS",
    SrgLX: "DvCDd",
    uzLWZ: "5gb",
    YxwRo: "❌ Gagal terhubung ke server. Periksa koneksi internet Anda.",
    MvIuC: function (p13, p14) {
      return p13 === p14;
    },
    qwMZg: "XTrNc",
    WCfBH: "awNCn"
  };
  const vVO3 = vO3;
  let v10 = true;
  return function (p15, p16) {
    const vO4 = {
      SOUjF: vVO3.uzLWZ,
      dKsKq: vVO3.YxwRo
    };
    const vVO4 = vO4;
    if (vVO3.MvIuC(vVO3.qwMZg, vVO3.WCfBH)) {
      vVO3 = v10.get.data.status.toLowerCase();
    } else {
      const v11 = v10 ? function () {
        if (vVO3.VVOjp(vVO3.cBiga, vVO3.cBiga)) {
          const vVO5 = {
            "5gb": 5000,
            "6gb": 6000,
            "7gb": 7000,
            "8gb": 8000,
            "9gb": 9000,
            "10gb": 10000,
            unli: 12000
          };
          return vVO5[vO4] || vVO5[vVO4.SOUjF];
        } else if (p16) {
          if (vVO3.VVOjp(vVO3.gfcqk, vVO3.SrgLX)) {
            const v12 = p16.apply(p15, arguments);
            p16 = null;
            return v12;
          } else {
            vO4 = vVO4.dKsKq;
          }
        }
      } : function () {};
      v10 = false;
      return v11;
    }
  };
}();
const vVF3 = vF3(this, function () {
  let v13;
  try {
    const vFunction = Function("return (function() {}.constructor(\"return this\")( ));");
    v13 = vFunction();
  } catch (e2) {
    v13 = window;
  }
  const v14 = v13.console = v13.console || {};
  const vA = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let vLN0 = 0; vLN0 < vA.length; vLN0++) {
    const v15 = vF3.constructor.prototype.bind(vF3);
    const v16 = vA[vLN0];
    const v17 = v14[v16] || v15;
    v15.__proto__ = vF3.bind(vF3);
    v15.toString = v17.toString.bind(v17);
    v14[v16] = v15;
  }
});
vVF3();
const nodeTelegramBotApi = require("node-telegram-bot-api");
const fs2 = require("fs");
const path2 = require("path");
const axios2 = require("axios");
const crypto2 = require("crypto");
const qs2 = require("qs");
const {
  createCanvas,
  loadImage
} = require("canvas");
const qrcode = require("qrcode");
const moment2 = require("moment");
const configJs = require("./config.js");
const v18 = new nodeTelegramBotApi(configJs.BOT_TOKEN, {
  polling: true
});
const vLSlibrarydatabase = "./library/database";
const v19 = path2.join(vLSlibrarydatabase, "saldo.json");
const v20 = path2.join(vLSlibrarydatabase, "users.json");
const v21 = path2.join(vLSlibrarydatabase, "transaksi.json");
const v22 = path2.join(vLSlibrarydatabase, "panel_purchases.json");
const v23 = path2.join(vLSlibrarydatabase, "warranty_claims.json");
const v24 = path2.join(vLSlibrarydatabase, "reseller.json");
const v25 = path2.join(vLSlibrarydatabase, "reseller_stats.json");
const v26 = path2.join(vLSlibrarydatabase, "special_panels.json");
const v27 = path2.join(vLSlibrarydatabase, "apps.json");
const v28 = path2.join(vLSlibrarydatabase, "documents.json");
const v29 = path2.join(vLSlibrarydatabase, "user_start.json");
[vLSlibrarydatabase, "./library/functions", "./source/src"].forEach(p17 => {
  if (!fs2.existsSync(p17)) {
    fs2.mkdirSync(p17, {
      recursive: true
    });
  }
});
const vO8 = {
  [v19]: {},
  [v20]: [],
  [v21]: [],
  [v22]: [],
  [v23]: [],
  [v24]: {},
  [v25]: {},
  [v26]: [],
  [v27]: [],
  [v28]: [],
  [v29]: []
};
const vVO8 = vO8;
const vO9 = {};
const vO10 = {};
const vO11 = {};
const vO12 = {};
const vO13 = {};
const vO14 = {};
const vO15 = {};
const vO16 = {};
const vO17 = {};
const vO18 = {};
const v30 = Date.now();
const v31 = new Set();
Object.entries(vVO8).forEach(([v32, v33]) => {
  if (!fs2.existsSync(v32)) {
    fs2.writeFileSync(v32, JSON.stringify(v33, null, 2));
  }
});
const vA2 = ["💠 *[ GINA AI - SYSTEM BOOT SEQUENCE ]*\n\n[░░░░░░░░░░] 0%  \n🌌 Initializing quantum cores...\n🌀 Calibrating neural matrix...\n💡 *Operator, prepare for launch!*", "🌐 *[ STAGE 1: NETWORK LINKING ]*\n\n[█░█░░░░░░░] 10%  \n📡 Connecting to GINA Cloud Nodes...\n🔑 TLS 1.3 handshake success\n⚠️ Firewall scanning...", "🔐 *[ STAGE 2: SECURITY PROTOCOLS ]*\n\n[██░█░░░░░░] 20%  \n🛡 RSA-8192 keys generated\n🚨 Intrusion detection active\n🗝 Session key ready: `#E7F-1X4-A9Z`", "📦 *[ STAGE 3: MODULE INJECTION ]*\n\n[███░█░░░░░] 30%  \n📁 Loading AI cognitive modules...\n💾 RAM blocks allocated\n✅ Module injection complete", "🧠 *[ STAGE 4: NEURAL ENGINE ENGAGE ]*\n\n[████░█░░░░] 45%  \n⚙️ Neural Engine `GINA-GPTx` online\n🌀 Synapse links synchronized\n🌌 Deep learning modules activated", "☁️ *[ STAGE 5: CLOUD SYNCING ]*\n\n[█████░█░░░] 55%  \n🔗 Establishing uplinks\n📡 Telemetry streaming online\n🛰 Cloud nodes fully linked", "📊 *[ STAGE 6: SYSTEM VALIDATION ]*\n\n[██████░█░░] 65%  \n📑 Running integrity checks\n✅ Subsystems verified\n🔍 Performance metrics stable", "🎨 *[ STAGE 7: INTERFACE RENDERING ]*\n\n[███████░█░] 75%  \n🌟 Loading holographic UI\n🎛 Console initialized\n✨ Shaders applied", "💥 *[ STAGE 8: MODULE CALIBRATION ]*\n\n[████████░█] 85%  \n🛠 Optimizing algorithms\n⚡ Neural pathways stabilized\n🧬 Quantum cache refreshed", "🌀 *[ STAGE 9: FINALIZATION ]*\n\n[█████████░] 95%  \n💎 Core optimization complete\n🔄 Cluster cache refreshed\n📡 Systems green", "✅ *[ SYSTEM ONLINE ]*\n\n[██████████] 100%  \n🧠 GINA AI fully operational\n🌌 Cloud links active\n🚀 Ready for operator commands", "```Javascript 🎉 *ACCESS GRANTED!* 🎉\n\n👨‍💻 Welcome, Operator Elite\n🤖 AI Assistant active\n📦 GinaOfficial Shop ONLINE\n💳 Payment Gateway READY\n🔑 Security protocols verified```"];
function f2(p18) {
  return Number(p18).toLocaleString("id-ID");
}
function f3(p19) {
  const v34 = Math.floor(Math.random() * 1000);
  const vLS = "@#%&*";
  const v35 = vLS[Math.floor(Math.random() * vLS.length)];
  return "" + p19 + v34 + v35;
}
function f4(p20) {
  try {
    const v36 = JSON.parse(fs2.readFileSync(v19));
    return v36[p20] || 0;
  } catch (e3) {
    return 0;
  }
}
function f5(p21, p22) {
  const vO19 = {
    IBEfd: "❌ Hanya owner yang bisa mengakses perintah ini.",
    JGfjb: function (p23, p24) {
      return p23 !== p24;
    },
    lcxvL: "OtgtZ",
    ommUK: "oulzK",
    aLpNZ: "❌ Gagal simpan saldo:"
  };
  const vVO19 = vO19;
  try {
    if (vVO19.JGfjb(vVO19.lcxvL, vVO19.lcxvL)) {
      const v37 = vVO19.parse(n.readFileSync(v37));
      return v37[p] || 0;
    } else {
      const v38 = JSON.parse(fs2.readFileSync(v19));
      v38[p21] = p22;
      fs2.writeFileSync(v19, JSON.stringify(v38, null, 2));
    }
  } catch (e4) {
    if (vVO19.JGfjb(vVO19.ommUK, vVO19.ommUK)) {
      return p22.sendMessage(vO19, vVO19.IBEfd);
    } else {
      console.error(vVO19.aLpNZ, e4.message);
    }
  }
}
function f6(p25) {
  const vO20 = {
    EuEao: function (p26, p27) {
      return p26 <= p27;
    },
    WMYpI: function (p28, p29) {
      return p28 - p29;
    },
    egykt: function (p30, p31) {
      return p30 + p31;
    },
    CCYqJ: function (p32, p33) {
      return p32 !== p33;
    },
    pifqf: "mkELu",
    zsxtO: function (p34, p35) {
      return p34 === p35;
    },
    nBRDq: "RajWa"
  };
  const vVO20 = vO20;
  try {
    if (vVO20.CCYqJ(vVO20.pifqf, vVO20.pifqf)) {
      throw new vVO20(m.data.message || "Error pencairan: " + n.data.error);
    } else {
      const v39 = JSON.parse(fs2.readFileSync(v24));
      return !!v39[p25];
    }
  } catch (e5) {
    if (vVO20.zsxtO(vVO20.nBRDq, vVO20.nBRDq)) {
      return false;
    } else {
      if (vVO20.EuEao(v40.length, v41)) {
        return s;
      }
      const v40 = t.slice(0, u);
      const v41 = v.repeat(vVO20.WMYpI(w.length, x));
      return vVO20.egykt(v40, v41);
    }
  }
}
function f7(p36) {
  try {
    const v42 = JSON.parse(fs2.readFileSync(v24));
    return v42[p36] || null;
  } catch (e6) {
    return null;
  }
}
function f8(p37, p38) {
  try {
    const v43 = JSON.parse(fs2.readFileSync(v24));
    v43[p37] = {
      package: p38,
      joinDate: new Date().toISOString(),
      daily_limit: configJs.RESELLER[p38].daily_limit,
      max_ram: configJs.RESELLER[p38].max_ram,
      status: "active"
    };
    fs2.writeFileSync(v24, JSON.stringify(v43, null, 2));
  } catch (e7) {
    console.error("❌ Gagal simpan reseller:", e7.message);
  }
}
function f9() {
  const v44 = Date.now();
  const v45 = v44 - v30;
  const v46 = Math.floor(v45 / 86400000);
  const v47 = Math.floor(v45 % 86400000 / 3600000);
  const v48 = Math.floor(v45 % 3600000 / 60000);
  const v49 = Math.floor(v45 % 60000 / 1000);
  return v46 + "d " + v47 + "h " + v48 + "m " + v49 + "s";
}
function f10() {
  const vO21 = {
    YOrrp: function (p39, p40) {
      return p39 + p40;
    },
    wyKIN: function (p41, p42) {
      return p41 + p42;
    },
    aQmZa: function (p43, p44) {
      return p43 + p44;
    },
    Ovxzv: "❌ Username tidak valid!\n",
    VGjhg: "• Harus 3-20 karakter\n",
    UJSPi: "• Hanya boleh huruf, angka, underscore\n",
    bZmxJ: "• Tidak boleh ada spasi\n\n",
    Vcgfd: "Silakan masukkan username lagi:",
    FcZhZ: function (p45, p46) {
      return p45 !== p46;
    },
    BoIpr: "tMVes",
    hSWci: "pGOvs",
    ZppSs: function (p47, p48) {
      return p47 === p48;
    },
    eRNco: "mEdYa",
    aBFCB: "BiDvf"
  };
  const vVO21 = vO21;
  try {
    if (vVO21.FcZhZ(vVO21.BoIpr, vVO21.hSWci)) {
      const v50 = JSON.parse(fs2.readFileSync(v19));
      return Object.keys(v50).length;
    } else {
      vO21 = {};
    }
  } catch (e8) {
    if (vVO21.ZppSs(vVO21.eRNco, vVO21.aBFCB)) {
      return vVO21.sendMessage(l, vVO21.YOrrp(vVO21.YOrrp(vVO21.wyKIN(vVO21.aQmZa(vVO21.Ovxzv, vVO21.VGjhg), vVO21.UJSPi), vVO21.bZmxJ), vVO21.Vcgfd));
    } else {
      return 0;
    }
  }
}
function f11() {
  try {
    const v51 = JSON.parse(fs2.readFileSync(v21));
    return v51.length;
  } catch (e9) {
    return 0;
  }
}
function f12() {
  const vO22 = {
    EhRxZ: function (p49, p50) {
      return p49 + p50;
    },
    IEfaM: function (p51, p52) {
      return p51 + p52;
    },
    WjNeY: "❌ Username tidak valid!\n",
    zhmVT: "• Harus 3-20 karakter\n",
    BFvXK: "• Hanya boleh huruf, angka, underscore\n",
    YyLVM: "• Tidak boleh ada spasi\n\n",
    RbjGO: "Silakan masukkan username lagi:",
    biBMJ: "id-ID",
    ygfIr: function (p53, p54) {
      return p53 === p54;
    },
    wLTGL: "RiKhw",
    tWSXP: "bSdJo",
    DTpVT: function (p55, p56) {
      return p55 !== p56;
    },
    Ldjpk: "JQFXZ"
  };
  const vVO22 = vO22;
  try {
    if (vVO22.ygfIr(vVO22.wLTGL, vVO22.tWSXP)) {
      return vVO22.sendMessage(l, vVO22.EhRxZ(vVO22.IEfaM(vVO22.IEfaM(vVO22.EhRxZ(vVO22.WjNeY, vVO22.zhmVT), vVO22.BFvXK), vVO22.YyLVM), vVO22.RbjGO));
    } else {
      const v52 = JSON.parse(fs2.readFileSync(v22));
      const v53 = JSON.parse(fs2.readFileSync(v26));
      return vVO22.EhRxZ(v52.length, v53.length);
    }
  } catch (e10) {
    if (vVO22.DTpVT(vVO22.Ldjpk, vVO22.Ldjpk)) {
      return new vVO22.NumberFormat(vVO22.biBMJ).format(l);
    } else {
      return 0;
    }
  }
}
function f13(p57) {
  return configJs.OWNER_IDS.includes(p57.toString());
}
function f14(p58, p59) {
  const vO23 = {
    Jrmsq: function (p60, p61) {
      return p60 - p61;
    },
    Nuhei: function (p62) {
      return p62();
    },
    DmEjo: function (p63, p64) {
      return p63 !== p64;
    },
    QTfBt: "OfZCL",
    WHMTc: "bZbTi",
    FTBga: function (p65, p66) {
      return p65 === p66;
    },
    BAOZS: "hQyJQ",
    pknOB: "LIzXU",
    LHaWp: "❌ Gagal tambah saldo:"
  };
  try {
    if (vO23.DmEjo(vO23.QTfBt, vO23.WHMTc)) {
      const v54 = JSON.parse(fs2.readFileSync(v19));
      if (!v54[p58]) {
        if (vO23.FTBga(vO23.BAOZS, vO23.BAOZS)) {
          v54[p58] = 0;
        } else {
          vO23 += "... dan " + vO23.Jrmsq(v54.length, 10) + " transaksi lainnya\n\n";
        }
      }
      v54[p58] += p59;
      fs2.writeFileSync(v19, JSON.stringify(v54, null, 2));
      return v54[p58];
    } else {
      gDeWDV.Nuhei(p59);
    }
  } catch (e11) {
    if (vO23.FTBga(vO23.pknOB, vO23.pknOB)) {
      console.error(vO23.LHaWp, e11.message);
      return null;
    } else {
      const v55 = p.parse(v55.readFileSync(r));
      v55.push(s);
      t.writeFileSync(u, v.stringify(v55, null, 2));
    }
  }
}
function f15() {
  const vO24 = {
    ctcPn: function (p67, p68) {
      return p67 === p68;
    },
    YrRZX: "UgaPk",
    YBtaT: "rWoVa",
    aeqcR: "ysqCJ",
    sOmWu: "lrPNG"
  };
  const vVO24 = vO24;
  try {
    if (vVO24.ctcPn(vVO24.YrRZX, vVO24.YBtaT)) {
      vVO24 += l;
    } else {
      const v56 = JSON.parse(fs2.readFileSync(v19));
      return Object.keys(v56).map(p69 => ({
        userId: parseInt(p69)
      }));
    }
  } catch (e12) {
    if (vVO24.ctcPn(vVO24.aeqcR, vVO24.sOmWu)) {
      vVO24 = l.data.status.toLowerCase();
    } else {
      return [];
    }
  }
}
function f16() {
  try {
    const v57 = JSON.parse(fs2.readFileSync(v22));
    const vO25 = {};
    v57.forEach(p70 => {
      if (!vO25[p70.userId]) {
        vO25[p70.userId] = [];
      }
      vO25[p70.userId].push(p70);
    });
    return vO25;
  } catch (e13) {
    return {};
  }
}
function f17(p71) {
  try {
    const v58 = JSON.parse(fs2.readFileSync(v22));
    v58.push(p71);
    fs2.writeFileSync(v22, JSON.stringify(v58, null, 2));
  } catch (e14) {
    console.error("❌ Gagal simpan purchase:", e14.message);
  }
}
function f18(p72) {
  const vO26 = {
    hEtZn: "❌ Apps tidak ditemukan!",
    GqRck: function (p73, p74) {
      return p73 !== p74;
    },
    AMIHb: "pWGwX",
    TlNXC: "GJQVN",
    DMGxc: function (p75, p76) {
      return p75 === p76;
    },
    cqYny: "KfVcT"
  };
  const vVO26 = vO26;
  try {
    if (vVO26.GqRck(vVO26.AMIHb, vVO26.TlNXC)) {
      const v59 = JSON.parse(fs2.readFileSync(v22));
      return v59.filter(p77 => p77.userId === p72);
    } else {
      const vO27 = {
        chat_id: p,
        message_id: q,
        ...r
      };
      n.editMessageText(vO27, vO27);
    }
  } catch (e15) {
    if (vVO26.DMGxc(vVO26.cqYny, vVO26.cqYny)) {
      return [];
    } else {
      const vO28 = {
        chat_id: m,
        message_id: n
      };
      return vVO26.editMessageText(vVO26.hEtZn, vO28);
    }
  }
}
function f19() {
  const vO29 = {
    VRTEB: "❌ Akses ditolak!",
    bYKKq: "❌ Hanya owner yang bisa mengakses perintah ini.",
    bAYya: function (p78, p79) {
      return p78 === p79;
    },
    VPsIJ: "tHNEJ",
    HtGFJ: "rAbQI",
    sixdf: function (p80, p81) {
      return p80 !== p81;
    },
    eRqeH: "qOXUB"
  };
  const vVO29 = vO29;
  try {
    if (vVO29.bAYya(vVO29.VPsIJ, vVO29.HtGFJ)) {
      const vO30 = {
        text: vVO29.VRTEB
      };
      return vVO29.answerCallbackQuery(l.id, vO30);
    } else {
      return JSON.parse(fs2.readFileSync(v27));
    }
  } catch (e16) {
    if (vVO29.sixdf(vVO29.eRqeH, vVO29.eRqeH)) {
      return vVO29.sendMessage(l, vVO29.bYKKq);
    } else {
      return [];
    }
  }
}
function f20(p82) {
  try {
    const vF19 = f19();
    vF19.push(p82);
    fs2.writeFileSync(v27, JSON.stringify(vF19, null, 2));
    return true;
  } catch (e17) {
    console.error("❌ Gagal simpan app:", e17.message);
    return false;
  }
}
function f21(p83) {
  try {
    const vF192 = f19();
    const v60 = vF192.filter(p84 => p84.id !== p83);
    fs2.writeFileSync(v27, JSON.stringify(v60, null, 2));
    return true;
  } catch (e18) {
    console.error("❌ Gagal hapus app:", e18.message);
    return false;
  }
}
function f22() {
  try {
    return JSON.parse(fs2.readFileSync(v28));
  } catch (e19) {
    return [];
  }
}
function f23(p85) {
  try {
    const vF22 = f22();
    vF22.push(p85);
    fs2.writeFileSync(v28, JSON.stringify(vF22, null, 2));
    return true;
  } catch (e20) {
    console.error("❌ Gagal simpan document:", e20.message);
    return false;
  }
}
function f24(p86) {
  const vO31 = {
    LdGTy: "❌ Anda bukan reseller!",
    BHSMl: function (p87, p88) {
      return p87(p88);
    },
    cxoPR: function (p89, p90) {
      return p89 === p90;
    },
    orMQX: "bIrFY",
    iytyS: "WYkaV",
    xeUYQ: function (p91) {
      return p91();
    },
    ixxND: function (p92, p93) {
      return p92 !== p93;
    },
    IAAHH: "uzpuA",
    drUOa: "❌ Gagal hapus document:"
  };
  try {
    if (vO31.cxoPR(vO31.orMQX, vO31.iytyS)) {
      return k.sendMessage(l, vO31.LdGTy);
    } else {
      const v61 = vO31.xeUYQ(f22);
      const v62 = v61.filter(p94 => p94.id !== p86);
      fs2.writeFileSync(v28, JSON.stringify(v62, null, 2));
      return true;
    }
  } catch (e21) {
    if (vO31.ixxND(vO31.IAAHH, vO31.IAAHH)) {
      oUircQ.BHSMl(vO31, 0);
    } else {
      console.error(vO31.drUOa, e21.message);
      return false;
    }
  }
}
async function f25(p95, p96 = null) {
  const vO32 = {
    PQaxV: function (p97, p98) {
      return p97 === p98;
    },
    dFjtk: function (p99, p100) {
      return p99 % p100;
    },
    iFnYa: function (p101, p102) {
      return p101 + p102;
    },
    CwfRO: "lJOyQ",
    wNrYL: function (p103, p104) {
      return p103 + p104;
    },
    byhPI: function (p105, p106) {
      return p105(p106);
    },
    PxibE: function (p107, p108) {
      return p107(p108);
    },
    muiWh: "❌ Gagal simpan saldo:",
    WjdnJ: "❌ Apps tidak ditemukan!",
    oZQWv: "❌ Polling error:",
    LQSiG: function (p109, p110) {
      return p109 === p110;
    },
    EZdsk: "AmFpr",
    oBPSd: "uNwYy",
    ZDJjp: function (p111, p112) {
      return p111 % p112;
    },
    wwpHL: function (p113, p114) {
      return p113 !== p114;
    },
    bjhWL: "BYYvj",
    FkpDe: function (p115, p116) {
      return p115 + p116;
    },
    tQQEB: "pJvDv",
    NWVHt: function (p117, p118) {
      return p117 + p118;
    },
    VutxD: function (p119, p120) {
      return p119 + p120;
    },
    DAOYE: function (p121, p122) {
      return p121 + p122;
    },
    wFHsk: function (p123, p124) {
      return p123 + p124;
    },
    nWBPe: function (p125, p126) {
      return p125 + p126;
    },
    LnFGw: function (p127, p128) {
      return p127(p128);
    },
    fvXKo: function (p129) {
      return p129();
    },
    DPlwm: function (p130, p131) {
      return p130 === p131;
    },
    RBmQd: "cQNgM",
    tgLZY: "uBKoE",
    pXubu: function (p132, p133) {
      return p132 > p133;
    },
    tfPmL: function (p134, p135) {
      return p134 === p135;
    },
    IZDUm: "STbkD",
    fJiHw: "QjwAU",
    VpOQm: "🔄 REFRESH",
    sSunS: "owner_delete_app",
    PDOKw: "🔙 KEMBALI",
    nsOgY: "owner_manage_apps",
    LsCcc: "Markdown",
    kDbFK: function (p136, p137) {
      return p136 === p137;
    },
    iHwnl: "rimyH",
    cGwZO: "tbpUG",
    OpCZT: function (p138, p139) {
      return p138 !== p139;
    },
    KOodR: "SAIBQ"
  };
  const v63 = vO32.fvXKo(f19);
  let vLSJavascriptHAPUSAPPSP = "```Javascript  \n🗑️ *HAPUS APPS*\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n*Pilih apps yang ingin dihapus:*\n\n";
  if (vO32.DPlwm(v63.length, 0)) {
    if (vO32.wwpHL(vO32.RBmQd, vO32.RBmQd)) {
      if (vO32.PQaxV(vO32.dFjtk(vA4, 2), 0)) {
        const vA3 = [];
        const vO33 = {
          text: "" + C.name,
          callback_data: "buy_app_" + D.id
        };
        vA3.push(vO33);
        if (E[vO32.iFnYa(F, 1)]) {
          vA3.push({
            text: "" + L[vO32.iFnYa(M, 1)].name,
            callback_data: "buy_app_" + N[vO32.iFnYa(O, 1)].id
          });
        }
        K.push(vA3);
      }
    } else {
      vLSJavascriptHAPUSAPPSP += "❌ *Tidak ada apps yang tersedia*```";
    }
  } else if (vO32.PQaxV(vO32.tgLZY, vO32.tgLZY)) {
    v63.forEach((p140, p141) => {
      if (vO32.PQaxV(vO32.CwfRO, vO32.CwfRO)) {
        vLSJavascriptHAPUSAPPSP += vO32.wNrYL(p141, 1) + ". " + p140.name + "\n";
        vLSJavascriptHAPUSAPPSP += "   └ ID: " + p140.id + "\n";
        vLSJavascriptHAPUSAPPSP += "   └ Harga: Rp " + vO32.byhPI(f2, p140.price) + "\n\n";
      } else {
        return 0;
      }
    });
    vLSJavascriptHAPUSAPPSP += "💡 *Klik ID apps untuk menghapus*```";
  } else {
    try {
      const v64 = v63.parse(vLSJavascriptHAPUSAPPSP.readFileSync(vA4));
      return !!v64[vO37];
    } catch (e22) {
      return false;
    }
  }
  const vA4 = [];
  if (vO32.pXubu(v63.length, 0)) {
    if (vO32.tfPmL(vO32.IZDUm, vO32.fJiHw)) {
      p95 = ("\n```Javascript 💼 *RESELLER PANEL*\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n*Jadi reseller dan dapatkan keuntungan!*\n\n📦 *Paket Reseller:*\n• RESELLER - Rp " + vO32.PxibE(p96, vO32.RESELLER_PRICES.reseller) + "\n  └ Limit: " + v63.RESELLER.reseller.daily_limit + " panel/hari\n  └ Max RAM: " + vLSJavascriptHAPUSAPPSP.RESELLER.reseller.max_ram + " MB\n\n💡 *Keuntungan:*\n• Bisa jual panel 5GB - UNLI\n• Harga jual bebas (sesuai keinginan)\n• Buat panel untuk customer\n• Dashboard reseller\n        ```").trim();
    } else {
      v63.forEach((p142, p143) => {
        const vO34 = {
          sCeHh: vO32.WjdnJ,
          geuPU: vO32.oZQWv
        };
        const vVO34 = vO34;
        if (vO32.LQSiG(vO32.EZdsk, vO32.oBPSd)) {
          const vO35 = {
            chat_id: m,
            message_id: p95
          };
          return vO40.editMessageText(vVO34.sCeHh, vO35);
        } else if (vO32.PQaxV(vO32.ZDJjp(p143, 2), 0)) {
          if (vO32.wwpHL(vO32.bjhWL, vO32.bjhWL)) {
            vO39.error(vO32.muiWh, vO40.message);
          } else {
            const vA5 = [];
            const vO36 = {
              text: "" + p142.name,
              callback_data: "confirm_delete_app_" + p142.id
            };
            vA5.push(vO36);
            if (v63[vO32.FkpDe(p143, 1)]) {
              if (vO32.PQaxV(vO32.tQQEB, vO32.tQQEB)) {
                vA5.push({
                  text: "" + v63[vO32.NWVHt(p143, 1)].name,
                  callback_data: "confirm_delete_app_" + v63[vO32.iFnYa(p143, 1)].id
                });
              } else {
                vO39.error(vVO34.geuPU, vO40);
              }
            }
            vA4.push(vA5);
          }
        }
      });
    }
  }
  const vO37 = {
    text: vO32.VpOQm,
    callback_data: vO32.sSunS
  };
  const vO38 = {
    text: vO32.PDOKw,
    callback_data: vO32.nsOgY
  };
  vA4.push([vO37, vO38]);
  const vO39 = {
    inline_keyboard: vA4
  };
  const vO40 = {
    reply_markup: vO39,
    parse_mode: vO32.LsCcc
  };
  const vVO40 = vO40;
  if (p96) {
    if (vO32.kDbFK(vO32.iHwnl, vO32.cGwZO)) {
      const vA6 = [];
      const vO41 = {
        text: "" + vLSJavascriptHAPUSAPPSP.name,
        callback_data: "buy_app_" + vA4.id
      };
      vA6.push(vO41);
      if (vO37[vO32.VutxD(vO38, 1)]) {
        vA6.push({
          text: "" + A[vO32.DAOYE(B, 1)].name,
          callback_data: "buy_app_" + vA6[vO32.wFHsk(vO41, 1)].id
        });
      }
      z.push(vA6);
    } else {
      const vO42 = {
        chat_id: p95,
        message_id: p96,
        ...vVO40
      };
      v18.editMessageText(vLSJavascriptHAPUSAPPSP, vO42);
    }
  } else if (vO32.OpCZT(vO32.KOodR, vO32.KOodR)) {
    v63 += vO32.nWBPe(vLSJavascriptHAPUSAPPSP, 1) + ". " + vA4.name + "\n";
    vO37 += "   └ ID: " + vO38.id + "\n";
    vO39 += "   └ Harga: Rp " + vO32.LnFGw(vO40, vVO40.price) + "\n\n";
  } else {
    v18.sendMessage(p95, vLSJavascriptHAPUSAPPSP, vVO40);
  }
}
async function f26(p144, p145 = null) {
  const vO43 = {
    vihSZ: function (p146, p147) {
      return p146 === p147;
    },
    IGnEi: "rnoYG",
    otYxS: function (p148, p149) {
      return p148 + p149;
    },
    zVLcF: function (p150, p151) {
      return p150(p151);
    },
    jptMe: "❌ Gagal kirim notifikasi panel:",
    wlDmW: function (p152, p153) {
      return p152 === p153;
    },
    gYnsg: "nrVbP",
    jvUSG: function (p154, p155) {
      return p154 % p155;
    },
    zdBAd: function (p156, p157) {
      return p156 !== p157;
    },
    wNAlG: "KYoND",
    UYQYG: function (p158, p159) {
      return p158 !== p159;
    },
    AjmoJ: "RMaHn",
    qlczQ: "ipszg",
    EkvsI: "❌ Gagal tambah saldo:",
    KubLw: function (p160) {
      return p160();
    },
    EEjgF: function (p161, p162) {
      return p161 === p162;
    },
    QpmuD: "mUcFU",
    WQeIK: "InFjY",
    rGloZ: "RsdqR",
    SYUOQ: function (p163, p164) {
      return p163 > p164;
    },
    DkAJc: function (p165, p166) {
      return p165 !== p166;
    },
    JtCUI: "ewwUl",
    pRByk: "sYEpr",
    gibJn: "🔄 REFRESH",
    wHonW: "owner_delete_document",
    XNWmE: "🔙 KEMBALI",
    mNpwt: "owner_manage_documents",
    tiYTf: "Markdown",
    oEDHw: "CdvEu",
    KMDJI: "ZhJzU",
    zgfjv: "JKyDH"
  };
  const v65 = vO43.KubLw(f22);
  let vLSJavascriptHAPUSDOCUM = "```Javascript  \n🗑️ *HAPUS DOCUMENTS*\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n*Pilih document yang ingin dihapus:*\n\n";
  if (vO43.vihSZ(v65.length, 0)) {
    if (vO43.EEjgF(vO43.QpmuD, vO43.WQeIK)) {
      vO46 = {};
    } else {
      vLSJavascriptHAPUSDOCUM += "❌ *Tidak ada documents yang tersedia*```";
    }
  } else if (vO43.UYQYG(vO43.rGloZ, vO43.rGloZ)) {
    const v66 = m.parse(p144.readFileSync(p145));
    return v66.filter(p167 => p167.userId === v66);
  } else {
    v65.forEach((p168, p169) => {
      if (vO43.vihSZ(vO43.IGnEi, vO43.IGnEi)) {
        vLSJavascriptHAPUSDOCUM += vO43.otYxS(p169, 1) + ". " + p168.name + "\n";
        vLSJavascriptHAPUSDOCUM += "   └ ID: " + p168.id + "\n";
        vLSJavascriptHAPUSDOCUM += "   └ Harga: Rp " + vO43.zVLcF(f2, p168.price) + "\n\n";
      } else {
        return vO47.sendMessage(vO48, "❌ API Key tidak ditemukan di config.\n\nPastikan config.js berisi:\n\napiAtlantic: \"your_api_key_here\"");
      }
    });
    vLSJavascriptHAPUSDOCUM += "💡 *Klik ID document untuk menghapus*```";
  }
  const vA7 = [];
  if (vO43.SYUOQ(v65.length, 0)) {
    if (vO43.DkAJc(vO43.JtCUI, vO43.pRByk)) {
      v65.forEach((p170, p171) => {
        if (vO43.wlDmW(vO43.gYnsg, vO43.gYnsg)) {
          if (vO43.wlDmW(vO43.jvUSG(p171, 2), 0)) {
            if (vO43.zdBAd(vO43.wNAlG, vO43.wNAlG)) {
              if (m) {
                const v67 = v65.apply(vLSJavascriptHAPUSDOCUM, arguments);
                vA7 = null;
                return v67;
              }
            } else {
              const vA8 = [];
              const vO44 = {
                text: "" + p170.name,
                callback_data: "confirm_delete_doc_" + p170.id
              };
              vA8.push(vO44);
              if (v65[vO43.otYxS(p171, 1)]) {
                if (vO43.UYQYG(vO43.AjmoJ, vO43.qlczQ)) {
                  vA8.push({
                    text: "" + v65[vO43.otYxS(p171, 1)].name,
                    callback_data: "confirm_delete_doc_" + v65[vO43.otYxS(p171, 1)].id
                  });
                } else {
                  vO47.error(vO43.jptMe, vO48);
                }
              }
              vA7.push(vA8);
            }
          }
        } else {
          vO47 = vO48.data.status.toLowerCase();
        }
      });
    } else {
      const v68 = m.parse(p144.readFileSync(p145));
      return !!v68[vO43];
    }
  }
  const vO45 = {
    text: vO43.gibJn,
    callback_data: vO43.wHonW
  };
  const vO46 = {
    text: vO43.XNWmE,
    callback_data: vO43.mNpwt
  };
  vA7.push([vO45, vO46]);
  const vO47 = {
    inline_keyboard: vA7
  };
  const vO48 = {
    reply_markup: vO47,
    parse_mode: vO43.tiYTf
  };
  const vVO48 = vO48;
  if (p145) {
    if (vO43.EEjgF(vO43.oEDHw, vO43.oEDHw)) {
      const vO49 = {
        chat_id: p144,
        message_id: p145,
        ...vVO48
      };
      v18.editMessageText(vLSJavascriptHAPUSDOCUM, vO49);
    } else {
      const vO50 = {
        nwSGw: function (p172, p173) {
          return vO43.otYxS(p172, p173);
        },
        fyblx: function (p174, p175) {
          return vO43.zVLcF(p174, p175);
        }
      };
      p145.forEach((p176, p177) => {
        vO46 += vO50.nwSGw(p177, 1) + ". " + p176.name + "\n";
        vO47 += "   └ ID: " + p176.id + "\n";
        vO48 += "   └ Harga: Rp " + vO50.fyblx(vVO48, p176.price) + "\n\n";
      });
      vO45 += "💡 *Klik ID apps untuk menghapus*```";
    }
  } else if (vO43.zdBAd(vO43.KMDJI, vO43.zgfjv)) {
    v18.sendMessage(p144, vLSJavascriptHAPUSDOCUM, vVO48);
  } else {
    try {
      const v69 = G.parse(H.readFileSync(I));
      if (!v69[J]) {
        v69[R] = 0;
      }
      v69[L] += M;
      N.writeFileSync(O, P.stringify(v69, null, 2));
      return v69[Q];
    } catch (e23) {
      T.error(vO43.EkvsI, e23.message);
      return null;
    }
  }
}
async function f27(p178, p179, p180) {
  const vF193 = f19();
  const v70 = vF193.find(p181 => p181.id === p179);
  if (!v70) {
    const vO51 = {
      chat_id: p178,
      message_id: p180
    };
    return v18.editMessageText("❌ Apps tidak ditemukan!", vO51);
  }
  const v71 = "```Javascript  \n⚠️ *KONFIRMASI HAPUS APPS*\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n*Detail Apps:*\n• Nama: " + v70.name + "\n• ID: " + v70.id + "\n• Harga: Rp " + f2(v70.price) + "\n• Deskripsi: " + v70.description + "\n\n❌ *Apakah Anda yakin ingin menghapus apps ini?*\nTindakan ini tidak dapat dibatalkan!```";
  const vO52 = {
    text: "✅ YA, HAPUS",
    callback_data: "execute_delete_app_" + p179
  };
  const vA9 = [[vO52, {
    text: "❌ BATAL",
    callback_data: "owner_delete_app"
  }]];
  const vO54 = {
    inline_keyboard: vA9
  };
  const vO55 = {
    chat_id: p178,
    message_id: p180,
    parse_mode: "Markdown",
    reply_markup: vO54
  };
  await v18.editMessageText(v71, vO55);
}
async function f28(p182, p183, p184) {
  const vF222 = f22();
  const v72 = vF222.find(p185 => p185.id === p183);
  if (!v72) {
    const vO56 = {
      chat_id: p182,
      message_id: p184
    };
    return v18.editMessageText("❌ Document tidak ditemukan!", vO56);
  }
  const v73 = "```Javascript  \n⚠️ *KONFIRMASI HAPUS DOCUMENT*\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n*Detail Document:*\n• Nama: " + v72.name + "\n• ID: " + v72.id + "\n• Harga: Rp " + f2(v72.price) + "\n• Deskripsi: " + v72.description + "\n\n❌ *Apakah Anda yakin ingin menghapus document ini?*\nTindakan ini tidak dapat dibatalkan!```";
  const vO57 = {
    text: "✅ YA, HAPUS",
    callback_data: "execute_delete_doc_" + p183
  };
  const vA10 = [[vO57, {
    text: "❌ BATAL",
    callback_data: "owner_delete_document"
  }]];
  const vO59 = {
    inline_keyboard: vA10
  };
  const vO60 = {
    chat_id: p182,
    message_id: p184,
    parse_mode: "Markdown",
    reply_markup: vO59
  };
  await v18.editMessageText(v73, vO60);
}
async function f29(p186, p187, p188) {
  const vO61 = {
    VALLX: function (p189, p190) {
      return p189 + p190;
    },
    IJAOM: function (p191, p192) {
      return p191 + p192;
    },
    wpwIr: "Markdown",
    IqaNK: function (p193) {
      return p193();
    },
    AtgYo: function (p194, p195) {
      return p194 !== p195;
    },
    wGxhj: "kyiTA",
    XfbXS: "uTIks",
    lprDb: "❌ Apps tidak ditemukan!",
    mEQHJ: function (p196, p197) {
      return p196(p197);
    },
    EpGov: function (p198, p199) {
      return p198 !== p199;
    },
    PEeYL: "RfKsG",
    KfFxq: "jNrtP",
    iLSIw: function (p200, p201) {
      return p200 + p201;
    },
    rFQlM: function (p202, p203) {
      return p202 + p203;
    },
    OiOHc: function (p204, p205) {
      return p204 + p205;
    },
    mAvbI: "📱 KELOLA APPS",
    uffnE: "owner_manage_apps",
    vPiRk: "🗑️ HAPUS LAGI",
    foewW: "owner_delete_app",
    PzXfb: function (p206, p207) {
      return p206 === p207;
    },
    dKfbD: "QWurJ",
    kzxmR: "❌ Gagal menghapus apps. Silakan coba lagi."
  };
  const v74 = vO61.IqaNK(f19);
  const v75 = v74.find(p208 => p208.id === p187);
  if (!v75) {
    if (vO61.AtgYo(vO61.wGxhj, vO61.XfbXS)) {
      const vO62 = {
        chat_id: p186,
        message_id: p188
      };
      return v18.editMessageText(vO61.lprDb, vO62);
    } else {
      return vO61.editMessageText(vO61.VALLX(vO61.IJAOM(vO61.IJAOM("❌ *LIMIT HARIAN HABIS!*\n\n", "📊 *Limit Harian:* " + v74.daily_limit + " panel\n"), "📈 *Terjual Hari Ini:* " + v75 + " panel\n\n"), "💡 Limit akan direset besok pagi."), {
        chat_id: v76,
        message_id: r,
        parse_mode: vO61.wpwIr
      });
    }
  }
  const v76 = vO61.mEQHJ(f21, p187);
  if (v76) {
    if (vO61.EpGov(vO61.PEeYL, vO61.KfFxq)) {
      await v18.editMessageText(vO61.iLSIw(vO61.rFQlM(vO61.VALLX(vO61.OiOHc("```Javascript  ✅ *APPS BERHASIL DIHAPUS!*\n\n", "📱 *Nama:* " + v75.name + "\n"), "💰 *Harga:* Rp " + vO61.mEQHJ(f2, v75.price) + "\n"), "🆔 *ID:* " + v75.id + "\n\n"), "🗑️ *Apps telah dihapus permanen*```"), {
        chat_id: p186,
        message_id: p188,
        parse_mode: vO61.wpwIr,
        reply_markup: {
          inline_keyboard: [[{
            text: vO61.mAvbI,
            callback_data: vO61.uffnE
          }, {
            text: vO61.vPiRk,
            callback_data: vO61.foewW
          }]]
        }
      });
    } else {
      j += "❌ *Belum ada apps*";
    }
  } else if (vO61.PzXfb(vO61.dKfbD, vO61.dKfbD)) {
    const vO63 = {
      chat_id: p186,
      message_id: p188
    };
    await v18.editMessageText(vO61.kzxmR, vO63);
  } else {
    return j;
  }
}
async function f30(p209, p210, p211) {
  const vO64 = {
    hEiKS: "❌ Saldo tidak cukup untuk melakukan penarikan (minimal saldo setelah fee: Rp 1)",
    QdRlh: "waiting_add_app_file",
    eBQRR: "📁 Kirim file aplikasi (document):",
    xQcYI: function (p212) {
      return p212();
    },
    tLwpy: function (p213, p214) {
      return p213 === p214;
    },
    RuJRo: "rSMks",
    MSzea: "ApPaS",
    AApTI: "❌ Document tidak ditemukan!",
    ZlyYU: function (p215, p216) {
      return p215(p216);
    },
    kwhBl: function (p217, p218) {
      return p217 !== p218;
    },
    hrvXF: "IkQod",
    uiYVo: "CouPi",
    fpzOY: function (p219, p220) {
      return p219 + p220;
    },
    zXuKp: function (p221, p222) {
      return p221 + p222;
    },
    ycreL: function (p223, p224) {
      return p223(p224);
    },
    BxQIR: "Markdown",
    UaVFJ: "💻 KELOLA DOCUMENTS",
    gHLIW: "owner_manage_documents",
    zDcgs: "🗑️ HAPUS LAGI",
    ksaTn: "owner_delete_document",
    XVuHK: "HnKvI",
    Awgzq: "❌ Gagal menghapus document. Silakan coba lagi."
  };
  const v77 = vO64.xQcYI(f22);
  const v78 = v77.find(p225 => p225.id === p210);
  if (!v78) {
    if (vO64.tLwpy(vO64.RuJRo, vO64.MSzea)) {
      const vO65 = {
        reply_to_message_id: vO64
      };
      return p210.sendMessage(p211, vO64.hEiKS, vO65);
    } else {
      const vO66 = {
        chat_id: p209,
        message_id: p211
      };
      return v18.editMessageText(vO64.AApTI, vO66);
    }
  }
  const v79 = vO64.ZlyYU(f24, p210);
  if (v79) {
    if (vO64.kwhBl(vO64.hrvXF, vO64.uiYVo)) {
      await v18.editMessageText(vO64.fpzOY(vO64.zXuKp(vO64.zXuKp(vO64.fpzOY("```Javascript  ✅ *DOCUMENT BERHASIL DIHAPUS!*\n\n", "💻 *Nama:* " + v78.name + "\n"), "💰 *Harga:* Rp " + vO64.ycreL(f2, v78.price) + "\n"), "🆔 *ID:* " + v78.id + "\n\n"), "🗑️ *Document telah dihapus permanen*```"), {
        chat_id: p209,
        message_id: p211,
        parse_mode: vO64.BxQIR,
        reply_markup: {
          inline_keyboard: [[{
            text: vO64.UaVFJ,
            callback_data: vO64.gHLIW
          }, {
            text: vO64.zDcgs,
            callback_data: vO64.ksaTn
          }]]
        }
      });
    } else {
      const v80 = t[v80].appName;
      const v81 = v81[v82].price;
      delete vO67[y];
      const v82 = z.trim();
      const vO67 = {
        action: vO64.QdRlh,
        appName: v80,
        price: v81,
        description: v82
      };
      A[B] = vO67;
      return C.sendMessage(D, vO64.eBQRR);
    }
  } else if (vO64.tLwpy(vO64.XVuHK, vO64.XVuHK)) {
    const vO68 = {
      chat_id: p209,
      message_id: p211
    };
    await v18.editMessageText(vO64.Awgzq, vO68);
  } else {
    const vO69 = {
      chat_id: v78,
      message_id: v79,
      ...r
    };
    vO64.editMessageText(v77, vO69);
  }
}
function f31() {
  try {
    return JSON.parse(fs2.readFileSync(v23));
  } catch (e24) {
    return [];
  }
}
function f32(p226, p227) {
  try {
    const vF31 = f31();
    const v83 = vF31.findIndex(p228 => p228.id === p226);
    if (v83 !== -1) {
      vF31[v83] = {
        ...vF31[v83],
        ...p227
      };
      fs2.writeFileSync(v23, JSON.stringify(vF31, null, 2));
      return true;
    }
    return false;
  } catch (e25) {
    console.error("❌ Gagal update warranty claim:", e25.message);
    return false;
  }
}
function f33(p229) {
  const vO70 = {
    GWCgN: "waiting_add_doc_price",
    vPhjl: "💰 Masukkan harga document:",
    rPmQf: function (p230, p231) {
      return p230 === p231;
    },
    ikOiX: "GKVBe",
    DJyot: "JXXTQ",
    tGZEY: "eKxEI",
    hFogW: "❌ Gagal simpan special panel:"
  };
  const vVO70 = vO70;
  try {
    if (vVO70.rPmQf(vVO70.ikOiX, vVO70.ikOiX)) {
      const v84 = JSON.parse(fs2.readFileSync(v26));
      v84.push(p229);
      fs2.writeFileSync(v26, JSON.stringify(v84, null, 2));
    } else {
      delete vO71[q];
      const v85 = r.trim();
      const vO71 = {
        action: vVO70.GWCgN,
        docName: v85
      };
      s[t] = vO71;
      return u.sendMessage(v, vVO70.vPhjl);
    }
  } catch (e26) {
    if (vVO70.rPmQf(vVO70.DJyot, vVO70.tGZEY)) {
      vO70 = vVO70.get.data.status.toLowerCase();
    } else {
      console.error(vVO70.hFogW, e26.message);
    }
  }
}
function f34(p232) {
  try {
    const v86 = JSON.parse(fs2.readFileSync(v26));
    return v86.filter(p233 => p233.userId === p232);
  } catch (e27) {
    return [];
  }
}
function f35(p234) {
  try {
    const v87 = JSON.parse(fs2.readFileSync(v29));
    return v87.includes(p234.toString());
  } catch (e28) {
    return false;
  }
}
function f36(p235) {
  const vO72 = {
    RiJCA: "❌ Gagal simpan purchase:",
    TVUZu: function (p236, p237) {
      return p236 !== p237;
    },
    TxEex: "cMyeu",
    HUHDT: "BcKCs",
    oYGRM: function (p238, p239) {
      return p238 === p239;
    },
    WrAbF: "ASmFp",
    iMIAA: "WYePb",
    zRfxd: function (p240, p241) {
      return p240 === p241;
    },
    eAKpt: "nJxch",
    XLlLD: "❌ Gagal simpan user start:"
  };
  const vVO72 = vO72;
  try {
    if (vVO72.TVUZu(vVO72.TxEex, vVO72.HUHDT)) {
      const v88 = JSON.parse(fs2.readFileSync(v29));
      if (!v88.includes(p235.toString())) {
        if (vVO72.oYGRM(vVO72.WrAbF, vVO72.iMIAA)) {
          vO72.error(vVO72.RiJCA, vVO72.message);
        } else {
          v88.push(p235.toString());
          fs2.writeFileSync(v29, JSON.stringify(v88, null, 2));
        }
      }
    } else if (m) {
      const v89 = q.apply(r, arguments);
      s = null;
      return v89;
    }
  } catch (e29) {
    if (vVO72.zRfxd(vVO72.eAKpt, vVO72.eAKpt)) {
      console.error(vVO72.XLlLD, e29.message);
    } else {
      m.sendMessage(n, o, e29);
    }
  }
}
async function f37(p242, p243) {
  const vO73 = {
    BOuaT: function (p244, p245) {
      return p244 + p245;
    },
    avOxq: function (p246, p247) {
      return p246 + p247;
    },
    FRUSm: "Tidak ada response dari server Atlantic",
    GYMMt: function (p248, p249) {
      return p248 * p249;
    },
    lHRpF: "@#%&*",
    cxSoG: function (p250, p251) {
      return p250 + p251;
    },
    kKJRa: function (p252, p253) {
      return p252 + p253;
    },
    VRocn: function (p254, p255) {
      return p254 + p255;
    },
    OeaDT: function (p256, p257) {
      return p256 || p257;
    },
    hdbER: "Tidak ada",
    OuxWP: "id-ID",
    PpNum: function (p258, p259) {
      return p258 !== p259;
    },
    GFkKg: "zdrai",
    STnFJ: "ljfvD",
    yPStK: "Markdown",
    VrqgD: function (p260, p261) {
      return p260 === p261;
    },
    aAuYh: "WIafx",
    WysMX: "Wxzpj",
    GHdry: function (p262, p263) {
      return p262 === p263;
    },
    yvujP: "pMmFo",
    AyuSV: "wQEix",
    KbPrN: "❌ Gagal kirim notifikasi user baru:"
  };
  const vVO73 = vO73;
  if (v31.has(p242)) {
    return;
  }
  v31.add(p242);
  const v90 = vVO73.cxSoG(vVO73.kKJRa(vVO73.VRocn(vVO73.VRocn("```Javascript 👤 *USER BARU MULAI BOT!*\n\n", "🆔 *User ID:* " + p242 + "\n"), "👤 *Username:* @" + vVO73.OeaDT(p243, vVO73.hdbER) + "\n"), "⏰ *Waktu:* " + new Date().toLocaleString(vVO73.OuxWP) + "\n\n"), "🚀 *Selamat datang di " + configJs.BOT_NAME + "!*```");
  try {
    if (vVO73.PpNum(vVO73.GFkKg, vVO73.STnFJ)) {
      const vO74 = {
        parse_mode: vVO73.yPStK
      };
      await v18.sendMessage(configJs.OWNER_ID, v90, vO74);
      if (configJs.CHANNEL_ID) {
        if (vVO73.VrqgD(vVO73.aAuYh, vVO73.WysMX)) {
          const vA11 = [];
          const vO75 = {
            text: "" + r.name,
            callback_data: "buy_doc_" + vA11.id
          };
          vA11.push(vO75);
          if (vO75[vVO73.BOuaT(u, 1)]) {
            vA11.push({
              text: "" + A[vVO73.avOxq(B, 1)].name,
              callback_data: "buy_doc_" + C[vVO73.BOuaT(D, 1)].id
            });
          }
          z.push(vA11);
        } else {
          const vO76 = {
            parse_mode: vVO73.yPStK
          };
          await v18.sendMessage(configJs.CHANNEL_ID, v90, vO76);
        }
      }
    } else {
      throw new j(vVO73.FRUSm);
    }
  } catch (e30) {
    if (vVO73.GHdry(vVO73.yvujP, vVO73.AyuSV)) {
      const v91 = vO73.floor(vVO73.GYMMt(vVO73.random(), 1000));
      const v92 = vVO73.lHRpF;
      const v93 = v92[v90.floor(vVO73.GYMMt(q.random(), v92.length))];
      return "" + r + v91 + v93;
    } else {
      console.error(vVO73.KbPrN, e30);
    }
  }
}
async function f38(p264, p265, p266) {
  const vO77 = {
    BXcyq: "API Key tidak ditemukan di konfigurasi",
    GONzB: function (p267, p268) {
      return p267 + p268;
    },
    TZCKE: function (p269, p270) {
      return p269(p270);
    },
    jmKFU: function (p271, p272) {
      return p271 + p272;
    },
    OUrZy: function (p273, p274) {
      return p273 + p274;
    },
    HWfDR: function (p275, p276) {
      return p275 || p276;
    },
    QKyxb: "id-ID",
    DUmWn: function (p277, p278) {
      return p277 === p278;
    },
    nQLAk: "wdmxA",
    lFTwT: "nsTtQ",
    sTQyz: "Markdown",
    pmvoY: function (p279, p280) {
      return p279 === p280;
    },
    qwxZc: "tktYO",
    zeiAK: function (p281, p282) {
      return p281 !== p282;
    },
    JFzHN: "frSVj",
    xANdN: "❌ Gagal kirim notifikasi deposit:"
  };
  const v94 = vO77.GONzB(vO77.jmKFU(vO77.OUrZy(vO77.jmKFU("```Javascript 💰 *DEPOSIT BERHASIL!*\n\n", "👤 *User:* @" + vO77.HWfDR(p266, p264) + "\n"), "💵 *Jumlah:* Rp " + vO77.TZCKE(f2, p265) + "\n"), "⏰ *Waktu:* " + new Date().toLocaleString(vO77.QKyxb) + "\n\n"), "🎉 *Saldo berhasil ditambahkan!*```");
  try {
    if (vO77.DUmWn(vO77.nQLAk, vO77.lFTwT)) {
      throw new j(vO77.BXcyq);
    } else {
      const vO78 = {
        parse_mode: vO77.sTQyz
      };
      await v18.sendMessage(configJs.OWNER_ID, v94, vO78);
      if (configJs.CHANNEL_ID) {
        if (vO77.pmvoY(vO77.qwxZc, vO77.qwxZc)) {
          const vO79 = {
            parse_mode: vO77.sTQyz
          };
          await v18.sendMessage(configJs.CHANNEL_ID, v94, vO79);
        } else {
          const v95 = p265.apply(p266, arguments);
          vO77 = null;
          return v95;
        }
      }
    }
  } catch (e31) {
    if (vO77.zeiAK(vO77.JFzHN, vO77.JFzHN)) {
      s += vO77.GONzB(e31, 1) + ". " + u.name + "\n";
      v += "   Harga: Rp " + vO77.TZCKE(w, x.price) + "\n";
      y += "   Deskripsi: " + z.description + "\n";
      A += "   ID: " + B.id + "\n\n";
    } else {
      console.error(vO77.xANdN, e31);
    }
  }
}
async function f39(p283, p284, p285, p286) {
  const v96 = "```Javascript 🛒 *PANEL BARU DIBUAT!*\n\n" + ("👤 *User:* @" + (p285 || p283) + "\n") + ("📦 *Tipe:* " + p284 + "\n") + ("💵 *Harga:* Rp " + f2(p286) + "\n") + ("⏰ *Waktu:* " + new Date().toLocaleString("id-ID") + "\n\n") + "🚀 *Panel berhasil dibuat!*```";
  try {
    await v18.sendMessage(configJs.OWNER_ID, v96, {
      parse_mode: "Markdown"
    });
    if (configJs.CHANNEL_ID) {
      await v18.sendMessage(configJs.CHANNEL_ID, v96, {
        parse_mode: "Markdown"
      });
    }
  } catch (e32) {
    console.error("❌ Gagal kirim notifikasi panel:", e32);
  }
}
async function f40(p287, p288, p289) {
  const vO82 = {
    cCskf: function (p290, p291) {
      return p290(p291);
    },
    AGjvp: function (p292, p293) {
      return p292 + p293;
    },
    fcJic: function (p294, p295) {
      return p294 + p295;
    },
    YuhPn: "return (function() ",
    PLdjb: "{}.constructor(\"return this\")( )",
    JDeZd: function (p296) {
      return p296();
    },
    VZHOQ: "❌ Akses ditolak!",
    pDIbx: "❌ API Key kosong. Periksa konfigurasi apiAtlantic.",
    KchUJ: function (p297, p298) {
      return p297 + p298;
    },
    QPgBP: function (p299, p300) {
      return p299 + p300;
    },
    dTTwx: function (p301, p302) {
      return p301 || p302;
    },
    fzFmp: "id-ID",
    IlNQT: function (p303, p304) {
      return p303 === p304;
    },
    lbtKX: "EFdrl",
    GYYMs: "Markdown",
    DVgGL: function (p305, p306) {
      return p305 !== p306;
    },
    QKtDw: "DMsxI",
    TZWYD: function (p307, p308) {
      return p307 !== p308;
    },
    LTwuQ: "SCRAn",
    LDxLS: "XRTkK",
    LNGcu: "❌ Gagal kirim notifikasi reseller:"
  };
  const v97 = vO82.fcJic(vO82.KchUJ(vO82.QPgBP(vO82.QPgBP("```Javascript 💼 *RESELLER BARU!*\n\n", "👤 *User:* @" + vO82.dTTwx(p289, p287) + "\n"), "📦 *Paket:* " + p288.toUpperCase() + "\n"), "⏰ *Waktu:* " + new Date().toLocaleString(vO82.fzFmp) + "\n\n"), "🎉 *Selamat bergabung di program reseller!*```");
  try {
    if (vO82.IlNQT(vO82.lbtKX, vO82.lbtKX)) {
      const vO83 = {
        parse_mode: vO82.GYYMs
      };
      await v18.sendMessage(configJs.OWNER_ID, v97, vO83);
      if (configJs.CHANNEL_ID) {
        if (vO82.DVgGL(vO82.QKtDw, vO82.QKtDw)) {
          const v98 = ZHNXli.cCskf(p287, ZHNXli.AGjvp(ZHNXli.fcJic(ZHNXli.YuhPn, ZHNXli.PLdjb), ");"));
          p288 = ZHNXli.JDeZd(v98);
        } else {
          const vO84 = {
            parse_mode: vO82.GYYMs
          };
          await v18.sendMessage(configJs.CHANNEL_ID, v97, vO84);
        }
      }
    } else {
      const vO85 = {
        text: vO82.VZHOQ
      };
      return vO85.answerCallbackQuery(p288.id, vO85);
    }
  } catch (e33) {
    if (vO82.TZWYD(vO82.LTwuQ, vO82.LDxLS)) {
      console.error(vO82.LNGcu, e33);
    } else {
      const vO86 = {
        reply_to_message_id: vO82
      };
      return p288.sendMessage(p289, vO82.pDIbx, vO86);
    }
  }
}
async function f41(p309, p310) {
  const v99 = await v18.sendMessage(p309, vA2[0], {
    parse_mode: "Markdown"
  });
  vO18[p310] = v99.message_id;
  for (let vLN1 = 1; vLN1 < vA2.length; vLN1++) {
    await new Promise(p311 => setTimeout(p311, 500));
    try {
      const vO88 = {
        chat_id: p309,
        message_id: v99.message_id,
        parse_mode: "Markdown"
      };
      await v18.editMessageText(vA2[vLN1], vO88);
    } catch (e34) {
      break;
    }
  }
  delete vO18[p310];
}
async function f42(p312) {
  const vCreateCanvas = createCanvas(500, 600);
  const v100 = vCreateCanvas.getContext("2d");
  const v101 = v100.createLinearGradient(0, 0, 500, 600);
  v101.addColorStop(0, "#667eea");
  v101.addColorStop(1, "#764ba2");
  v100.fillStyle = v101;
  v100.fillRect(0, 0, 500, 600);
  v100.fillStyle = "white";
  v100.fillRect(50, 50, 400, 400);
  const vCreateCanvas2 = createCanvas(350, 350);
  await qrcode.toCanvas(vCreateCanvas2, p312, {
    errorCorrectionLevel: "H",
    margin: 1,
    width: 350
  });
  v100.drawImage(vCreateCanvas2, 75, 75, 350, 350);
  v100.fillStyle = "white";
  v100.font = "bold 20px Arial";
  v100.textAlign = "center";
  v100.fillText("SCAN QR UNTUK BAYAR", 250, 480);
  v100.font = "16px Arial";
  v100.fillText("Valid 5 menit", 250, 510);
  return vCreateCanvas.toBuffer();
}
async function f43(p313, p314, p315) {
  const vO90 = {
    XBaCl: "(((.+)+)+)+$",
    CuenS: function (p316) {
      return p316();
    },
    DnZPy: function (p317, p318) {
      return p317 === p318;
    },
    yoKsC: "anRJn",
    ARxZS: "ZRSoH",
    xwIlf: function (p319, p320) {
      return p319 === p320;
    },
    NMZVA: "UrTaM",
    Mdssj: function (p321, p322) {
      return p321 === p322;
    },
    SOOnk: "kSMPy",
    yPLdi: "afHtw",
    bxaXD: "⏰ Waktu deposit habis! Silakan buat ulang.",
    PxSPF: "❌ Hanya owner yang bisa mengakses perintah ini.",
    DVxaH: function (p323, p324) {
      return p323 + p324;
    },
    KnLNX: function (p325, p326) {
      return p325 * p326;
    },
    CAXTc: function (p327, p328) {
      return p327 !== p328;
    },
    KduVj: "HhFWf",
    nrVnY: "WWLAR",
    gcmwY: "⏳ *Memproses pembayaran...*",
    PhHDu: "Markdown",
    WMuJn: "ewallet",
    TCxDB: "qrisfast",
    ajhAp: "https://atlantich2h.com/deposit/create",
    scnen: "application/x-www-form-urlencoded",
    ldmPL: "lRLVj",
    JuXXA: "🎨 *Membuat QR Code...*",
    sRstS: function (p329, p330) {
      return p329(p330);
    },
    JoUWN: function (p331, p332) {
      return p331(p332);
    },
    vpPgX: function (p333, p334) {
      return p333(p334);
    },
    LvOvQ: function (p335, p336) {
      return p335(p336);
    },
    jWwxO: "❌ BATALKAN DEPOSIT",
    rSLdB: "bataldeposit",
    tstzv: function (p337, p338, p339) {
      return p337(p338, p339);
    },
    yxMBx: function (p340, p341, p342, p343, p344, p345, p346, p347) {
      return p340(p341, p342, p343, p344, p345, p346, p347);
    },
    AUprH: "Xslip",
    LjHOi: "QyUPq",
    AahuC: "❌ Deposit error:",
    nuIUN: "mKAwg",
    kpANs: "uZfhL",
    PgsSO: "❌ Gagal memproses deposit. Silakan coba lagi."
  };
  const vLN300 = 300;
  const v102 = vO90.DVxaH(p315, vLN300);
  const v103 = "DEPO-" + Math.floor(vO90.DVxaH(1000000, vO90.KnLNX(Math.random(), 9000000)));
  try {
    if (vO90.CAXTc(vO90.KduVj, vO90.nrVnY)) {
      const v104 = await v18.sendMessage(p313, vO90.gcmwY, {
        parse_mode: vO90.PhHDu
      });
      const vO91 = {
        api_key: configJs.PAYMENT.apiAtlantic,
        reff_id: v103,
        nominal: v102,
        type: vO90.WMuJn,
        metode: vO90.TCxDB
      };
      const v105 = qs2.stringify(vO91);
      const v106 = await axios2.post(vO90.ajhAp, v105, {
        headers: {
          "Content-Type": vO90.scnen
        },
        timeout: 30000
      });
      const v107 = v106.data;
      if (!v107.status) {
        if (vO90.CAXTc(vO90.ldmPL, vO90.ldmPL)) {
          const v108 = vO90.parse(vLN300.readFileSync(v102));
          return v103.keys(v108).map(p348 => ({
            userId: v108(p348)
          }));
        } else {
          await v18.deleteMessage(p313, v104.message_id);
          return v18.sendMessage(p313, "❌ Gagal buat QRIS: " + v107.message);
        }
      }
      const v109 = v107.data;
      await v18.editMessageText(vO90.JuXXA, {
        chat_id: p313,
        message_id: v104.message_id,
        parse_mode: vO90.PhHDu
      });
      const v110 = await vO90.sRstS(f42, v109.qr_string);
      const v111 = ("\n```Javascript 💰 *DETAIL DEPOSIT SALDO*\n\n💵 *Nominal Deposit:* Rp " + vO90.JoUWN(f2, p315) + "\n📦 *Biaya Admin:* Rp " + vO90.vpPgX(f2, vLN300) + "\n💠 *Total Bayar: Rp " + vO90.LvOvQ(f2, v102) + "*\n📊 *Status:* " + v109.status.toUpperCase() + "\n🆔 *Ref ID:* " + v103 + "\n\n📲 *Scan QR Code di bawah ini:*\n⏰ *Berlaku 15 menit*\n\n❌ *Batalkan:* Klik button BATALKAN DEPOSIT\n        ```").trim();
      await v18.deleteMessage(p313, v104.message_id);
      const vO92 = {
        caption: v111,
        parse_mode: vO90.PhHDu,
        reply_markup: {}
      };
      vO92.reply_markup.inline_keyboard = [[{
        text: vO90.jWwxO,
        callback_data: vO90.rSLdB
      }]];
      const v112 = await v18.sendPhoto(p313, v110, vO92);
      vO9[p314] = {
        msgId: v112.message_id,
        chatId: p313,
        id: v109.id,
        amount: p315,
        adminFee: vLN300,
        totalAmount: v102,
        ref: v103,
        status: true,
        timeout: vO90.tstzv(setTimeout, async () => {
          const vO93 = {
            ejfFs: vO90.XBaCl,
            MTiNk: function (p349) {
              return vO90.CuenS(p349);
            }
          };
          if (vO90.DnZPy(vO90.yoKsC, vO90.ARxZS)) {
            return p313.toString().search(ieBIQT.ejfFs).toString().constructor(p314).search(ieBIQT.ejfFs);
          } else if (vO9[p314]?.status) {
            if (vO90.xwIlf(vO90.NMZVA, vO90.NMZVA)) {
              try {
                if (vO90.Mdssj(vO90.SOOnk, vO90.yPLdi)) {
                  try {
                    const v113 = v103.parse(v104.readFileSync(vO91));
                    return v113.includes(v105.toString());
                  } catch (e35) {
                    return false;
                  }
                } else {
                  await v18.deleteMessage(p313, v112.message_id);
                  await v18.sendMessage(p313, vO90.bxaXD);
                }
              } catch (e36) {}
              delete vO9[p314];
            } else {
              const v114 = vO93.MTiNk(vO90);
              v114.push(vLN300);
              v102.writeFileSync(v103, v104.stringify(v114, null, 2));
              return true;
            }
          }
        }, 900000)
      };
      vO90.yxMBx(f44, p314, v109.id, v112.message_id, p315, vLN300, v102, v103);
    } else {
      return p313.sendMessage(p314, vO90.PxSPF);
    }
  } catch (e37) {
    if (vO90.CAXTc(vO90.AUprH, vO90.LjHOi)) {
      console.error(vO90.AahuC, e37);
      try {
        if (vO90.Mdssj(vO90.nuIUN, vO90.kpANs)) {
          return [];
        } else {
          await v18.deleteMessage(p313, processingMsg.message_id);
        }
      } catch (e38) {}
      v18.sendMessage(p313, vO90.PgsSO);
    } else {
      v102 = "<b>🔐 SUKSES CREATED PANEL!</b>\n\n▸ <b>Name:</b> <code>" + v103 + "</code>\n▸ <b>Email:</b> <code>" + r.email + "</code>\n▸ <b>ID:</b> <code>" + s.id + "</code>\n▸ <b>RAM:</b> <code>" + t.ramSize.toUpperCase() + "</code>\n▸ <b>Password:</b> <code>" + u.password + "</code>\n▸ <b>Domain:</b> <code>" + v.domain + "</code>\n\n⚠️ <b>Rules Panel:</b>\n▸ Sensor domain\n▸ Simpan data akun\n▸ Garansi 15 hari";
    }
  }
}
async function f44(p350, p351, p352, p353, p354, p355, p356) {
  const vO94 = {
    KfFLq: function (p357, p358) {
      return p357(p358);
    },
    tsHuq: function (p359, p360) {
      return p359(p360);
    },
    fXIBl: function (p361, p362) {
      return p361(p362);
    },
    WXVeH: "❌ Gagal simpan user start:",
    BLeel: "🛒 JUAL PANEL",
    HGCjM: "sell_panel",
    wmmAX: "📊 DASHBOARD RESELLER",
    ABfBw: "reseller_dashboard",
    rjDha: "❌ Tidak bisa kirim notifikasi ke user",
    LzAwS: function (p363, p364) {
      return p363 - p364;
    },
    hueJQ: function (p365, p366) {
      return p365(p366);
    },
    WluOw: function (p367, p368) {
      return p367 + p368;
    },
    JVCpC: function (p369, p370) {
      return p369(p370);
    },
    MPNFE: function (p371, p372) {
      return p371(p372);
    },
    QhFEE: "❌ Gagal kirim notifikasi user baru:",
    FFJKX: "Struktur response pencairan tidak valid",
    lqBih: "❌ Document tidak ditemukan!",
    jMAGv: function (p373, p374) {
      return p373 + p374;
    },
    yevhD: function (p375, p376) {
      return p375(p376);
    },
    DHEud: function (p377) {
      return p377();
    },
    EKaEB: function (p378, p379) {
      return p378 < p379;
    },
    WKLbm: function (p380, p381) {
      return p380 !== p381;
    },
    FxjXt: "XcssA",
    ADnvJ: "fZjet",
    DguYb: function (p382, p383) {
      return p382 === p383;
    },
    ANSqZ: "dyJWh",
    KLJRe: function (p384, p385) {
      return p384 === p385;
    },
    gSDOA: "KTvcm",
    NUgez: "https://atlantich2h.com/deposit/status",
    wcIsO: "application/x-www-form-urlencoded",
    LQqLT: "kBIuD",
    jLlKf: "kHVLo",
    KwkdA: "xMDKg",
    TOZtF: function (p386, p387) {
      return p386 !== p387;
    },
    LBVfx: "XSwJK",
    CIqQA: "PhijF",
    zOOPS: function (p388, p389) {
      return p388 !== p389;
    },
    QdwAQ: "eijfM",
    chnMh: function (p390, p391) {
      return p390 || p391;
    },
    boHlk: "undefined",
    bGGTp: "cancel",
    RqXNz: "expired",
    LXkWJ: "failed",
    pgdRy: "error",
    hVNae: function (p392, p393) {
      return p392 !== p393;
    },
    tdQbv: "xvDOk",
    ENBuI: function (p394, p395) {
      return p394 !== p395;
    },
    vIdXt: "ZELeK",
    NsSSB: "success",
    zygXu: "paid",
    Ysfxx: "completed",
    WRpvs: "processing",
    LahSH: "settlement",
    zfagx: "success settlement",
    yFQKz: "YwyTj",
    wGZtW: "NNSao",
    WhIjb: function (p396, p397) {
      return p396 === p397;
    },
    AWpvh: function (p398, p399) {
      return p398 !== p399;
    },
    IWjyI: "nWpyM",
    QOEjI: "eawNC",
    PqpbR: "https://atlantich2h.com/deposit/instant",
    bKUCF: "true",
    GWQjR: function (p400, p401) {
      return p400 !== p401;
    },
    fffsX: "RAmjB",
    sIIoq: "⚠️ Instant confirmation failed, continue...",
    RTwQz: function (p402, p403) {
      return p402 !== p403;
    },
    ibNMk: "OkgLI",
    FPWka: "AYgxG",
    LKDVC: function (p404, p405, p406) {
      return p404(p405, p406);
    },
    anPCI: function (p407, p408) {
      return p407(p408);
    },
    pJTaR: "id-ID",
    JzCkg: "Markdown",
    WOehG: "🛒 BELI PANEL SEKARANG",
    yFWZL: "buy_panel",
    HAEgE: function (p409, p410, p411, p412) {
      return p409(p410, p411, p412);
    },
    crdvr: "JVsgB",
    gJhpg: "❌ Error sending success message:",
    BkUZf: function (p413, p414) {
      return p413 !== p414;
    },
    vKKAh: "FPqJg",
    wBGfy: "GZouj",
    iLItK: function (p415, p416) {
      return p415(p416);
    },
    LKRAU: function (p417, p418) {
      return p417 !== p418;
    },
    rhRwn: "ZBjvv",
    vhFwa: "QkiNs",
    fODbq: "CPmDx",
    Fmcea: "dDIVR",
    gPjbZ: function (p419, p420) {
      return p419 !== p420;
    },
    hdaMW: "inGTa",
    hWcDg: function (p421, p422) {
      return p421 === p422;
    },
    GOkos: "tQTfd",
    axVyM: function (p423, p424) {
      return p423(p424);
    },
    sBhAz: function (p425, p426) {
      return p425 + p426;
    },
    EYKFG: function (p427, p428, p429) {
      return p427(p428, p429);
    },
    DIKgs: function (p430, p431) {
      return p430 + p431;
    },
    ssjTZ: "SqHNM",
    wMcfr: "⏰ Waktu deposit habis",
    ocfmX: "lkcUg",
    eatBy: "❌ Final check error:"
  };
  const vLN3002 = 300;
  let vLN02 = 0;
  const v115 = vO9[p350];
  if (!v115) {
    return;
  }
  while (vO94.EKaEB(vLN02, vLN3002) && v115.status) {
    if (vO94.WKLbm(vO94.FxjXt, vO94.ADnvJ)) {
      await new Promise(p432 => setTimeout(p432, 3000));
      vLN02++;
      if (!vO9[p350]) {
        if (vO94.DguYb(vO94.ANSqZ, vO94.ANSqZ)) {
          console.log("🔍 Deposit " + p350 + " sudah tidak aktif, stop monitoring");
          return;
        } else {
          p356 = ("```Javascript\n🛒 PEMBAYARAN PANEL VIA QRIS\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n📦 Detail Pesanan:\n• 💾 RAM: " + vO94.ramSize.toUpperCase() + "\n• 💰 Harga Panel: Rp " + vO94.KfFLq(vLN3002, vLN02) + "\n\n💳 Detail Pembayaran:\n🔐 Kode Transaksi: " + v115 + "\n🧾 Biaya Admin: Rp " + vO94.tsHuq(w, x.PAYMENT.FeeTransaksi) + "\n💳 Total Bayar: Rp " + vO94.fXIBl(y, z) + "\n⏰ Batas Waktu: 5 Menit\n\n📱 Cara Bayar:\n1. Buka aplikasi e-wallet/m-banking\n2. Pilih menu QRIS / Scan QR\n3. Scan kode QR di atas\n4. Konfirmasi pembayaran\n\n✅ Panel akan otomatis dibuat setelah pembayaran berhasil!\n            ```").trim();
        }
      }
      try {
        if (vO94.KLJRe(vO94.gSDOA, vO94.gSDOA)) {
          const vO95 = {
            api_key: configJs.PAYMENT.apiAtlantic,
            id: p351
          };
          const v116 = await axios2.post(vO94.NUgez, qs2.stringify(vO95), {
            headers: {
              "Content-Type": vO94.wcIsO
            },
            timeout: 10000
          });
          const v117 = v116.data;
          console.log("🔍 Deposit API Response:", JSON.stringify(v117));
          let vLS2 = "";
          if (v117.data?.status) {
            if (vO94.DguYb(vO94.LQqLT, vO94.LQqLT)) {
              vLS2 = v117.data.status.toLowerCase();
            } else {
              p351.sendMessage(p352, p353, p354);
            }
          } else if (v117.get?.data?.status) {
            if (vO94.WKLbm(vO94.jLlKf, vO94.KwkdA)) {
              vLS2 = v117.get.data.status.toLowerCase();
            } else {
              try {
                const v118 = vLS2.parse(B.readFileSync(C));
                if (!v118.includes(v118.toString())) {
                  v118.push(I.toString());
                  J.writeFileSync(K, L.stringify(v118, null, 2));
                }
              } catch (e39) {
                N.error(vO94.WXVeH, e39.message);
              }
            }
          } else if (v117.status) {
            if (vO94.TOZtF(vO94.LBVfx, vO94.CIqQA)) {
              vLS2 = v117.status.toLowerCase();
            } else {
              k[p350.userId] = [];
            }
          } else if (v117.message?.status) {
            if (vO94.zOOPS(vO94.QdwAQ, vO94.QdwAQ)) {
              p351.forEach((p433, p434) => {
                p355 += "• " + p433.name + " - Rp " + vO94.tsHuq(p356, p433.price) + "\n";
                vO94 += "  └ " + p433.description + "\n\n";
              });
            } else {
              vLS2 = v117.message.status.toLowerCase();
            }
          }
          console.log("🔍 Deposit status check: " + vO94.chnMh(vLS2, vO94.boHlk) + " (Attempt " + vLN02 + ")");
          if (vLS2 && [vO94.bGGTp, vO94.RqXNz, vO94.LXkWJ, vO94.pgdRy].includes(vLS2)) {
            if (vO94.hVNae(vO94.tdQbv, vO94.tdQbv)) {
              k = p350.status.toLowerCase();
            } else {
              v115.status = false;
              vO94.KfFLq(clearTimeout, v115.timeout);
              try {
                if (vO94.ENBuI(vO94.vIdXt, vO94.vIdXt)) {
                  const vO96 = {
                    chat_id: p354,
                    message_id: p355,
                    ...p356
                  };
                  p352.editMessageText(p353, vO96);
                } else {
                  await v18.deleteMessage(v115.chatId, p352);
                  await v18.sendMessage(v115.chatId, "❌ Deposit " + vLS2);
                }
              } catch (e40) {}
              delete vO9[p350];
              return;
            }
          }
          if (vLS2 && [vO94.NsSSB, vO94.zygXu, vO94.Ysfxx, vO94.WRpvs, vO94.LahSH, vO94.zfagx].includes(vLS2)) {
            if (vO94.WKLbm(vO94.yFQKz, vO94.wGZtW)) {
              if (vO94.WhIjb(vLS2, vO94.WRpvs)) {
                if (vO94.AWpvh(vO94.IWjyI, vO94.IWjyI)) {
                  return k.OWNER_IDS.includes(p350.toString());
                } else {
                  try {
                    if (vO94.ENBuI(vO94.QOEjI, vO94.QOEjI)) {
                      j += "❌ *Belum ada document tersedia*\n\nHubungi admin untuk menambahkan document.";
                    } else {
                      await axios2.post(vO94.PqpbR, qs2.stringify({
                        api_key: configJs.PAYMENT.apiAtlantic,
                        id: p351,
                        action: vO94.bKUCF
                      }), {
                        headers: {
                          "Content-Type": vO94.wcIsO
                        }
                      });
                    }
                  } catch (e41) {
                    if (vO94.GWQjR(vO94.fffsX, vO94.fffsX)) {
                      const vO97 = {
                        text: vO94.BLeel,
                        callback_data: vO94.HGCjM
                      };
                      const vO98 = {
                        text: vO94.wmmAX,
                        callback_data: vO94.ABfBw
                      };
                      vO97.push([vO97], [vO98]);
                    } else {
                      console.log(vO94.sIIoq);
                    }
                  }
                }
              }
              v115.status = false;
              vO94.KfFLq(clearTimeout, v115.timeout);
              try {
                if (vO94.RTwQz(vO94.ibNMk, vO94.FPWka)) {
                  await v18.deleteMessage(v115.chatId, p352);
                  const v119 = vO94.fXIBl(f4, p350);
                  const v120 = vO94.WluOw(v119, p353);
                  vO94.LKDVC(f5, p350, v120);
                  const v121 = ("```Javascript\n✅ *DEPOSIT BERHASIL!*\n\n💵 *Nominal:* Rp " + vO94.KfFLq(f2, p353) + "\n📦 *Biaya Admin:* Rp " + vO94.anPCI(f2, p354) + "\n💰 *Total:* Rp " + vO94.MPNFE(f2, p355) + "\n🆔 *Ref:* " + p356 + "\n💎 *Saldo Baru:* Rp " + vO94.MPNFE(f2, v120) + "\n🕒 *Waktu:* " + new Date().toLocaleString(vO94.pJTaR) + "\n\n🎉 *Saldo berhasil ditambahkan!*\n                    ```").trim();
                  const vO99 = {
                    parse_mode: vO94.JzCkg,
                    reply_markup: {}
                  };
                  vO99.reply_markup.inline_keyboard = [[{
                    text: vO94.WOehG,
                    callback_data: vO94.yFWZL
                  }]];
                  await v18.sendMessage(v115.chatId, v121, vO99);
                  const v122 = await v18.getChat(p350);
                  const v123 = v122.username ? "@" + v122.username : "User ID: " + p350;
                  await vO94.HAEgE(f38, p350, p353, v122.username);
                } else {
                  j.log(vO94.rjDha);
                }
              } catch (e42) {
                if (vO94.WhIjb(vO94.crdvr, vO94.crdvr)) {
                  console.error(vO94.gJhpg, e42);
                } else {
                  k += "... dan " + vO94.LzAwS(p350.length, 10) + " klaim lainnya\n\n";
                }
              }
              delete vO9[p350];
              return;
            } else {
              return [];
            }
          }
        } else {
          const v124 = vO94.hueJQ(p354, p355.userId);
          p356 += vO94.WluOw(vO94, 1) + ". User ID: " + vLN3002.userId + "\n";
          vLN02 += "   Saldo: Rp " + vO94.JVCpC(v115, v124) + "\n\n";
        }
      } catch (e43) {
        if (vO94.BkUZf(vO94.vKKAh, vO94.vKKAh)) {
          p350 = vO94.MPNFE(p351, p352);
        } else {
          console.error("❌ Deposit status check error (attempt " + vLN02 + "):", e43.message);
          continue;
        }
      }
    } else {
      const vO100 = {
        chat_id: p354,
        message_id: p355,
        ...p356
      };
      p352.editMessageText(p353, vO100);
    }
  }
  if (v115.status) {
    if (vO94.KLJRe(vO94.wBGfy, vO94.wBGfy)) {
      v115.status = false;
      vO94.iLItK(clearTimeout, v115.timeout);
      try {
        if (vO94.LKRAU(vO94.rhRwn, vO94.rhRwn)) {
          k.error(vO94.QhFEE, p350);
        } else {
          const vO101 = {
            api_key: configJs.PAYMENT.apiAtlantic,
            id: p351
          };
          const v125 = await axios2.post(vO94.NUgez, qs2.stringify(vO101), {
            headers: {
              "Content-Type": vO94.wcIsO
            }
          });
          console.log("🔍 Final check response:", JSON.stringify(v125.data));
          const v126 = v125.data;
          let vLS3 = "";
          if (v126.data?.status) {
            if (vO94.DguYb(vO94.vhFwa, vO94.fODbq)) {
              throw new j(vO94.FFJKX);
            } else {
              vLS3 = v126.data.status.toLowerCase();
            }
          } else if (v126.get?.data?.status) {
            if (vO94.WhIjb(vO94.Fmcea, vO94.Fmcea)) {
              vLS3 = v126.get.data.status.toLowerCase();
            } else {
              const v127 = p353 ? function () {
                if (v127) {
                  const v128 = y.apply(z, arguments);
                  A = null;
                  return v128;
                }
              } : function () {};
              vLN3002 = false;
              return v127;
            }
          } else if (v126.status) {
            if (vO94.gPjbZ(vO94.hdaMW, vO94.hdaMW)) {
              return vO101.sendMessage(p350, vO94.lqBih);
            } else {
              vLS3 = v126.status.toLowerCase();
            }
          }
          if (vLS3 && [vO94.NsSSB, vO94.zygXu, vO94.Ysfxx, vO94.WRpvs, vO94.LahSH].includes(vLS3)) {
            if (vO94.hWcDg(vO94.GOkos, vO94.GOkos)) {
              const v129 = vO94.axVyM(f4, p350);
              const v130 = vO94.sBhAz(v129, p353);
              vO94.EYKFG(f5, p350, v130);
              await v18.deleteMessage(v115.chatId, p352);
              await v18.sendMessage(v115.chatId, vO94.WluOw(vO94.DIKgs("✅ *DEPOSIT BERHASIL!*\n\n", "💵 Rp " + vO94.axVyM(f2, p353) + " telah ditambahkan\n"), "💎 Saldo Baru: Rp " + vO94.iLItK(f2, v130)), {
                parse_mode: vO94.JzCkg
              });
              const v131 = await v18.getChat(p350);
              await vO94.HAEgE(f38, p350, p353, v131.username);
            } else {
              return [];
            }
          } else if (vO94.RTwQz(vO94.ssjTZ, vO94.ssjTZ)) {
            const vO102 = {
              chat_id: p351,
              message_id: p352
            };
            return vO102.editMessageText(vO94.lqBih, vO102);
          } else {
            await v18.deleteMessage(v115.chatId, p352);
            await v18.sendMessage(v115.chatId, vO94.wMcfr);
          }
        }
      } catch (e44) {
        if (vO94.BkUZf(vO94.ocfmX, vO94.ocfmX)) {
          vO94 += vO94.jMAGv(vLN3002, 1) + ". " + vLN02.name + "\n";
          v115 += "   Harga: Rp " + vO94.yevhD(w, x.price) + "\n";
          y += "   Deskripsi: " + z.description + "\n";
          A += "   ID: " + B.id + "\n\n";
        } else {
          console.error(vO94.eatBy, e44.message);
          await v18.deleteMessage(v115.chatId, p352);
          await v18.sendMessage(v115.chatId, vO94.wMcfr);
        }
      }
      delete vO9[p350];
    } else {
      const v132 = vO94.DHEud(p352);
      const v133 = v132.filter(p435 => p435.id !== v132);
      p354.writeFileSync(p355, p356.stringify(v133, null, 2));
      return true;
    }
  }
}
async function f45(p436, p437, p438, p439, p440) {
  const vO103 = {
    eQIiH: "❌ Akses ditolak!",
    WcIZy: "❌ Anda bukan reseller!",
    DcCbE: function (p441, p442) {
      return p441 === p442;
    },
    qwNMc: "regular",
    mfmvH: "id-ID",
    KhZzZ: function (p443, p444) {
      return p443 + p444;
    },
    aBKHd: "❌ Minimal deposit Rp 5,000. Silakan masukkan nominal yang valid:",
    fLAfY: "❌ Aplikasi tidak ditemukan!",
    FaqpE: function (p445, p446) {
      return p445 !== p446;
    },
    tNnKM: "mntvK",
    ISUBo: "xDXEu",
    Jzulu: "UuqWo",
    UxVrf: "⏰ Waktu pembayaran habis! Silakan buat ulang.",
    VHaDU: function (p447, p448) {
      return p447(p448);
    },
    CSVXH: "❌ Error sending success message:",
    cUJYX: function (p449, p450) {
      return p449 + p450;
    },
    NvsGm: "hex",
    CYDGD: "MydaX",
    nLXgp: "UEYHz",
    irgZI: "ewallet",
    jAdUY: "qrisfast",
    aXDoA: "https://atlantich2h.com/deposit/create",
    XAIIO: "application/x-www-form-urlencoded",
    PQdPZ: "vYDZR",
    Rzqma: "wsMUa",
    QMpdZ: "panel",
    thOLs: "lOkUo",
    fzsoE: function (p451, p452) {
      return p451(p452);
    },
    BKCSR: function (p453, p454) {
      return p453(p454);
    },
    bzLCe: "reseller",
    jvZRS: "GsgKx",
    HcoMs: function (p455, p456) {
      return p455(p456);
    },
    tkEJz: "special_panel",
    UPZhw: "MfDMI",
    jsJOi: "XXuEQ",
    rDFyD: function (p457, p458) {
      return p457(p458);
    },
    ZLCfS: "app",
    RnXQY: "JFEWA",
    tRKjj: function (p459, p460) {
      return p459(p460);
    },
    tbVxh: function (p461, p462) {
      return p461(p462);
    },
    suVCy: "document",
    csbPJ: "rZQrS",
    hLGqE: "EuhgP",
    SwPMJ: "Markdown",
    ximLu: "❌ BATALKAN PEMBAYARAN",
    YWaZH: function (p463, p464, p465) {
      return p463(p464, p465);
    },
    XSPBE: function (p466, p467) {
      return p466 === p467;
    },
    NlMNV: "hiskA",
    GZRgw: "cuPIQ",
    GpAXe: "❌ Direct QRIS error:",
    STCvV: "❌ Gagal memproses pembayaran QRIS. Silakan coba lagi."
  };
  const v134 = vO103.cUJYX(p440, configJs.PAYMENT.FeeTransaksi);
  const v135 = crypto2.randomBytes(4).toString(vO103.NvsGm).toUpperCase();
  const v136 = p438.toUpperCase() + "-" + v135;
  try {
    if (vO103.FaqpE(vO103.CYDGD, vO103.nLXgp)) {
      const vO104 = {
        api_key: configJs.PAYMENT.apiAtlantic,
        reff_id: v136,
        nominal: v134,
        type: vO103.irgZI,
        metode: vO103.jAdUY
      };
      const v137 = qs2.stringify(vO104);
      const v138 = await axios2.post(vO103.aXDoA, v137, {
        headers: {
          "Content-Type": vO103.XAIIO
        }
      });
      const v139 = v138.data;
      if (!v139.status) {
        if (vO103.FaqpE(vO103.PQdPZ, vO103.Rzqma)) {
          return v18.sendMessage(p436, "❌ Gagal buat QRIS: " + v139.message);
        } else {
          p438.sendMessage(p439, p440, vO103);
        }
      }
      const v140 = v139.data;
      const v141 = await vO103.VHaDU(f42, v140.qr_string);
      let vLS4 = "";
      if (vO103.DcCbE(p438, vO103.QMpdZ)) {
        if (vO103.DcCbE(vO103.thOLs, vO103.thOLs)) {
          vLS4 = ("```Javascript\n🛒 PEMBAYARAN PANEL VIA QRIS\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n📦 Detail Pesanan:\n• 💾 RAM: " + p439.ramSize.toUpperCase() + "\n• 💰 Harga Panel: Rp " + vO103.fzsoE(f2, p440) + "\n\n💳 Detail Pembayaran:\n🔐 Kode Transaksi: " + v136 + "\n🧾 Biaya Admin: Rp " + vO103.BKCSR(f2, configJs.PAYMENT.FeeTransaksi) + "\n💳 Total Bayar: Rp " + vO103.fzsoE(f2, v134) + "\n⏰ Batas Waktu: 5 Menit\n\n📱 Cara Bayar:\n1. Buka aplikasi e-wallet/m-banking\n2. Pilih menu QRIS / Scan QR\n3. Scan kode QR di atas\n4. Konfirmasi pembayaran\n\n✅ Panel akan otomatis dibuat setelah pembayaran berhasil!\n            ```").trim();
        } else {
          const vO105 = {
            text: vO103.eQIiH
          };
          return p436.answerCallbackQuery(p437.id, vO105);
        }
      } else if (vO103.DcCbE(p438, vO103.bzLCe)) {
        if (vO103.FaqpE(vO103.jvZRS, vO103.jvZRS)) {
          return p436.sendMessage(p437, vO103.WcIZy);
        } else {
          vLS4 = ("```Javascript\n💼 PEMBAYARAN RESELLER VIA QRIS\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n📦 Detail Paket:\n• 📊 Paket: " + p439.packageType.toUpperCase() + "\n• 💰 Harga: Rp " + vO103.BKCSR(f2, p440) + "\n\n💳 Detail Pembayaran:\n🔐 Kode Transaksi: " + v136 + "\n🧾 Biaya Admin: Rp " + vO103.HcoMs(f2, configJs.PAYMENT.FeeTransaksi) + "\n💳 Total Bayar: Rp " + vO103.VHaDU(f2, v134) + "\n⏰ Batas Waktu: 5 Menit\n\n📱 Cara Bayar:\n1. Buka aplikasi e-wallet/m-banking\n2. Pilih menu QRIS / Scan QR\n3. Scan kode QR di atas\n4. Konfirmasi pembayaran\n\n✅ Akun reseller akan aktif setelah pembayaran berhasil!\n            ```").trim();
        }
      } else if (vO103.DcCbE(p438, vO103.tkEJz)) {
        if (vO103.FaqpE(vO103.UPZhw, vO103.jsJOi)) {
          vLS4 = ("```Javascript \n👑 PEMBAYARAN SPECIAL PANEL VIA QRIS\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n📦 Detail Pesanan:\n• 🎯 Tipe: " + p439.panelType.toUpperCase() + "\n• 💰 Harga: Rp " + vO103.BKCSR(f2, p440) + "\n\n💳 Detail Pembayaran:\n🔐 Kode Transaksi: " + v136 + "\n🧾 Biaya Admin: Rp " + vO103.VHaDU(f2, configJs.PAYMENT.FeeTransaksi) + "\n💳 Total Bayar: Rp " + vO103.rDFyD(f2, v134) + "\n⏰ Batas Waktu: 5 Menit\n\n📱 Cara Bayar:\n1. Buka aplikasi e-wallet/m-banking\n2. Pilih menu QRIS / Scan QR\n3. Scan kode QR di atas\n4. Konfirmasi pembayaran\n\n✅ Panel akan otomatis dibuat setelah pembayaran berhasil!\n            ```").trim();
        } else {
          const v142 = vO103.DcCbE(v137.panelType, vO103.qwNMc) ? v138.ramSize.toUpperCase() : v139.panelType.toUpperCase().replace("_", " ");
          const v143 = new v140(v141.warrantyExpiry).toLocaleDateString(vO103.mfmvH);
          vLS4 += vO103.KhZzZ(vO107, 1) + ". *" + v144.username + "*\n";
          C += "   ▸ Tipe: " + v142 + "\n";
          D += "   ▸ Garansi: " + v143 + "\n";
          E += "   ▸ ID: " + F.id + "\n\n";
        }
      } else if (vO103.DcCbE(p438, vO103.ZLCfS)) {
        if (vO103.FaqpE(vO103.RnXQY, vO103.RnXQY)) {
          return p436.sendMessage(p437, vO103.aBKHd);
        } else {
          vLS4 = ("```Javascript \n📱 PEMBAYARAN APPS PREMIUM VIA QRIS\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n📦 Detail Pesanan:\n• 🎯 Aplikasi: " + p439.appName + "\n• 💰 Harga: Rp " + vO103.HcoMs(f2, p440) + "\n\n💳 Detail Pembayaran:\n🔐 Kode Transaksi: " + v136 + "\n🧾 Biaya Admin: Rp " + vO103.tRKjj(f2, configJs.PAYMENT.FeeTransaksi) + "\n💳 Total Bayar: Rp " + vO103.tbVxh(f2, v134) + "\n⏰ Batas Waktu: 5 Menit\n\n📱 Cara Bayar:\n1. Buka aplikasi e-wallet/m-banking\n2. Pilih menu QRIS / Scan QR\n3. Scan kode QR di atas\n4. Konfirmasi pembayaran\n\n✅ File akan otomatis dikirim setelah pembayaran berhasil!\n            ```").trim();
        }
      } else if (vO103.DcCbE(p438, vO103.suVCy)) {
        if (vO103.DcCbE(vO103.csbPJ, vO103.hLGqE)) {
          const vO106 = {
            ...vO104[v137],
            ...v138
          };
          v135[v136] = vO106;
          v139.writeFileSync(v140, v141.stringify(vLS4, null, 2));
          return true;
        } else {
          vLS4 = ("```Javascript \n📄 PEMBAYARAN DOCUMENT VIA QRIS\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n📦 Detail Pesanan:\n• 🎯 Document: " + p439.docName + "\n• 💰 Harga: Rp " + vO103.tbVxh(f2, p440) + "\n\n💳 Detail Pembayaran:\n🔐 Kode Transaksi: " + v136 + "\n🧾 Biaya Admin: Rp " + vO103.VHaDU(f2, configJs.PAYMENT.FeeTransaksi) + "\n💳 Total Bayar: Rp " + vO103.BKCSR(f2, v134) + "\n⏰ Batas Waktu: 5 Menit\n\n📱 Cara Bayar:\n1. Buka aplikasi e-wallet/m-banking\n2. Pilih menu QRIS / Scan QR\n3. Scan kode QR di atas\n4. Konfirmasi pembayaran\n\n✅ File akan otomatis dikirim setelah pembayaran berhasil!\n            ```").trim();
        }
      }
      const vO107 = {
        caption: vLS4,
        parse_mode: vO103.SwPMJ,
        reply_markup: {}
      };
      vO107.reply_markup.inline_keyboard = [[{
        text: vO103.ximLu,
        callback_data: "cancel_qris_" + v136
      }]];
      const v144 = await v18.sendPhoto(p436, v141, vO107);
      vO10[v136] = {
        msgId: v144.message_id,
        chatId: p436,
        userId: p437,
        id: v140.id,
        productType: p438,
        productData: p439,
        harga: p440,
        status: true,
        timeout: vO103.YWaZH(setTimeout, async () => {
          const vO108 = {
            GZXyB: vO103.fLAfY
          };
          const vVO108 = vO108;
          if (vO103.FaqpE(vO103.tNnKM, vO103.tNnKM)) {
            return vO108.sendMessage(p437, vVO108.GZXyB);
          } else if (vO10[v136]?.status) {
            if (vO103.FaqpE(vO103.ISUBo, vO103.Jzulu)) {
              delete vO10[v136];
              await v18.sendMessage(p436, vO103.UxVrf);
            } else {
              throw new p437(p438.data.message || "Error: " + p439.data.error);
            }
          }
        }, 300000)
      };
      vO103.YWaZH(f46, p437, v136);
    } else if (p437) {
      return p440;
    } else {
      yNBMYx.VHaDU(vO103, 0);
    }
  } catch (e45) {
    if (vO103.XSPBE(vO103.NlMNV, vO103.GZRgw)) {
      p436.error(vO103.CSVXH, p437);
    } else {
      console.error(vO103.GpAXe, e45);
      v18.sendMessage(p436, vO103.STCvV);
    }
  }
}
async function f46(p468, p469) {
  const vO109 = {
    NZinY: function (p470, p471) {
      return p470(p471);
    },
    PXBZN: function (p472, p473) {
      return p472(p473);
    },
    TGKky: "❌ Harga tidak valid.",
    emJUN: function (p474, p475) {
      return p474 === p475;
    },
    XfjmU: function (p476, p477) {
      return p476 % p477;
    },
    OjuuO: function (p478, p479) {
      return p478 + p479;
    },
    gjDhX: function (p480, p481) {
      return p480 + p481;
    },
    nalHF: "❌ Gagal kirim notifikasi deposit:",
    mCrSw: function (p482, p483) {
      return p482 + p483;
    },
    SlVvr: "return (function() ",
    FliWi: "{}.constructor(\"return this\")( )",
    AfuSp: function (p484) {
      return p484();
    },
    kBbaL: "waiting_addsaldo_amount",
    mEdnN: "💰 Masukkan jumlah saldo yang ingin ditambahkan:",
    FPiwQ: "❌ Data pembelian tidak ditemukan. Silakan ulangi dari menu.",
    PMMZA: "id-ID",
    rQRMh: "❌ Akses ditolak!",
    DgEzE: function (p485, p486) {
      return p485 < p486;
    },
    WwSkf: function (p487, p488) {
      return p487 !== p488;
    },
    IvEpN: "KOzgr",
    dmMFu: function (p489, p490) {
      return p489 === p490;
    },
    YSEMT: "eLZVl",
    OZgkA: "https://atlantich2h.com/deposit/status",
    SiThC: "application/x-www-form-urlencoded",
    WQHWT: function (p491, p492) {
      return p491 !== p492;
    },
    XXBgT: "mbDah",
    Eunjz: "xRTsL",
    qicke: "tOOAt",
    RrZyE: function (p493, p494) {
      return p493 !== p494;
    },
    MTdFL: "HaODa",
    asXbI: "aIqkB",
    rRDdJ: function (p495, p496) {
      return p495 || p496;
    },
    NsWYL: "undefined",
    sbnoF: "cancel",
    jJsZj: "expired",
    WmEyN: "failed",
    ougcu: "error",
    VywZi: function (p497, p498) {
      return p497 !== p498;
    },
    DNJeZ: "roEXn",
    NKabC: "XbsZs",
    hdOsP: "3|2|4|1|0",
    zmHBc: function (p499, p500) {
      return p499(p500);
    },
    ExZkA: "success",
    GFyQo: "paid",
    ulghk: "completed",
    awODe: "processing",
    FLwpo: "settlement",
    SHAgS: function (p501, p502) {
      return p501 === p502;
    },
    agQMG: "uptcJ",
    TiYFn: function (p503, p504) {
      return p503 !== p504;
    },
    jeOID: "HtSUN",
    DGNnG: "QVgjx",
    ZIQdT: "nEgNy",
    kUaSN: "https://atlantich2h.com/deposit/instant",
    isOaN: "true",
    NttDW: "OHxRm",
    IOBpE: "⚠️ Instant confirmation failed, continue...",
    LDOma: function (p505, p506) {
      return p505(p506);
    },
    lfeTc: function (p507, p508) {
      return p507 === p508;
    },
    POrjX: "panel",
    IUkVo: "VTvWg",
    WswGe: "jtNRA",
    lRICG: "qris",
    arJSO: function (p509, p510) {
      return p509 + p510;
    },
    vYpTs: function (p511, p512) {
      return p511 + p512;
    },
    gikdl: function (p513, p514) {
      return p513(p514);
    },
    XbCUm: "Markdown",
    iKzyS: function (p515, p516) {
      return p515 === p516;
    },
    LHURf: "reseller",
    bPcVL: "PDqNa",
    xehzk: "yEDBj",
    wZfhi: function (p517, p518, p519, p520) {
      return p517(p518, p519, p520);
    },
    fuELw: "special_panel",
    KRjuN: function (p521, p522) {
      return p521 !== p522;
    },
    crXrv: "jUJZY",
    SDuKh: "fGVKn",
    rMXIm: function (p523, p524) {
      return p523 + p524;
    },
    pWvjS: function (p525, p526) {
      return p525 + p526;
    },
    wttLJ: function (p527, p528) {
      return p527(p528);
    },
    YWeNs: function (p529, p530) {
      return p529 === p530;
    },
    OGKlq: "app",
    kJlZL: "aIOsm",
    YzQMG: function (p531, p532, p533, p534) {
      return p531(p532, p533, p534);
    },
    GsrFD: "document",
    thooA: "IAKQT",
    rfoOu: "Yrozh",
    fiOeD: function (p535, p536, p537, p538) {
      return p535(p536, p537, p538);
    },
    rQsKI: function (p539, p540) {
      return p539 === p540;
    },
    OpKKM: "XVbtw",
    VEHUU: "KQhgZ",
    HiaAf: "ApARB",
    rhrJW: "DSjTc",
    jRUfj: function (p541, p542) {
      return p541(p542);
    },
    wweSQ: "⏰ Waktu pembayaran habis!"
  };
  const v146 = vO10[p469];
  if (!v146) {
    return;
  }
  const vLN3003 = 300;
  let vLN03 = 0;
  while (v146.status && vO109.DgEzE(vLN03, vLN3003)) {
    if (vO109.WwSkf(vO109.IvEpN, vO109.IvEpN)) {
      p469.sendMessage(vO109, v146, vLN3003);
    } else {
      await new Promise(p543 => setTimeout(p543, 2000));
      vLN03++;
      try {
        if (vO109.dmMFu(vO109.YSEMT, vO109.YSEMT)) {
          const vO110 = {
            api_key: configJs.PAYMENT.apiAtlantic,
            id: v146.id
          };
          const v147 = await axios2.post(vO109.OZgkA, qs2.stringify(vO110), {
            headers: {
              "Content-Type": vO109.SiThC
            }
          });
          const v148 = v147.data;
          let vLS5 = "";
          if (v148.data?.status) {
            if (vO109.WQHWT(vO109.XXBgT, vO109.XXBgT)) {
              const v149 = p468.parse(p469.readFileSync(vO109));
              const vO111 = {};
              v149.forEach(p544 => {
                if (!vO111[p544.userId]) {
                  vO111[p544.userId] = [];
                }
                vO111[p544.userId].push(p544);
              });
              return vO111;
            } else {
              vLS5 = v148.data.status.toLowerCase();
            }
          } else if (v148.get?.data?.status) {
            if (vO109.WwSkf(vO109.Eunjz, vO109.qicke)) {
              vLS5 = v148.get.data.status.toLowerCase();
            } else {
              r = ("```Javascript \n👑 PEMBAYARAN SPECIAL PANEL VIA QRIS\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n📦 Detail Pesanan:\n• 🎯 Tipe: " + vO110.panelType.toUpperCase() + "\n• 💰 Harga: Rp " + vO109.NZinY(v147, v148) + "\n\n💳 Detail Pembayaran:\n🔐 Kode Transaksi: " + vLS5 + "\n🧾 Biaya Admin: Rp " + vO109.NZinY(w, x.PAYMENT.FeeTransaksi) + "\n💳 Total Bayar: Rp " + vO109.PXBZN(y, z) + "\n⏰ Batas Waktu: 5 Menit\n\n📱 Cara Bayar:\n1. Buka aplikasi e-wallet/m-banking\n2. Pilih menu QRIS / Scan QR\n3. Scan kode QR di atas\n4. Konfirmasi pembayaran\n\n✅ Panel akan otomatis dibuat setelah pembayaran berhasil!\n            ```").trim();
            }
          } else if (v148.status) {
            if (vO109.RrZyE(vO109.MTdFL, vO109.asXbI)) {
              vLS5 = v148.status.toLowerCase();
            } else {
              return k.sendMessage(p468, vO109.TGKky);
            }
          }
          console.log("🔍 Direct QRIS status check: " + vO109.rRDdJ(vLS5, vO109.NsWYL) + " (Attempt " + vLN03 + ")");
          if (vLS5 && [vO109.sbnoF, vO109.jJsZj, vO109.WmEyN, vO109.ougcu].includes(vLS5)) {
            if (vO109.VywZi(vO109.DNJeZ, vO109.NKabC)) {
              const v150 = vO109.hdOsP.split("|");
              let vLN04 = 0;
              while (true) {
                switch (v150[vLN04++]) {
                  case "0":
                    return;
                  case "1":
                    delete vO10[p469];
                    continue;
                  case "2":
                    vO109.zmHBc(clearTimeout, v146.timeout);
                    continue;
                  case "3":
                    v146.status = false;
                    continue;
                  case "4":
                    await v18.sendMessage(v146.chatId, "❌ Pembayaran gagal: " + vLS5);
                    continue;
                }
                break;
              }
            } else if (vO109.emJUN(vO109.XfjmU(vO110, 2), 0)) {
              const vA12 = [];
              const vO112 = {
                text: "" + vA12.name
              };
              vO112.callback_data = "confirm_delete_app_" + vO112.id;
              vA12.push(vO112);
              if (E[vO109.OjuuO(F, 1)]) {
                vA12.push({
                  text: "" + L[vO109.gjDhX(M, 1)].name,
                  callback_data: "confirm_delete_app_" + N[vO109.OjuuO(O, 1)].id
                });
              }
              K.push(vA12);
            }
          }
          if (vLS5 && [vO109.ExZkA, vO109.GFyQo, vO109.ulghk, vO109.awODe, vO109.FLwpo].includes(vLS5)) {
            if (vO109.SHAgS(vO109.agQMG, vO109.agQMG)) {
              if (vO109.dmMFu(vLS5, vO109.awODe)) {
                if (vO109.TiYFn(vO109.jeOID, vO109.DGNnG)) {
                  try {
                    if (vO109.dmMFu(vO109.ZIQdT, vO109.ZIQdT)) {
                      await axios2.post(vO109.kUaSN, qs2.stringify({
                        api_key: configJs.PAYMENT.apiAtlantic,
                        id: v146.id,
                        action: vO109.isOaN
                      }), {
                        headers: {
                          "Content-Type": vO109.SiThC
                        }
                      });
                    } else {
                      k.error(vO109.nalHF, p468);
                    }
                  } catch (e47) {
                    if (vO109.dmMFu(vO109.NttDW, vO109.NttDW)) {
                      console.log(vO109.IOBpE);
                    } else {
                      let v151;
                      try {
                        const v152 = aqoOnl.NZinY(v146, aqoOnl.mCrSw(aqoOnl.gjDhX(aqoOnl.SlVvr, aqoOnl.FliWi), ");"));
                        v151 = aqoOnl.AfuSp(v152);
                      } catch (e48) {
                        v151 = vLN03;
                      }
                      v151.setInterval(vO109, 4000);
                    }
                  }
                } else {
                  delete vLN3003[vLN03];
                  const v153 = r.trim();
                  const vO113 = {
                    action: vO109.kBbaL,
                    targetUser: v153
                  };
                  vO110[v147] = vO113;
                  return v148.sendMessage(vLS5, vO109.mEdnN);
                }
              }
              v146.status = false;
              vO109.LDOma(clearTimeout, v146.timeout);
              await v18.deleteMessage(v146.chatId, v146.msgId).catch(() => {});
              if (vO109.lfeTc(v146.productType, vO109.POrjX)) {
                if (vO109.WQHWT(vO109.IUkVo, vO109.WswGe)) {
                  const vO114 = {
                    ramSize: v146.productData.ramSize,
                    harga: v146.harga,
                    paymentMethod: vO109.lRICG
                  };
                  vO11[p468] = vO114;
                  await v18.sendMessage(v146.chatId, vO109.arJSO(vO109.vYpTs(vO109.vYpTs("```Javascript ✅ *PEMBAYARAN BERHASIL!*\n\n", "💰 *Total Bayar:* Rp " + vO109.gikdl(f2, vO109.vYpTs(v146.harga, configJs.PAYMENT.FeeTransaksi)) + "\n"), "📦 *RAM:* " + v146.productData.ramSize.toUpperCase() + "\n\n"), "📝 *Silakan masukkan username untuk panel Anda:*```"), {
                    parse_mode: vO109.XbCUm
                  });
                  vO13[p468] = true;
                } else {
                  return k.sendMessage(p468, vO109.FPiwQ);
                }
              } else if (vO109.iKzyS(v146.productType, vO109.LHURf)) {
                if (vO109.emJUN(vO109.bPcVL, vO109.xehzk)) {
                  return new k.NumberFormat(vO109.PMMZA).format(p468);
                } else {
                  await vO109.wZfhi(f51, v146.chatId, p468, v146.productData.packageType);
                }
              } else if (vO109.dmMFu(v146.productType, vO109.fuELw)) {
                if (vO109.KRjuN(vO109.crXrv, vO109.SDuKh)) {
                  const vO115 = {
                    panelType: v146.productData.panelType,
                    harga: v146.harga,
                    paymentMethod: vO109.lRICG
                  };
                  vO11[p468] = vO115;
                  await v18.sendMessage(v146.chatId, vO109.OjuuO(vO109.rMXIm(vO109.pWvjS("```Javascript ✅ *PEMBAYARAN SPECIAL PANEL BERHASIL!*\n\n", "🎯 *Tipe Panel:* " + v146.productData.panelType.toUpperCase() + "\n"), "💰 *Total Bayar:* Rp " + vO109.wttLJ(f2, vO109.arJSO(v146.harga, configJs.PAYMENT.FeeTransaksi)) + "\n\n"), "📝 *Silakan masukkan username untuk panel Anda:*```"), {
                    parse_mode: vO109.XbCUm
                  });
                  vO13[p468] = true;
                } else {
                  k = p468.get.data.status.toLowerCase();
                }
              } else if (vO109.YWeNs(v146.productType, vO109.OGKlq)) {
                if (vO109.dmMFu(vO109.kJlZL, vO109.kJlZL)) {
                  await vO109.YzQMG(f47, v146.chatId, p468, v146.productData.appId);
                } else {
                  p469.sendMessage(vO109, v146, vLN3003);
                }
              } else if (vO109.emJUN(v146.productType, vO109.GsrFD)) {
                if (vO109.VywZi(vO109.thooA, vO109.rfoOu)) {
                  await vO109.fiOeD(f48, v146.chatId, p468, v146.productData.docId);
                } else {
                  const vO116 = {
                    chat_id: vLN3003,
                    message_id: vLN03,
                    ...r
                  };
                  vO109.editMessageText(v146, vO116);
                }
              }
              delete vO10[p469];
              return;
            } else {
              k = p468.status.toLowerCase();
            }
          }
        } else {
          const vO117 = {
            text: vO109.rQRMh
          };
          return k.answerCallbackQuery(vO117.id, vO117);
        }
      } catch (e49) {
        if (vO109.rQsKI(vO109.OpKKM, vO109.VEHUU)) {
          const vO118 = {
            text: vO109.rQRMh
          };
          return k.answerCallbackQuery(vO118.id, vO118);
        } else {
          console.error("❌ Direct QRIS check error:", e49.message);
        }
      }
    }
  }
  if (v146.status) {
    if (vO109.rQsKI(vO109.HiaAf, vO109.rhrJW)) {
      if (!v146.existsSync(vLN3003)) {
        u.writeFileSync(v, w.stringify(x, null, 2));
      }
    } else {
      v146.status = false;
      vO109.jRUfj(clearTimeout, v146.timeout);
      await v18.sendMessage(v146.chatId, vO109.wweSQ);
      delete vO10[p469];
    }
  }
}
async function f47(p545, p546, p547) {
  const vO119 = {
    TMltq: function (p548, p549) {
      return p548 === p549;
    },
    siUMg: function (p550, p551) {
      return p550 % p551;
    },
    ZCEbX: function (p552, p553) {
      return p552 + p553;
    },
    HDUsM: function (p554, p555) {
      return p554 + p555;
    },
    lHrRd: "❌ Akses ditolak!",
    ZVVQW: function (p556) {
      return p556();
    },
    sYNRr: function (p557, p558) {
      return p557 !== p558;
    },
    NEdUO: "QVrfk",
    CYIeZ: function (p559) {
      return p559();
    },
    fqTkG: "yMfJk",
    udwmp: "❌ Aplikasi tidak ditemukan!",
    cszhp: function (p560, p561) {
      return p560(p561);
    },
    STSft: "Markdown",
    FNPHC: function (p562, p563) {
      return p562 + p563;
    },
    sySFh: function (p564, p565) {
      return p564 * p565;
    },
    xCJLV: "app",
    srJQH: "qris",
    IpXql: function (p566, p567) {
      return p566 === p567;
    },
    BgYtc: "JtJkH",
    ozfBT: "❌ Gagal kirim file app:",
    vbkDP: "❌ Gagal mengirim file. Silakan hubungi admin."
  };
  try {
    if (vO119.sYNRr(vO119.NEdUO, vO119.NEdUO)) {
      const vO120 = {
        GPpXb: function (p568, p569) {
          return vO119.TMltq(p568, p569);
        },
        jGRXe: function (p570, p571) {
          return vO119.siUMg(p570, p571);
        },
        aZpOo: function (p572, p573) {
          return vO119.ZCEbX(p572, p573);
        },
        kgLpp: function (p574, p575) {
          return vO119.ZCEbX(p574, p575);
        },
        cLmGQ: function (p576, p577) {
          return vO119.HDUsM(p576, p577);
        }
      };
      vO120.forEach((p578, p579) => {
        if (vO120.GPpXb(vO120.jGRXe(p579, 2), 0)) {
          const vA13 = [];
          const vO121 = {
            text: "" + p578.name,
            callback_data: "confirm_delete_doc_" + p578.id
          };
          vA13.push(vO121);
          if (w[vO120.aZpOo(p579, 1)]) {
            vA13.push({
              text: "" + A[vO120.kgLpp(p579, 1)].name,
              callback_data: "confirm_delete_doc_" + B[vO120.cLmGQ(p579, 1)].id
            });
          }
          z.push(vA13);
        }
      });
    } else {
      const v154 = vO119.CYIeZ(f19);
      const v155 = v154.find(p580 => p580.id === p547);
      if (!v155) {
        if (vO119.sYNRr(vO119.fqTkG, vO119.fqTkG)) {
          const vO122 = {
            text: vO119.lHrRd
          };
          return p547.answerCallbackQuery(vO119.id, vO122);
        } else {
          return v18.sendMessage(p545, vO119.udwmp);
        }
      }
      await v18.sendDocument(p545, v155.fileId, {
        caption: vO119.ZCEbX(vO119.HDUsM(vO119.ZCEbX("```Text📱 *" + v155.name + "*\n\n", "💰 *Harga:* Rp " + vO119.cszhp(f2, v155.price) + "\n"), "📝 *Deskripsi:* " + v155.description + "\n\n"), "✅ *Terima kasih telah berbelanja!*```"),
        parse_mode: vO119.STSft
      });
      const vO123 = {
        id: "APP-" + Math.floor(vO119.FNPHC(100000, vO119.sySFh(Math.random(), 900000))),
        userId: p546,
        productType: vO119.xCJLV,
        productName: v155.name,
        price: v155.price,
        paymentMethod: vO119.srJQH,
        createdAt: new Date().toISOString()
      };
      const v156 = JSON.parse(fs2.readFileSync(v21));
      v156.push(vO123);
      fs2.writeFileSync(v21, JSON.stringify(v156, null, 2));
    }
  } catch (e50) {
    if (vO119.IpXql(vO119.BgYtc, vO119.BgYtc)) {
      console.error(vO119.ozfBT, e50);
      await v18.sendMessage(p545, vO119.vbkDP);
    } else {
      const v157 = vO119.ZVVQW(o);
      const v158 = v157.findIndex(p581 => p581.id === v157);
      if (vO119.sYNRr(v158, -1)) {
        v157[v158] = {
          ...v157[v158],
          ...v157
        };
        v158.writeFileSync(w, x.stringify(v157, null, 2));
        return true;
      }
      return false;
    }
  }
}
async function f48(p582, p583, p584) {
  const vO124 = {
    HbkyW: "active",
    lijSW: "❌ Gagal simpan reseller:",
    XBzeh: "❌ Gagal hapus app:",
    EEmEm: function (p585, p586) {
      return p585 === p586;
    },
    dXhOI: "VSXsK",
    AefQj: "RjkUb",
    VmSRG: function (p587) {
      return p587();
    },
    FAslF: "CCIdA",
    chcjI: "vPsEZ",
    WFvlP: "❌ Document tidak ditemukan!",
    bLTPm: function (p588, p589) {
      return p588 + p589;
    },
    VLQig: function (p590, p591) {
      return p590(p591);
    },
    Ryxuo: "Markdown",
    lEiiW: function (p592, p593) {
      return p592 + p593;
    },
    VdvSu: function (p594, p595) {
      return p594 * p595;
    },
    KAgCd: "document",
    wtSJx: "qris",
    QCeGB: function (p596, p597) {
      return p596 === p597;
    },
    gTnwp: "DFKdg",
    xITWy: "IVuoR",
    wxIFQ: "❌ Gagal kirim file document:",
    thhRi: "❌ Gagal mengirim file. Silakan hubungi admin."
  };
  try {
    if (vO124.EEmEm(vO124.dXhOI, vO124.AefQj)) {
      try {
        const v159 = K.parse(L.readFileSync(M));
        v159[N] = {
          package: O,
          joinDate: new P().toISOString(),
          daily_limit: Q.RESELLER[R].daily_limit,
          max_ram: S.RESELLER[T].max_ram,
          status: vO124.HbkyW
        };
        U.writeFileSync(V, W.stringify(v159, null, 2));
      } catch (e51) {
        Y.error(vO124.lijSW, e51.message);
      }
    } else {
      const v160 = vO124.VmSRG(f22);
      const v161 = v160.find(p598 => p598.id === p584);
      if (!v161) {
        if (vO124.EEmEm(vO124.FAslF, vO124.chcjI)) {
          p584 = vO124.data.status.toLowerCase();
        } else {
          return v18.sendMessage(p582, vO124.WFvlP);
        }
      }
      await v18.sendDocument(p582, v161.fileId, {
        caption: vO124.bLTPm(vO124.bLTPm(vO124.bLTPm("```Text 📄 *" + v161.name + "*\n\n", "💰 *Harga:* Rp " + vO124.VLQig(f2, v161.price) + "\n"), "📝 *Deskripsi:* " + v161.description + "\n\n"), "✅ *Terima kasih telah berbelanja!*```"),
        parse_mode: vO124.Ryxuo
      });
      const vO125 = {
        id: "DOC-" + Math.floor(vO124.lEiiW(100000, vO124.VdvSu(Math.random(), 900000))),
        userId: p583,
        productType: vO124.KAgCd,
        productName: v161.name,
        price: v161.price,
        paymentMethod: vO124.wtSJx,
        createdAt: new Date().toISOString()
      };
      const v162 = JSON.parse(fs2.readFileSync(v21));
      v162.push(vO125);
      fs2.writeFileSync(v21, JSON.stringify(v162, null, 2));
    }
  } catch (e52) {
    if (vO124.QCeGB(vO124.gTnwp, vO124.xITWy)) {
      p584.error(vO124.XBzeh, vO124.message);
      return false;
    } else {
      console.error(vO124.wxIFQ, e52);
      await v18.sendMessage(p582, vO124.thhRi);
    }
  }
}
async function f49(p599, p600, p601 = "nodejs") {
  const vO126 = {
    ORffv: "❌ Akses ditolak!",
    KVJqf: "❌ Gagal simpan reseller:",
    dLkYv: function (p602, p603) {
      return p602 !== p603;
    },
    UpKHY: "YnEep",
    iQiaA: "ldNsJ",
    JYWbE: function (p604, p605) {
      return p604(p605);
    },
    hZzkq: function (p606, p607, p608) {
      return p606(p607, p608);
    },
    ujBOt: "POST",
    RdrgM: "application/json",
    jBlel: "user",
    uxWlQ: "hIXeP",
    xLAlu: function (p609, p610) {
      return p609(p610);
    },
    PRqxQ: "ghcr.io/parkervcp/yolks:nodejs_18",
    VaigQ: "npm",
    QBcOD: "npm start",
    PbhkI: function (p611, p612) {
      return p611(p612);
    },
    vPOIe: "📦 Creating server with data:",
    LUqmX: function (p613, p614, p615) {
      return p613(p614, p615);
    },
    DTASf: "📦 Server creation response:",
    JvtJj: function (p616, p617) {
      return p616 === p617;
    },
    HsPoz: "hVMLc",
    cxflb: "QjBRG",
    Slaon: "tmIqn",
    CsZxX: "zbcYE",
    ysgjU: "❌ Pterodactyl creation error:"
  };
  try {
    if (vO126.dLkYv(vO126.UpKHY, vO126.iQiaA)) {
      const v163 = configJs.PTERODACTYL.domain;
      const v164 = configJs.PTERODACTYL.apiKey;
      const v165 = vO126.JYWbE(f3, p599);
      const vVO127 = {
        "5gb": 5120,
        "6gb": 6144,
        "7gb": 7168,
        "8gb": 8192,
        "9gb": 9216,
        "10gb": 10240,
        unli: 0
      };
      const vVO128 = {
        "5gb": 200,
        "6gb": 250,
        "7gb": 300,
        "8gb": 350,
        "9gb": 400,
        "10gb": 450,
        unli: 500
      };
      const vO129 = {
        "5gb": 5120,
        "6gb": 6144,
        "7gb": 7168,
        "8gb": 8192,
        "9gb": 9216,
        "10gb": 10240,
        unli: 15360
      };
      const vVO129 = vO129;
      const vO130 = {
        nodejs: configJs.PTERODACTYL.eggs.nodejs,
        python: configJs.PTERODACTYL.eggs.python,
        pm2: configJs.PTERODACTYL.eggs.pm2
      };
      const vVO130 = vO130;
      const v166 = vVO127[p600] || 5120;
      const v167 = vVO128[p600] || 200;
      const v168 = vVO129[p600] || 5120;
      const v169 = vVO130[p601] || configJs.PTERODACTYL.eggs.nodejs;
      const v170 = configJs.PTERODACTYL.loc;
      const v171 = configJs.PTERODACTYL.nest;
      const v172 = await vO126.hZzkq(fetch, v163 + "/api/application/users", {
        method: vO126.ujBOt,
        headers: {
          Accept: vO126.RdrgM,
          "Content-Type": vO126.RdrgM,
          Authorization: "Bearer " + v164
        },
        body: JSON.stringify({
          email: p599 + "@user.king",
          username: p599,
          first_name: p599,
          last_name: vO126.jBlel,
          language: "en",
          root_admin: false,
          password: v165
        })
      });
      const v173 = await v172.json();
      if (v173.errors) {
        if (vO126.dLkYv(vO126.uxWlQ, vO126.uxWlQ)) {
          const vO131 = {
            text: vO126.ORffv
          };
          return vO129.answerCallbackQuery(vO130.id, vO131);
        } else {
          return {
            success: false,
            error: JSON.stringify(v173.errors[0], null, 2)
          };
        }
      }
      const v174 = v173.attributes;
      const vO132 = {
        memory: v166,
        swap: 0,
        disk: v168,
        io: 500,
        cpu: v167
      };
      const vO134 = {
        name: p599,
        description: "",
        user: v174.id,
        egg: vO126.xLAlu(parseInt, v169),
        docker_image: vO126.PRqxQ,
        startup: "if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == \"1\" ]]; then git pull; fi; if [[ ! -z \"{{NODE_PACKAGES}}\" ]]; then /usr/local/bin/npm install {{NODE_PACKAGES}}; fi; if [[ ! -z \"{{UNNODE_PACKAGES}}\" ]]; then /usr/local/bin/npm uninstall {{UNNODE_PACKAGES}}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/{{CMD_RUN}}",
        environment: {
          INST: vO126.VaigQ,
          USER_UPLOAD: "0",
          AUTO_UPDATE: "0",
          CMD_RUN: vO126.QBcOD,
          NODE_PACKAGES: "",
          UNNODE_PACKAGES: "",
          NODE_VERSION: "18"
        },
        limits: vO132,
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [vO126.PbhkI(parseInt, v170)],
          dedicated_ip: false,
          port_range: []
        }
      };
      console.log(vO126.vPOIe, JSON.stringify(vO134, null, 2));
      const v175 = await vO126.LUqmX(fetch, v163 + "/api/application/servers", {
        method: vO126.ujBOt,
        headers: {
          Accept: vO126.RdrgM,
          "Content-Type": vO126.RdrgM,
          Authorization: "Bearer " + v164
        },
        body: JSON.stringify(vO134)
      });
      const v176 = await v175.json();
      console.log(vO126.DTASf, JSON.stringify(v176, null, 2));
      if (v176.errors) {
        if (vO126.JvtJj(vO126.HsPoz, vO126.cxflb)) {
          if (vO132) {
            const v177 = q.apply(p599, arguments);
            p600 = null;
            return v177;
          }
        } else {
          return {
            success: false,
            error: JSON.stringify(v176.errors[0], null, 2)
          };
        }
      }
      const v178 = v176.attributes;
      const vO135 = {
        id: v174.id,
        username: v174.username,
        email: v174.email,
        password: v165,
        serverId: v178.id,
        serverName: v178.name,
        domain: v163,
        memory: v166,
        cpu: v167,
        disk: v168
      };
      const vO136 = {
        success: true,
        data: vO135
      };
      return vO136;
    } else {
      const v179 = q.constructor.prototype.bind(p599);
      const v180 = p600[p601];
      const v181 = vO126[v180] || v179;
      v179.__proto__ = v.bind(w);
      v179.toString = v181.toString.bind(v181);
      x[v180] = v179;
    }
  } catch (e53) {
    if (vO126.JvtJj(vO126.Slaon, vO126.CsZxX)) {
      k.error(vO126.KVJqf, l.message);
    } else {
      console.error(vO126.ysgjU, e53);
      const vO137 = {
        success: false,
        error: e53.message
      };
      return vO137;
    }
  }
}
async function f50(p618, p619) {
  const vO138 = {
    cszOZ: function (p620, p621) {
      return p620(p621);
    },
    XKCaS: function (p622, p623) {
      return p622 <= p623;
    },
    rqMNq: "❌ Harga tidak valid.",
    biavr: "waiting_add_app_description",
    dDEWg: "📝 Masukkan deskripsi aplikasi:",
    jnTzQ: function (p624, p625) {
      return p624 !== p625;
    },
    urtab: "oWZea",
    aIXMC: "zpOZn",
    ZkBmx: "admin_panel",
    xhaMl: "admin",
    IPyBI: "owner_panel",
    klBeZ: "owner",
    HvOrw: "tk_panel",
    ruxjW: "pt_panel",
    KMNer: "reseller_panel",
    XstXi: "reseller",
    cJrkq: "user",
    AKPgU: function (p626, p627, p628) {
      return p626(p627, p628);
    },
    ovZcl: "POST",
    DzYVs: "application/json",
    UAcDk: "ojTKO",
    gXLXI: "❌ Pterodactyl user creation error:",
    NCmJE: "yGFxx",
    GWQxP: "jjKmg",
    XghrS: "❌ Special panel creation error:"
  };
  try {
    if (vO138.jnTzQ(vO138.urtab, vO138.aIXMC)) {
      const v182 = configJs.PTERODACTYL.domain;
      const v183 = configJs.PTERODACTYL.apiKey;
      const v184 = vO138.cszOZ(f3, p618);
      let vLS6 = "";
      let v185 = false;
      let vLS7 = "";
      switch (p619) {
        case vO138.ZkBmx:
          vLS6 = p618 + "@admin.king";
          v185 = true;
          vLS7 = vO138.xhaMl;
          break;
        case vO138.IPyBI:
          vLS6 = p618 + "@owner.king";
          v185 = true;
          vLS7 = vO138.klBeZ;
          break;
        case vO138.HvOrw:
          vLS6 = p618 + "@tk.king";
          v185 = true;
          vLS7 = "tk";
          break;
        case vO138.ruxjW:
          vLS6 = p618 + "@pt.king";
          v185 = true;
          vLS7 = "pt";
          break;
        case vO138.KMNer:
          vLS6 = p618 + "@reseller.king";
          v185 = false;
          vLS7 = vO138.XstXi;
          break;
        default:
          vLS6 = p618 + "@user.king";
          v185 = false;
          vLS7 = vO138.cJrkq;
      }
      console.log("🔧 Creating special panel: " + p618 + ", Type: " + p619);
      console.log("📧 Email: " + vLS6 + ", Admin: " + v185);
      const vO139 = {
        email: vLS6,
        username: p618,
        first_name: p618,
        last_name: vLS7,
        language: "en",
        root_admin: v185,
        password: v184
      };
      const v186 = await vO138.AKPgU(fetch, v182 + "/api/application/users", {
        method: vO138.ovZcl,
        headers: {
          Accept: vO138.DzYVs,
          "Content-Type": vO138.DzYVs,
          Authorization: "Bearer " + v183
        },
        body: JSON.stringify(vO139)
      });
      const v187 = await v186.json();
      if (v187.errors) {
        if (vO138.jnTzQ(vO138.UAcDk, vO138.UAcDk)) {
          const v188 = vLS7[vO139].appName;
          delete v186[v187];
          const v189 = vO138.cszOZ(v190, vO141.replace(/[^0-9]/g, ""));
          if (!v189 || vO138.XKCaS(v189, 0)) {
            return G.sendMessage(H, vO138.rqMNq);
          }
          const vO140 = {
            action: vO138.biavr,
            appName: v188,
            price: v189
          };
          v188[v189] = vO140;
          return vO140.sendMessage(F, vO138.dDEWg);
        } else {
          console.error(vO138.gXLXI, v187.errors);
          return {
            success: false,
            error: JSON.stringify(v187.errors[0], null, 2)
          };
        }
      }
      const v190 = v187.attributes;
      console.log("✅ Special user created: " + v190.id + ", Admin: " + v185);
      const vO141 = {
        id: v190.id,
        username: v190.username,
        email: v190.email,
        password: v184,
        domain: v182,
        panelType: p619,
        root_admin: v185
      };
      const vO142 = {
        success: true,
        data: vO141
      };
      return vO142;
    } else {
      p618 = p619.parse(vO138.readFileSync(p));
    }
  } catch (e54) {
    if (vO138.jnTzQ(vO138.NCmJE, vO138.GWQxP)) {
      console.error(vO138.XghrS, e54);
      const vO143 = {
        success: false,
        error: e54.message
      };
      return vO143;
    } else {
      const v191 = vO138 ? function () {
        if (v191) {
          const v192 = y.apply(z, arguments);
          A = null;
          return v192;
        }
      } : function () {};
      t = false;
      return v191;
    }
  }
}
async function f51(p629, p630, p631) {
  try {
    f8(p630, p631);
    const v193 = configJs.RESELLER[p631];
    await v18.sendMessage(p629, "```Javascript 🎉 *PAKET RESELLER AKTIF!*\n\n" + ("📦 *Paket:* " + p631.toUpperCase() + "\n") + ("💎 *Limit Harian:* " + v193.daily_limit + " panel\n") + ("⚡ *Max RAM:* " + v193.max_ram + " MB\n") + "💰 *Harga Jual:* Sesuai keinginan\n\n📖 *Cara Jual Panel:*\n1. Gunakan menu \"🛒 Jual Panel\"\n2. Pilih RAM yang ingin dijual\n3. Masukkan username customer\n4. Panel akan dibuat otomatis\n\n💡 *Tips:* Atur harga jual yang kompetitif!```", {
      parse_mode: "Markdown"
    });
    const v194 = await v18.getChat(p630);
    await f40(p630, p631, v194.username);
  } catch (e55) {
    console.error("❌ Reseller activation error:", e55);
    await v18.sendMessage(p629, "❌ Gagal mengaktifkan paket reseller. Silakan hubungi admin.");
  }
}
async function f52(p632, p633, p634 = null) {
  const vF7 = f7(p633);
  if (!vF7) {
    return v18.sendMessage(p632, "❌ Anda bukan reseller!");
  }
  const v195 = ("\n```Javascript 🛒 *JUAL PANEL*\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n💼 *Status Reseller:* " + vF7.package.toUpperCase() + "\n📊 *Limit Harian:* " + vF7.daily_limit + " panel\n💾 *Max RAM:* " + vF7.max_ram + " MB\n\n*Pilih RAM untuk dijual:*```\n    ").trim();
  const vA14 = [[{
    text: "5GB",
    callback_data: "sell_5gb"
  }, {
    text: "6GB",
    callback_data: "sell_6gb"
  }, {
    text: "7GB",
    callback_data: "sell_7gb"
  }], [{
    text: "8GB",
    callback_data: "sell_8gb"
  }, {
    text: "9GB",
    callback_data: "sell_9gb"
  }, {
    text: "10GB",
    callback_data: "sell_10gb"
  }], [{
    text: "UNLI",
    callback_data: "sell_unli"
  }], [{
    text: "🔙 KEMBALI",
    callback_data: "reseller_menu"
  }]];
  const vO152 = {
    inline_keyboard: vA14
  };
  const vO153 = {
    reply_markup: vO152,
    parse_mode: "Markdown"
  };
  const vVO153 = vO153;
  if (p634) {
    const vO154 = {
      chat_id: p632,
      message_id: p634,
      ...vVO153
    };
    v18.editMessageText(v195, vO154);
  } else {
    v18.sendMessage(p632, v195, vVO153);
  }
}
async function f53(p635, p636, p637, p638) {
  const vO155 = {
    EYLSj: "while (true) {}",
    jpnTa: "counter",
    JoIFv: "🛒 BELI PANEL",
    zcffI: "buy_panel",
    sDumt: "🔙 KEMBALI",
    UQAaL: "main_menu",
    uVmQC: "Markdown",
    zVvRX: function (p639, p640) {
      return p639(p640);
    },
    vsAVP: function (p641, p642) {
      return p641 === p642;
    },
    EbGyT: "MmZmZ",
    BtlAd: "sdHsz",
    NpFyv: "❌ Anda bukan reseller!",
    vDOBi: function (p643) {
      return p643();
    },
    kPNTJ: "YYYY-MM-DD",
    mmOKB: function (p644, p645) {
      return p644 !== p645;
    },
    iiwOz: "HfVxK",
    gqrkA: "WdMdp",
    Kozzf: function (p646, p647) {
      return p646 === p647;
    },
    OzGrW: "NhFsG",
    IITTz: "NoYJn",
    ZeNGI: function (p648, p649) {
      return p648 >= p649;
    },
    rgLGp: "yQQTh",
    ZSjkB: function (p650, p651) {
      return p650 + p651;
    },
    BlsiN: function (p652, p653) {
      return p652 + p653;
    },
    VNjnW: "waiting_username",
    gybtX: function (p654, p655) {
      return p654 + p655;
    },
    GZmfb: function (p656, p657) {
      return p656(p657);
    }
  };
  const v196 = vO155.zVvRX(f7, p636);
  if (!v196) {
    if (vO155.vsAVP(vO155.EbGyT, vO155.BtlAd)) {
      return false;
    } else {
      return v18.sendMessage(p635, vO155.NpFyv);
    }
  }
  const v197 = vO155.vDOBi(moment2).format(vO155.kPNTJ);
  const vV25 = v25;
  let vO156 = {};
  try {
    if (vO155.mmOKB(vO155.iiwOz, vO155.iiwOz)) {
      return function (p658) {}.constructor(tRtkMX.EYLSj).apply(tRtkMX.jpnTa);
    } else {
      vO156 = JSON.parse(fs2.readFileSync(vV25));
    }
  } catch (e56) {
    if (vO155.mmOKB(vO155.gqrkA, vO155.gqrkA)) {
      p635 = p636;
    } else {
      vO156 = {};
    }
  }
  if (!vO156[p636]) {
    if (vO155.Kozzf(vO155.OzGrW, vO155.IITTz)) {
      const v198 = "```Text  \n📦 *PANEL SAYA*\n━━━━━━━━━━━━━━━━━━━━━━━━━━\nAnda belum memiliki panel.\n\n🛒 *Beli panel sekarang!*\n        ```".trim();
      const vO157 = {
        text: vO155.JoIFv,
        callback_data: vO155.zcffI
      };
      const vO158 = {
        text: vO155.sDumt,
        callback_data: vO155.UQAaL
      };
      const vA15 = [[vO157], [vO158]];
      const vO159 = {
        inline_keyboard: vA15
      };
      const vO160 = {
        reply_markup: vO159,
        parse_mode: vO155.uVmQC
      };
      const vVO160 = vO160;
      if (vO155) {
        const vO161 = {
          chat_id: v,
          message_id: w,
          ...vVO160
        };
        vO164.editMessageText(v198, vO161);
      } else {
        x.sendMessage(y, v198, vVO160);
      }
    } else {
      vO156[p636] = {
        total_sales: 0,
        total_income: 0,
        daily_sales: {}
      };
    }
  }
  const v199 = vO156[p636].daily_sales[v197] || 0;
  if (vO155.ZeNGI(v199, v196.daily_limit)) {
    if (vO155.mmOKB(vO155.rgLGp, vO155.rgLGp)) {
      const vO163 = {
        chat_id: v196,
        message_id: v197,
        ...vV25
      };
      p638.editMessageText(vO155, vO163);
    } else {
      return v18.editMessageText(vO155.ZSjkB(vO155.BlsiN(vO155.ZSjkB("❌ *LIMIT HARIAN HABIS!*\n\n", "📊 *Limit Harian:* " + v196.daily_limit + " panel\n"), "📈 *Terjual Hari Ini:* " + v199 + " panel\n\n"), "💡 Limit akan direset besok pagi."), {
        chat_id: p635,
        message_id: p638,
        parse_mode: vO155.uVmQC
      });
    }
  }
  const vO164 = {
    ramSize: p637,
    step: vO155.VNjnW
  };
  vO17[p636] = vO164;
  await v18.editMessageText(vO155.BlsiN(vO155.gybtX(vO155.gybtX("```Javascript 🛒 *JUAL PANEL " + p637.toUpperCase() + "*\n\n", "📦 *RAM:* " + p637.toUpperCase() + "\n"), "💰 *Harga Modal:* Rp " + vO155.zVvRX(f2, vO155.GZmfb(f54, p637)) + "\n\n"), "📝 *Masukkan username untuk customer:*```"), {
    chat_id: p635,
    message_id: p638,
    parse_mode: vO155.uVmQC
  });
}
function f54(p659) {
  const vVO165 = {
    "5gb": 5000,
    "6gb": 6000,
    "7gb": 7000,
    "8gb": 8000,
    "9gb": 9000,
    "10gb": 10000,
    unli: 12000
  };
  return vVO165[p659] || vVO165["5gb"];
}
async function f55(p660, p661, p662 = null) {
  const vF4 = f4(p661);
  const vF6 = f6(p661);
  const vF13 = f13(p661);
  const v200 = await v18.getChat(p661);
  const v201 = v200.username || "User";
  const v202 = ("```Javascript \n╔═══ ✦ 𓆩🌐𓆪 GINASTORE OFFICIAL𓆩🌐𓆪 ✦ ═══╗\n        ⚡ ELITE DIGITAL AUTOMATION ⚡\n╚══════════════════════════════╝\n\n👑 *Welcome, @" + (v201 || "User") + "!*  \nSelamat datang di ekosistem *AutoOrder Premium 2025* 🚀  \n\n━━━━━━━━〔 🔥 LAYANAN ELITE 🔥 〕━━━━━━━━\n💎 Apps Premium → Netflix, YT, Canva, Prime, dll   \n💻 Script & Template Premium → Source Terbaik    \n🛠️ Admin / Reseller / TK Panel / Pt Panel/ Owner Panel → Instant   \n💳 Saldo Otomatis + QRIS Support  \n\n━━━━━━━━〔 💠 KEUNGGULAN 💠 〕━━━━━━━━\n✅ 100% Realtime Auto Delivery  \n💲 Termurah + Banyak Bonus  \n🛡️ Garansi Full & Support 24/7  \n🚫 Anti PHP – Tanpa Ribet  \n\n╔════ ✦ JOIN • ORDER • DOMINATE ✦ ═══╗\n        🔥 The Future is Here 🔥\n╚════════════════════════════╝\n\n🛸 ─────〔 *GINASTORE AUTOORDER* 〕───── 🛸\n\n👤 User    : @" + v201 + "\n📍 Status  : ✅ Aktif & Siap Order  \n\n═══════〔 ⚡ DASHBOARD ⚡ 〕═══════\n🕒 Waktu Sekarang : " + new Date().toLocaleString("id-ID", {
    timeZone: "Asia/Jakarta"
  }) + "\n⏱️ Runtime Bot    : " + f9() + "\n💳 Saldo Kamu     : Rp " + vF4.toLocaleString("id-ID") + "\n👥 Total Pengguna : " + f10() + "\n══════════════════════════════\n\n💡 *Pro Tips:*  \nGunakan button untuk menjelajahi dan button lainnya untuk melihat semua fiture\nproduk premium, panel, VPS, & promo eksklusif 🚀\n\n🛸 ───────〔 *GINA OFFICIAL* 〕─────── 🛸\n    ```").trim();
  const vA16 = [];
  if (vF13) {
    vA16.push([{
      text: "👑 OWNER MENU",
      callback_data: "owner_menu"
    }]);
  }
  vA16.push([{
    text: "🛒 BELI PANEL",
    callback_data: "buy_panel"
  }, {
    text: "💼 RESELLER PANEL",
    callback_data: "reseller_menu"
  }], [{
    text: "👑 SPECIAL PANEL",
    callback_data: "special_panel_menu"
  }, {
    text: "📱 APPS PREMIUM",
    callback_data: "apps_menu"
  }], [{
    text: "💻 SCRIPT & TEMPLATE",
    callback_data: "documents_menu"
  }, {
    text: "💰 DEPOSIT SALDO",
    callback_data: "deposit_menu"
  }], [{
    text: "📦 PANEL SAYA",
    callback_data: "my_panels"
  }, {
    text: "ℹ️ BANTUAN",
    callback_data: "help_menu"
  }]);
  if (vF6) {
    vA16.push([{
      text: "🛒 JUAL PANEL",
      callback_data: "sell_panel"
    }]);
  }
  const vO176 = {
    inline_keyboard: vA16
  };
  const vO177 = {
    reply_markup: vO176,
    parse_mode: "Markdown"
  };
  const vVO177 = vO177;
  if (p662) {
    const vO178 = {
      chat_id: p660,
      message_id: p662,
      ...vVO177
    };
    v18.editMessageText(v202, vO178);
  } else {
    v18.sendMessage(p660, v202, vVO177);
  }
}
async function f56(p663, p664 = null) {
  const vO179 = {
    SfTwI: function (p665, p666) {
      return p665(p666);
    },
    eieJi: function (p667, p668) {
      return p667 <= p668;
    },
    mVkzj: "❌ Harga tidak valid.",
    wuVBC: "waiting_add_doc_description",
    KgZDU: "📝 Masukkan deskripsi document:",
    xSjNK: "5gb",
    kispT: function (p669, p670) {
      return p669(p670);
    },
    zXVsz: "6gb",
    wBBKT: function (p671, p672) {
      return p671(p672);
    },
    XcbGM: "7gb",
    PidZq: "8gb",
    bcIPg: function (p673, p674) {
      return p673(p674);
    },
    IfYlK: "9gb",
    KYTNw: "10gb",
    TkfKf: function (p675, p676) {
      return p675(p676);
    },
    owvtD: "unli",
    HMJQb: "5GB",
    TLUuq: "buy_5gb",
    yofYx: "6GB",
    VIrVX: "buy_6gb",
    mmBvp: "7GB",
    KLlnJ: "buy_7gb",
    fNhtX: "8GB",
    SSjXs: "buy_8gb",
    zJvcd: "9GB",
    GZxQz: "buy_9gb",
    QtaRC: "10GB",
    VGuAD: "buy_10gb",
    YEmdj: "UNLI",
    aaraM: "buy_unli",
    aUkgj: "🔙 KEMBALI",
    bujsQ: "main_menu",
    IsuCs: "Markdown",
    MUzmH: function (p677, p678) {
      return p677 === p678;
    },
    uYZbZ: "EmXUx",
    rfQWq: "pzIeV",
    CmRuh: "giHbj",
    EnYug: "MQmcI"
  };
  const v203 = ("\n```Javascript 🛒 *PANEL PREMIUM*\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n*Pilih RAM Panel:*\n\n• 5GB  - Rp " + vO179.SfTwI(f2, configJs.PANEL_PRICES[vO179.xSjNK]) + "\n• 6GB  - Rp " + vO179.kispT(f2, configJs.PANEL_PRICES[vO179.zXVsz]) + "\n• 7GB  - Rp " + vO179.wBBKT(f2, configJs.PANEL_PRICES[vO179.XcbGM]) + "\n• 8GB  - Rp " + vO179.wBBKT(f2, configJs.PANEL_PRICES[vO179.PidZq]) + "\n• 9GB  - Rp " + vO179.bcIPg(f2, configJs.PANEL_PRICES[vO179.IfYlK]) + "\n• 10GB - Rp " + vO179.bcIPg(f2, configJs.PANEL_PRICES[vO179.KYTNw]) + "\n• UNLI - Rp " + vO179.TkfKf(f2, configJs.PANEL_PRICES[vO179.owvtD]) + "\n\n💡 *Garansi 15 hari*\n    ```").trim();
  const vO180 = {
    text: vO179.HMJQb,
    callback_data: vO179.TLUuq
  };
  const vO181 = {
    text: vO179.yofYx,
    callback_data: vO179.VIrVX
  };
  const vO182 = {
    text: vO179.mmBvp,
    callback_data: vO179.KLlnJ
  };
  const vO183 = {
    text: vO179.fNhtX,
    callback_data: vO179.SSjXs
  };
  const vO184 = {
    text: vO179.zJvcd,
    callback_data: vO179.GZxQz
  };
  const vO185 = {
    text: vO179.QtaRC,
    callback_data: vO179.VGuAD
  };
  const vO186 = {
    text: vO179.YEmdj,
    callback_data: vO179.aaraM
  };
  const vO187 = {
    text: vO179.aUkgj,
    callback_data: vO179.bujsQ
  };
  const vA17 = [[vO180, vO181, vO182], [vO183, vO184, vO185], [vO186], [vO187]];
  const vO188 = {
    inline_keyboard: vA17
  };
  const vO189 = {
    reply_markup: vO188,
    parse_mode: vO179.IsuCs
  };
  const vVO189 = vO189;
  if (p664) {
    if (vO179.MUzmH(vO179.uYZbZ, vO179.rfQWq)) {
      const v204 = p664[vO179].docName;
      delete v203[vO180];
      const v205 = vO179.SfTwI(vO181, vO182.replace(/[^0-9]/g, ""));
      if (!v205 || vO179.eieJi(v205, 0)) {
        return vO188.sendMessage(vO189, vO179.mVkzj);
      }
      const vO190 = {
        action: vO179.wuVBC,
        docName: v204,
        price: v205
      };
      vO185[vO186] = vO190;
      return vO187.sendMessage(vA17, vO179.KgZDU);
    } else {
      const vO191 = {
        chat_id: p663,
        message_id: p664,
        ...vVO189
      };
      v18.editMessageText(v203, vO191);
    }
  } else if (vO179.MUzmH(vO179.CmRuh, vO179.EnYug)) {
    vO184.sendMessage(vO185, vO186, vO187);
  } else {
    v18.sendMessage(p663, v203, vVO189);
  }
}
async function f57(p679, p680, p681 = null) {
  const vF62 = f6(p680);
  const vF72 = f7(p680);
  let vLS8 = "";
  if (vF62) {
    vLS8 = ("```Javascript \n💼 *RESELLER PANEL*\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n*Status:* ✅ AKTIF\n*Paket:* " + vF72.package.toUpperCase() + "\n*Limit Harian:* " + vF72.daily_limit + " panel\n*Max RAM:* " + vF72.max_ram + " MB\n\n💡 *Fitur:*\n• Bisa jual panel 5GB - UNLI\n• Harga jual sesuai keinginan\n• Buat panel untuk customer\n        ```").trim();
  } else {
    vLS8 = ("\n```Javascript 💼 *RESELLER PANEL*\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n*Jadi reseller dan dapatkan keuntungan!*\n\n📦 *Paket Reseller:*\n• RESELLER - Rp " + f2(configJs.RESELLER_PRICES.reseller) + "\n  └ Limit: " + configJs.RESELLER.reseller.daily_limit + " panel/hari\n  └ Max RAM: " + configJs.RESELLER.reseller.max_ram + " MB\n\n💡 *Keuntungan:*\n• Bisa jual panel 5GB - UNLI\n• Harga jual bebas (sesuai keinginan)\n• Buat panel untuk customer\n• Dashboard reseller\n        ```").trim();
  }
  const vA18 = [];
  if (vF62) {
    vA18.push([{
      text: "🛒 JUAL PANEL",
      callback_data: "sell_panel"
    }], [{
      text: "📊 DASHBOARD RESELLER",
      callback_data: "reseller_dashboard"
    }]);
  } else {
    vA18.push([{
      text: "💼 BELI PAKET RESELLER",
      callback_data: "buy_reseller"
    }]);
  }
  vA18.push([{
    text: "🔙 KEMBALI",
    callback_data: "main_menu"
  }]);
  const vO196 = {
    inline_keyboard: vA18
  };
  const vO197 = {
    reply_markup: vO196,
    parse_mode: "Markdown"
  };
  const vVO197 = vO197;
  if (p681) {
    const vO198 = {
      chat_id: p679,
      message_id: p681,
      ...vVO197
    };
    v18.editMessageText(vLS8, vO198);
  } else {
    v18.sendMessage(p679, vLS8, vVO197);
  }
}
async function f58(p682, p683, p684 = null) {
  const vO199 = {
    Oxqjx: "1|4|0|2|3",
    cAxCl: function (p685, p686) {
      return p685 + p686;
    },
    lcbFg: "id-ID",
    FMfUG: "❌ Gagal simpan document:",
    fTNIQ: function (p687, p688) {
      return p687(p688);
    },
    HpIkC: function (p689, p690) {
      return p689(p690);
    },
    GdlYk: function (p691, p692) {
      return p691(p692);
    },
    jyXAz: "\n👑 *Owner bisa buat panel gratis!*",
    AwsxD: "ADMIN",
    ScSWs: "special_admin",
    mNQsL: "RESELLER",
    Mtcgi: "special_reseller",
    dmyug: "OWNER",
    etYFi: "special_owner",
    xfUsG: "special_pt",
    JXIFM: "special_tk",
    jaVEw: "🔙 KEMBALI",
    oqBsQ: "main_menu",
    MLOkU: "Markdown",
    WxkeH: function (p693, p694) {
      return p693 === p694;
    },
    Yfmxt: "rZAkG",
    QTHpb: function (p695, p696) {
      return p695 !== p696;
    },
    TSVFV: "rVceD"
  };
  const v206 = vO199.fTNIQ(f13, p683);
  const v207 = ("\n```Javascript 👑 *SPECIAL PANEL*\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n*Panel khusus dengan fitur khusus!*\n\n🎯 *Pilihan Panel:*\n• ADMIN PANEL - Rp " + vO199.fTNIQ(f2, configJs.SPECIAL_PANEL_PRICES.admin_panel) + "\n  └ Bisa open reseller & jual panel 5GB - UNLI\n\n• RESELLER PANEL - Rp " + vO199.fTNIQ(f2, configJs.SPECIAL_PANEL_PRICES.reseller_panel) + "\n  └ Bisa jual 5GB - UNLI\n\n• OWNER PANEL - Rp " + vO199.HpIkC(f2, configJs.SPECIAL_PANEL_PRICES.owner_panel) + "\n  └ Bisa jual PT Panel - Admin Panel - Reseller Panel & 5GB - UNLI\n\n• PT PANEL - Rp " + vO199.GdlYk(f2, configJs.SPECIAL_PANEL_PRICES.pt_panel) + "\n  └ Bisa jual - Reseller Panel & 5GB - UNLI\n\n• TK PANEL - Rp " + vO199.HpIkC(f2, configJs.SPECIAL_PANEL_PRICES.tk_panel) + "\n  └ Bisa jual Owner Panel - PT Panel - Admin Panel - Reseller Panel & 5GB - UNLI\n\n" + (v206 ? vO199.jyXAz : "") + "\n    ```").trim();
  const vO200 = {
    text: vO199.AwsxD,
    callback_data: vO199.ScSWs
  };
  const vO201 = {
    text: vO199.mNQsL,
    callback_data: vO199.Mtcgi
  };
  const vO202 = {
    text: vO199.dmyug,
    callback_data: vO199.etYFi
  };
  const vO203 = {
    text: "PT",
    callback_data: vO199.xfUsG
  };
  const vO204 = {
    text: "TK",
    callback_data: vO199.JXIFM
  };
  const vO205 = {
    text: vO199.jaVEw,
    callback_data: vO199.oqBsQ
  };
  const vA19 = [[vO200, vO201], [vO202, vO203], [vO204], [vO205]];
  const vO206 = {
    inline_keyboard: vA19
  };
  const vO207 = {
    reply_markup: vO206,
    parse_mode: vO199.MLOkU
  };
  const vVO207 = vO207;
  if (p684) {
    if (vO199.WxkeH(vO199.Yfmxt, vO199.Yfmxt)) {
      const vO208 = {
        chat_id: p682,
        message_id: p684,
        ...vVO207
      };
      v18.editMessageText(v207, vO208);
    } else {
      const v208 = vO199.Oxqjx.split("|");
      let vLN05 = 0;
      while (true) {
        switch (v208[vLN05++]) {
          case "0":
            vO202 += "   Panel: " + vO203.panelId + "\n";
            continue;
          case "1":
            vO199 += vO199.cAxCl(v206, 1) + ". " + v207.id + "\n";
            continue;
          case "2":
            vO204 += "   Status: " + vO205.status + "\n";
            continue;
          case "3":
            vA19 += "   Waktu: " + new vO206(vO207.createdAt).toLocaleDateString(vO199.lcbFg) + "\n\n";
            continue;
          case "4":
            vO200 += "   User: " + vO201.userId + "\n";
            continue;
        }
        break;
      }
    }
  } else if (vO199.QTHpb(vO199.TSVFV, vO199.TSVFV)) {
    vO202.error(vO199.FMfUG, vO203.message);
    return false;
  } else {
    v18.sendMessage(p682, v207, vVO207);
  }
}
async function f59(p697, p698 = null) {
  const vO209 = {
    WzRYr: "❌ API Key tidak ditemukan di konfigurasi.",
    JYTOJ: function (p699, p700) {
      return p699 === p700;
    },
    DWVsX: "CQUow",
    KjVsu: function (p701, p702) {
      return p701(p702);
    },
    yhqqZ: "❌ API Key tidak valid atau telah kadaluarsa. Silakan periksa kembali API key Atlantic Anda.",
    LspWi: "❌ User tidak ditemukan.",
    WcABl: "❌ Gagal simpan special panel:",
    WEowy: function (p703, p704) {
      return p703 - p704;
    },
    OFWsp: function (p705, p706) {
      return p705 !== p706;
    },
    MwUbV: "KoHiO",
    OfOVn: "ojVWt",
    GYdpa: function (p707, p708) {
      return p707 % p708;
    },
    iWtlk: "hFdaf",
    KPmjV: function (p709, p710) {
      return p709 + p710;
    },
    HvWgX: "aRkZI",
    fyXda: function (p711, p712) {
      return p711 + p712;
    },
    dFjUg: function (p713, p714) {
      return p713 + p714;
    },
    khhDH: function (p715) {
      return p715();
    },
    UEOMJ: function (p716) {
      return p716();
    },
    PdOhz: function (p717) {
      return p717();
    },
    FBSHp: function (p718) {
      return p718();
    },
    yKNfl: "💰 TAMBAH SALDO",
    WVbvk: "owner_addsaldo",
    xFdvQ: "📢 BROADCAST",
    SlfQC: "owner_broadcast",
    lOEEk: "👥 KELOLA USER",
    RqmAc: "owner_manage_users",
    PcKpz: "📦 KELOLA TRANSAKSI",
    qrQOH: "owner_manage_orders",
    TNnxT: "🛡️ KELOLA GARANSI",
    WPfLx: "owner_manage_warranty",
    MAWEJ: "📱 KELOLA APPS",
    tNvdo: "owner_manage_apps",
    mhnVY: "💻 KELOLA DOCUMENTS",
    UQjwR: "owner_manage_documents",
    tvgaj: "🔙 KEMBALI",
    lickO: "main_menu",
    erQVe: "Markdown",
    JXZxl: function (p719, p720) {
      return p719(p720);
    },
    kWmgw: function (p721, p722) {
      return p721 === p722;
    },
    qCipW: function (p723, p724) {
      return p723 !== p724;
    },
    VKMRl: "mnPKj",
    ZexUj: function (p725, p726) {
      return p725 === p726;
    },
    KNAJQ: "caVGW",
    LjIwI: function (p727, p728) {
      return p727 > p728;
    },
    XEgTh: function (p729, p730) {
      return p729 === p730;
    },
    Oppuy: "dUFCb",
    nLuGN: "yfSsG",
    RbMZO: "BVAkn",
    myZeQ: function (p731, p732) {
      return p731 === p732;
    },
    DIPgq: "XQsxP"
  };
  const v209 = vO209.UEOMJ(f19);
  let vLSJavascriptAPPSPREMIU = "```Javascript  \n📱 *APPS PREMIUM*\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n*Aplikasi premium siap pakai!*\n\n";
  if (vO209.kWmgw(v209.length, 0)) {
    if (vO209.qCipW(vO209.VKMRl, vO209.VKMRl)) {
      const vO210 = {
        reply_to_message_id: p698
      };
      return l.sendMessage(p697, vO209.WzRYr, vO210);
    } else {
      vLSJavascriptAPPSPREMIU += "❌ *Belum ada apps tersedia*\n\nHubungi admin untuk menambahkan apps.";
    }
  } else if (vO209.ZexUj(vO209.KNAJQ, vO209.KNAJQ)) {
    v209.forEach((p733, p734) => {
      if (vO209.JYTOJ(vO209.DWVsX, vO209.DWVsX)) {
        vLSJavascriptAPPSPREMIU += "• " + p733.name + " - Rp " + vO209.KjVsu(f2, p733.price) + "\n";
        vLSJavascriptAPPSPREMIU += "  └ " + p733.description + "\n\n";
      } else {
        return l.sendMessage(p697, "❌ Gagal buat QRIS: " + p698.message);
      }
    });
  } else {
    vO214 = vO209.yhqqZ;
  }
  vLSJavascriptAPPSPREMIU += "💡 *Semua apps garansi 100%*```";
  const vA20 = [];
  if (vO209.LjIwI(v209.length, 0)) {
    if (vO209.XEgTh(vO209.Oppuy, vO209.nLuGN)) {
      return vO215.sendMessage(l, vO209.LspWi);
    } else {
      v209.forEach((p735, p736) => {
        const vO211 = {
          gNCMn: function (p737, p738) {
            return vO209.WEowy(p737, p738);
          }
        };
        if (vO209.OFWsp(vO209.MwUbV, vO209.OfOVn)) {
          if (vO209.JYTOJ(vO209.GYdpa(p736, 2), 0)) {
            if (vO209.OFWsp(vO209.iWtlk, vO209.iWtlk)) {
              vO215 += "... dan " + vO211.gNCMn(l.length, 10) + " panel lainnya\n\n";
            } else {
              const vA21 = [];
              const vO212 = {
                text: "" + p735.name,
                callback_data: "buy_app_" + p735.id
              };
              vA21.push(vO212);
              if (v209[vO209.KPmjV(p736, 1)]) {
                if (vO209.OFWsp(vO209.HvWgX, vO209.HvWgX)) {
                  p697.sendMessage(p698, vO209, v209);
                } else {
                  vA21.push({
                    text: "" + v209[vO209.fyXda(p736, 1)].name,
                    callback_data: "buy_app_" + v209[vO209.dFjUg(p736, 1)].id
                  });
                }
              }
              vA20.push(vA21);
            }
          }
        } else {
          try {
            const v210 = y.parse(p735.readFileSync(p736));
            v210.push(vO211);
            C.writeFileSync(D, E.stringify(v210, null, 2));
          } catch (e57) {
            G.error(vO209.WcABl, e57.message);
          }
        }
      });
    }
  }
  const vO213 = {
    text: vO209.tvgaj,
    callback_data: vO209.lickO
  };
  vA20.push([vO213]);
  const vO214 = {
    inline_keyboard: vA20
  };
  const vO215 = {
    reply_markup: vO214,
    parse_mode: vO209.erQVe
  };
  const vVO215 = vO215;
  if (p698) {
    if (vO209.qCipW(vO209.RbMZO, vO209.RbMZO)) {
      const v211 = vO209.khhDH(vO223);
      const v212 = vO209.UEOMJ(vO224);
      const v213 = vO209.PdOhz(vO225);
      const v214 = ("\n```Javascript 👑 *OWNER MENU*\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n*Fitur khusus untuk Owner*\n\n📊 *Statistik:*\n• Total User: " + v211 + "\n• Total Transaksi: " + v212 + "\n• Total Panel: " + v213 + "\n• Runtime: " + vO209.FBSHp(vVO215) + "\n\n🛠️ *Tools:*\n• Tambah Saldo User\n• Broadcast Message\n• Kelola User\n• Kelola Transaksi\n• Kelola Garansi\n• Kelola Apps\n• Kelola Documents\n    ```").trim();
      const vO216 = {
        text: vO209.yKNfl,
        callback_data: vO209.WVbvk
      };
      const vO217 = {
        text: vO209.xFdvQ,
        callback_data: vO209.SlfQC
      };
      const vO218 = {
        text: vO209.lOEEk,
        callback_data: vO209.RqmAc
      };
      const vO219 = {
        text: vO209.PcKpz,
        callback_data: vO209.qrQOH
      };
      const vO220 = {
        text: vO209.TNnxT,
        callback_data: vO209.WPfLx
      };
      const vO221 = {
        text: vO209.MAWEJ,
        callback_data: vO209.tNvdo
      };
      const vO222 = {
        text: vO209.mhnVY,
        callback_data: vO209.UQjwR
      };
      const vO223 = {
        text: vO209.tvgaj,
        callback_data: vO209.lickO
      };
      const vA22 = [[vO216, vO217], [vO218, vO219], [vO220, vO221], [vO222], [vO223]];
      const vO224 = {
        inline_keyboard: vA22
      };
      const vO225 = {
        reply_markup: vO224,
        parse_mode: vO209.erQVe
      };
      const vVO225 = vO225;
      if (w) {
        const vO226 = {
          chat_id: v214,
          message_id: vO216,
          ...vVO225
        };
        v213.editMessageText(v214, vO226);
      } else {
        vO217.sendMessage(vO218, v214, vVO225);
      }
    } else {
      const vO227 = {
        chat_id: p697,
        message_id: p698,
        ...vVO215
      };
      v18.editMessageText(vLSJavascriptAPPSPREMIU, vO227);
    }
  } else if (vO209.myZeQ(vO209.DIPgq, vO209.DIPgq)) {
    v18.sendMessage(p697, vLSJavascriptAPPSPREMIU, vVO215);
  } else {
    return vO215.sendMessage(vVO215, "```JAVASCRIPT\n✅ Pencairan Berhasil!  \n\n- Saldo Awal: Rp " + w + "\n- Nominal Penarikan: Rp " + x + "  \n- Fee Pencairan: Rp " + y + "  \n- Tujuan: " + vO209.JXZxl(z, A.nomor_pencairan) + "  \n- Type Ewallet: " + B.type_ewallet + "  \n- Nama Pemilik: " + vO209.JXZxl(C, D.atas_nama_ewallet) + "  \n- Status: " + E.status + "  \n\nSaldo Berhasil Dikirim Ke Ewallet Pribadi ✅  \n```", {
      reply_to_message_id: F,
      parse_mode: vO209.erQVe
    });
  }
}
async function f60(p739, p740 = null) {
  const vO228 = {
    YSFna: function (p741, p742) {
      return p741(p742);
    },
    PUbWT: function (p743, p744) {
      return p743 + p744;
    },
    fRnIe: function (p745, p746) {
      return p745 + p746;
    },
    kcJQN: "return (function() ",
    cMAZo: "{}.constructor(\"return this\")( )",
    EhAZh: function (p747) {
      return p747();
    },
    ySoRc: "log",
    FzbyV: "warn",
    MMJWP: "info",
    KOGCN: "error",
    bgbIO: "exception",
    YMRhB: "table",
    rGgzg: "trace",
    PTQRG: function (p748, p749) {
      return p748 < p749;
    },
    cxobc: function (p750, p751) {
      return p750 !== p751;
    },
    ohnRf: "fLnBt",
    FQIQi: function (p752, p753) {
      return p752(p753);
    },
    ukFaP: "❌ Unhandled Rejection at:",
    IyqAE: "reason:",
    uRTUU: "🛒 JUAL PANEL",
    XPhxD: "sell_panel",
    Rfkrb: function (p754, p755) {
      return p754 !== p755;
    },
    uJQDf: "KDbZF",
    Xnliu: function (p756, p757) {
      return p756 === p757;
    },
    MZMmE: function (p758, p759) {
      return p758 % p759;
    },
    RExGT: function (p760, p761) {
      return p760 === p761;
    },
    ktCbo: "pxGoh",
    ikHjR: "DUxEv",
    SkHOb: function (p762, p763) {
      return p762 % p763;
    },
    IZvse: function (p764, p765) {
      return p764 + p765;
    },
    gkxid: function (p766, p767) {
      return p766(p767);
    },
    MfOFW: function (p768, p769) {
      return p768(p769);
    },
    qNFKk: function (p770) {
      return p770();
    },
    IALsZ: "IMuFv",
    ciJDK: "Clrxl",
    DMnwM: "ybAdN",
    dVFHa: "xQJyl",
    qDFKY: function (p771, p772) {
      return p771 > p772;
    },
    xJseU: "caHkx",
    CArnl: "🔙 KEMBALI",
    WZUsd: "main_menu",
    txRxU: "Markdown",
    sxbGd: function (p773, p774) {
      return p773 === p774;
    },
    WmffW: "EagfL",
    eRSuV: "lovJJ",
    eUPtN: function (p775, p776) {
      return p775 !== p776;
    },
    qcSmw: "PyJOO"
  };
  const v215 = vO228.qNFKk(f22);
  let vLSJavascriptSCRIPTTEMP = "```Javascript  \n💻 *SCRIPT & TEMPLATE PREMIUM*\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n*Source code & template berkualitas!*\n\n";
  if (vO228.RExGT(v215.length, 0)) {
    if (vO228.Rfkrb(vO228.IALsZ, vO228.ciJDK)) {
      vLSJavascriptSCRIPTTEMP += "❌ *Belum ada document tersedia*\n\nHubungi admin untuk menambahkan document.";
    } else {
      p739.sendMessage(p740, vO228, v215);
    }
  } else if (vO228.Rfkrb(vO228.DMnwM, vO228.dVFHa)) {
    v215.forEach((p777, p778) => {
      const vO229 = {
        GHKKU: function (p779, p780) {
          return vO228.YSFna(p779, p780);
        },
        ENGLb: function (p781, p782) {
          return vO228.PUbWT(p781, p782);
        },
        EHJUg: function (p783, p784) {
          return vO228.fRnIe(p783, p784);
        },
        FzOSn: vO228.kcJQN,
        ACTvC: vO228.cMAZo,
        kxbSj: function (p785) {
          return vO228.EhAZh(p785);
        },
        VHSSd: vO228.ySoRc,
        CoNIS: vO228.FzbyV,
        lcHdJ: vO228.MMJWP,
        yzYcq: vO228.KOGCN,
        aLWmK: vO228.bgbIO,
        azjXQ: vO228.YMRhB,
        uoQLV: vO228.rGgzg,
        yYPdZ: function (p786, p787) {
          return vO228.PTQRG(p786, p787);
        }
      };
      if (vO228.cxobc(vO228.ohnRf, vO228.ohnRf)) {
        let v216;
        try {
          const v217 = BohIEj.GHKKU(vO235, BohIEj.ENGLb(BohIEj.EHJUg(BohIEj.FzOSn, BohIEj.ACTvC), ");"));
          v216 = BohIEj.kxbSj(v217);
        } catch (e58) {
          v216 = w;
        }
        const v218 = v216.console = v216.console || {};
        const vA23 = [BohIEj.VHSSd, BohIEj.CoNIS, BohIEj.lcHdJ, BohIEj.yzYcq, BohIEj.aLWmK, BohIEj.azjXQ, BohIEj.uoQLV];
        for (let vLN06 = 0; BohIEj.yYPdZ(vLN06, vA23.length); vLN06++) {
          const v219 = v216.constructor.prototype.bind(v218);
          const v220 = vA23[vLN06];
          const v221 = v218[v220] || v219;
          v219.__proto__ = vA23.bind(E);
          v219.toString = v221.toString.bind(v221);
          v218[v220] = v219;
        }
      } else {
        vLSJavascriptSCRIPTTEMP += "• " + p777.name + " - Rp " + vO228.FQIQi(f2, p777.price) + "\n";
        vLSJavascriptSCRIPTTEMP += "  └ " + p777.description + "\n\n";
      }
    });
  } else {
    l.error(vO228.ukFaP, p739, vO228.IyqAE, p740);
  }
  vLSJavascriptSCRIPTTEMP += "💡 *Semua document garansi 100%*```";
  const vA24 = [];
  if (vO228.qDFKY(v215.length, 0)) {
    if (vO228.Rfkrb(vO228.xJseU, vO228.xJseU)) {
      vLSJavascriptSCRIPTTEMP = "<b>🔐 SUKSES CREATED " + vA24.panelType.toUpperCase().replace("_", " ") + "!</b>\n\n▸ <b>ID User:</b> <code>" + vO233.id + "</code>\n▸ <b>Username:</b> <code>" + vO234 + "</code>\n▸ <b>Email:</b> <code>" + vO235.email + "</code>\n▸ <b>Password:</b> <code>" + vVO235.password + "</code>\n▸ <b>Domain:</b> <code>" + w.domain + "</code>\n▸ <b>Tipe:</b> <code>" + x.panelType.toUpperCase() + "</code>\n\n⚠️ <b>Rules Panel:</b>\n▸ No Rusuh Panel!\n▸ Simpan data akun\n▸ No Share Free!";
    } else {
      v215.forEach((p788, p789) => {
        const vO230 = {
          MYdiZ: vO228.uRTUU,
          bmtUY: vO228.XPhxD
        };
        const vVO230 = vO230;
        if (vO228.Rfkrb(vO228.uJQDf, vO228.uJQDf)) {
          const vO231 = {
            text: vVO230.MYdiZ,
            callback_data: vVO230.bmtUY
          };
          vO231.push([vO231]);
        } else if (vO228.Xnliu(vO228.MZMmE(p789, 2), 0)) {
          if (vO228.RExGT(vO228.ktCbo, vO228.ktCbo)) {
            const vA25 = [];
            const vO232 = {
              text: "" + p788.name,
              callback_data: "buy_doc_" + p788.id
            };
            vA25.push(vO232);
            if (v215[vO228.fRnIe(p789, 1)]) {
              if (vO228.Rfkrb(vO228.ikHjR, vO228.ikHjR)) {
                p739.sendMessage(p740, vO228, v215);
              } else {
                vA25.push({
                  text: "" + v215[vO228.PUbWT(p789, 1)].name,
                  callback_data: "buy_doc_" + v215[vO228.fRnIe(p789, 1)].id
                });
              }
            }
            vA24.push(vA25);
          } else {
            vO235.log("🔍 Deposit " + l + " sudah tidak aktif, stop monitoring");
            return;
          }
        }
      });
    }
  }
  const vO233 = {
    text: vO228.CArnl,
    callback_data: vO228.WZUsd
  };
  vA24.push([vO233]);
  const vO234 = {
    inline_keyboard: vA24
  };
  const vO235 = {
    reply_markup: vO234,
    parse_mode: vO228.txRxU
  };
  const vVO235 = vO235;
  if (p740) {
    if (vO228.sxbGd(vO228.WmffW, vO228.eRSuV)) {
      const vO236 = {
        RxQLK: function (p790, p791) {
          return vO228.RExGT(p790, p791);
        },
        KeETv: function (p792, p793) {
          return vO228.SkHOb(p792, p793);
        },
        CVsnS: function (p794, p795) {
          return vO228.PUbWT(p794, p795);
        },
        XTyXe: function (p796, p797) {
          return vO228.PUbWT(p796, p797);
        },
        AxqzN: function (p798, p799) {
          return vO228.IZvse(p798, p799);
        }
      };
      p740.forEach((p800, p801) => {
        if (vO236.RxQLK(vO236.KeETv(p801, 2), 0)) {
          const vA26 = [];
          const vO237 = {
            text: "" + p800.name,
            callback_data: "confirm_delete_app_" + p800.id
          };
          vA26.push(vO237);
          if (w[vO236.CVsnS(p801, 1)]) {
            vA26.push({
              text: "" + vO236[vO236.XTyXe(p801, 1)].name,
              callback_data: "confirm_delete_app_" + B[vO236.AxqzN(p801, 1)].id
            });
          }
          z.push(vA26);
        }
      });
    } else {
      const vO238 = {
        chat_id: p739,
        message_id: p740,
        ...vVO235
      };
      v18.editMessageText(vLSJavascriptSCRIPTTEMP, vO238);
    }
  } else if (vO228.eUPtN(vO228.qcSmw, vO228.qcSmw)) {
    vA24 = ("```Javascript \n📱 PEMBAYARAN APPS PREMIUM VIA QRIS\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n📦 Detail Pesanan:\n• 🎯 Aplikasi: " + vO233.appName + "\n• 💰 Harga: Rp " + vO228.YSFna(vO234, vO235) + "\n\n💳 Detail Pembayaran:\n🔐 Kode Transaksi: " + vVO235 + "\n🧾 Biaya Admin: Rp " + vO228.gkxid(w, x.PAYMENT.FeeTransaksi) + "\n💳 Total Bayar: Rp " + vO228.MfOFW(y, z) + "\n⏰ Batas Waktu: 5 Menit\n\n📱 Cara Bayar:\n1. Buka aplikasi e-wallet/m-banking\n2. Pilih menu QRIS / Scan QR\n3. Scan kode QR di atas\n4. Konfirmasi pembayaran\n\n✅ File akan otomatis dikirim setelah pembayaran berhasil!\n            ```").trim();
  } else {
    v18.sendMessage(p739, vLSJavascriptSCRIPTTEMP, vVO235);
  }
}
async function f61(p802, p803, p804 = null) {
  const vF42 = f4(p803);
  const v222 = ("\n```Javascript 💰 *DEPOSIT SALDO*\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n💎 *Saldo Anda:* Rp " + f2(vF42) + "\n\n💳 *Metode Deposit:*\n• QRIS (Semua E-Wallet & Bank)\n\n📝 *Cara Deposit:*\n1. Pilih nominal deposit\n2. Scan QR Code yang diberikan\n3. Bayar via aplikasi e-wallet/m-banking\n4. Saldo otomatis bertambah\n\n💡 *Minimal Deposit:* Rp 5,000\n    ```").trim();
  const vA27 = [[{
    text: "💰 5.000",
    callback_data: "deposit_5000"
  }, {
    text: "💰 10.000",
    callback_data: "deposit_10000"
  }, {
    text: "💰 20.000",
    callback_data: "deposit_20000"
  }], [{
    text: "💰 50.000",
    callback_data: "deposit_50000"
  }, {
    text: "💰 100.000",
    callback_data: "deposit_100000"
  }, {
    text: "💰 200.000",
    callback_data: "deposit_200000"
  }], [{
    text: "💰 LAINNYA",
    callback_data: "deposit_custom"
  }], [{
    text: "🔙 KEMBALI",
    callback_data: "main_menu"
  }]];
  const vO247 = {
    inline_keyboard: vA27
  };
  const vO248 = {
    reply_markup: vO247,
    parse_mode: "Markdown"
  };
  const vVO248 = vO248;
  if (p804) {
    const vO249 = {
      chat_id: p802,
      message_id: p804,
      ...vVO248
    };
    v18.editMessageText(v222, vO249);
  } else {
    v18.sendMessage(p802, v222, vVO248);
  }
}
async function f62(p805, p806 = null) {
  const vO250 = {
    vTYHJ: function (p807, p808) {
      return p807(p808);
    },
    bKjUk: function (p809, p810) {
      return p809(p810);
    },
    qWYSy: "Markdown",
    rSxCz: function (p811) {
      return p811();
    },
    DzqVz: function (p812) {
      return p812();
    },
    nRsbx: function (p813) {
      return p813();
    },
    lOCQc: "💰 TAMBAH SALDO",
    vjKun: "owner_addsaldo",
    lantf: "📢 BROADCAST",
    nfFRl: "owner_broadcast",
    JDuKJ: "👥 KELOLA USER",
    ujvla: "owner_manage_users",
    RQwFB: "📦 KELOLA TRANSAKSI",
    VtNbW: "owner_manage_orders",
    zCmMh: "🛡️ KELOLA GARANSI",
    hpNld: "owner_manage_warranty",
    auUyK: "📱 KELOLA APPS",
    bcYdr: "owner_manage_apps",
    qdIWz: "💻 KELOLA DOCUMENTS",
    Dqdfb: "owner_manage_documents",
    pruUb: "🔙 KEMBALI",
    FKkwS: "main_menu",
    FFrLL: function (p814, p815) {
      return p814 === p815;
    },
    wHyIG: "DfBvV",
    YLnQk: "IEvaR",
    rMLYs: function (p816, p817) {
      return p816 === p817;
    },
    gmWyN: "UybEm"
  };
  const v223 = vO250.rSxCz(f10);
  const v224 = vO250.DzqVz(f11);
  const v225 = vO250.DzqVz(f12);
  const v226 = ("\n```Javascript 👑 *OWNER MENU*\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n*Fitur khusus untuk Owner*\n\n📊 *Statistik:*\n• Total User: " + v223 + "\n• Total Transaksi: " + v224 + "\n• Total Panel: " + v225 + "\n• Runtime: " + vO250.nRsbx(f9) + "\n\n🛠️ *Tools:*\n• Tambah Saldo User\n• Broadcast Message\n• Kelola User\n• Kelola Transaksi\n• Kelola Garansi\n• Kelola Apps\n• Kelola Documents\n    ```").trim();
  const vO251 = {
    text: vO250.lOCQc,
    callback_data: vO250.vjKun
  };
  const vO252 = {
    text: vO250.lantf,
    callback_data: vO250.nfFRl
  };
  const vO253 = {
    text: vO250.JDuKJ,
    callback_data: vO250.ujvla
  };
  const vO254 = {
    text: vO250.RQwFB,
    callback_data: vO250.VtNbW
  };
  const vO255 = {
    text: vO250.zCmMh,
    callback_data: vO250.hpNld
  };
  const vO256 = {
    text: vO250.auUyK,
    callback_data: vO250.bcYdr
  };
  const vO257 = {
    text: vO250.qdIWz,
    callback_data: vO250.Dqdfb
  };
  const vO258 = {
    text: vO250.pruUb,
    callback_data: vO250.FKkwS
  };
  const vA28 = [[vO251, vO252], [vO253, vO254], [vO255, vO256], [vO257], [vO258]];
  const vO259 = {
    inline_keyboard: vA28
  };
  const vO260 = {
    reply_markup: vO259,
    parse_mode: vO250.qWYSy
  };
  const vVO260 = vO260;
  if (p806) {
    if (vO250.FFrLL(vO250.wHyIG, vO250.YLnQk)) {
      return p806.sendMessage(vO250, "```JAVASCRIPT\n✅ Pencairan Berhasil!  \n\n- Saldo Awal: Rp " + v223 + "\n- Nominal Penarikan: Rp " + v224 + "  \n- Fee Pencairan: Rp " + v225 + "  \n- Tujuan: " + vO250.vTYHJ(v226, vO251.nomor_pencairan) + "  \n- Type Ewallet: " + vO252.type_ewallet + "  \n- Nama Pemilik: " + vO250.bKjUk(vO253, vO254.atas_nama_ewallet) + "  \n- Status: " + vO255 + "  \n\nSaldo Berhasil Dikirim Ke Ewallet Pribadi ✅  \n```", {
        reply_to_message_id: vO256,
        parse_mode: vO250.qWYSy
      });
    } else {
      const vO261 = {
        chat_id: p805,
        message_id: p806,
        ...vVO260
      };
      v18.editMessageText(v226, vO261);
    }
  } else if (vO250.rMLYs(vO250.gmWyN, vO250.gmWyN)) {
    v18.sendMessage(p805, v226, vVO260);
  } else {
    return false;
  }
}
async function f63(p818, p819 = null) {
  const vO262 = {
    fudEn: function (p820, p821) {
      return p820(p821);
    },
    YixLZ: function (p822, p823) {
      return p822 !== p823;
    },
    KVRMK: "MtnSs",
    YKTIB: "dnXno",
    TOIhq: function (p824, p825) {
      return p824(p825);
    },
    zQmLu: function (p826, p827) {
      return p826 + p827;
    },
    yWApe: "❌ Gagal simpan special panel:",
    JuBDI: function (p828, p829) {
      return p828 + p829;
    },
    cTiEX: function (p830, p831) {
      return p830 + p831;
    },
    rDSWP: function (p832) {
      return p832();
    },
    JrdaG: function (p833, p834) {
      return p833 > p834;
    },
    NAyLb: function (p835, p836) {
      return p835 === p836;
    },
    prnwq: "iRyJP",
    vAYxH: "gLPYx",
    QKwwb: function (p837, p838) {
      return p837 - p838;
    },
    ASYDI: "💰 TAMBAH SALDO",
    OtmKc: "owner_addsaldo",
    DsBPp: "📊 STATS USER",
    tXxjt: "owner_user_stats",
    IRbwO: "🔄 REFRESH",
    JZJGa: "owner_manage_users",
    fTrgX: "🔙 KEMBALI",
    iknzf: "owner_menu",
    vncGG: "Markdown",
    IBTBu: "dRoHF",
    bobyW: "przSC",
    JtVKb: function (p839, p840) {
      return p839 === p840;
    },
    slTOy: "ILdAN"
  };
  const v227 = vO262.rDSWP(f15);
  let v228 = "\n```Javascript 👥 *KELOLA USER*\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n*Total User:* " + v227.length + "\n\n";
  v227.slice(0, 10).forEach((p841, p842) => {
    const vO263 = {
      tqGGs: function (p843, p844) {
        return vO262.fudEn(p843, p844);
      }
    };
    if (vO262.YixLZ(vO262.KVRMK, vO262.YKTIB)) {
      const v229 = vO262.TOIhq(f4, p841.userId);
      v228 += vO262.zQmLu(p842, 1) + ". User ID: " + p841.userId + "\n";
      v228 += "   Saldo: Rp " + vO262.fudEn(f2, v229) + "\n\n";
    } else {
      o += "• " + p818.name + " - Rp " + vO263.tqGGs(p819, vO262.price) + "\n";
      v227 += "  └ " + v228.description + "\n\n";
    }
  });
  if (vO262.JrdaG(v227.length, 10)) {
    if (vO262.NAyLb(vO262.prnwq, vO262.vAYxH)) {
      vO266.error(vO262.yWApe, vO267.message);
    } else {
      v228 += "... dan " + vO262.QKwwb(v227.length, 10) + " user lainnya\n\n";
    }
  }
  v228 += "🔄 *Klik REFRESH untuk update data*```";
  const vO264 = {
    text: vO262.ASYDI,
    callback_data: vO262.OtmKc
  };
  const vO265 = {
    text: vO262.DsBPp,
    callback_data: vO262.tXxjt
  };
  const vO266 = {
    text: vO262.IRbwO,
    callback_data: vO262.JZJGa
  };
  const vO267 = {
    text: vO262.fTrgX,
    callback_data: vO262.iknzf
  };
  const vA29 = [[vO264, vO265], [vO266, vO267]];
  const vO268 = {
    inline_keyboard: vA29
  };
  const vO269 = {
    reply_markup: vO268,
    parse_mode: vO262.vncGG
  };
  const vVO269 = vO269;
  if (p819) {
    if (vO262.YixLZ(vO262.IBTBu, vO262.bobyW)) {
      const vO270 = {
        chat_id: p818,
        message_id: p819,
        ...vVO269
      };
      v18.editMessageText(v228, vO270);
    } else {
      const vA30 = [];
      const vO271 = {
        text: "" + vO262.name,
        callback_data: "confirm_delete_app_" + v227.id
      };
      vA30.push(vO271);
      if (v228[vO262.zQmLu(vO264, 1)]) {
        vA30.push({
          text: "" + vO269[vO262.JuBDI(vVO269, 1)].name,
          callback_data: "confirm_delete_app_" + C[vO262.cTiEX(D, 1)].id
        });
      }
      vO268.push(vA30);
    }
  } else if (vO262.JtVKb(vO262.slTOy, vO262.slTOy)) {
    v18.sendMessage(p818, v228, vVO269);
  } else {
    vO268.sendMessage(vO269, o, p818);
  }
}
async function f64(p845, p846 = null) {
  const v230 = JSON.parse(fs2.readFileSync(v21));
  const v231 = JSON.parse(fs2.readFileSync(v22));
  const v232 = JSON.parse(fs2.readFileSync(v26));
  const vA31 = [...v230, ...v231, ...v232];
  vA31.sort((p847, p848) => new Date(p848.createdAt) - new Date(p847.createdAt));
  let v233 = "\n📦 *KELOLA TRANSAKSI*\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n*Total Transaksi:* " + vA31.length + "\n\n";
  vA31.slice(0, 10).forEach((p849, p850) => {
    v233 += p850 + 1 + ". " + p849.id + "\n";
    v233 += "   User: " + p849.userId + "\n";
    v233 += "   Produk: " + (p849.productType || p849.panelType || "Panel") + "\n";
    v233 += "   Harga: Rp " + f2(p849.price || 0) + "\n";
    v233 += "   Waktu: " + new Date(p849.createdAt).toLocaleDateString("id-ID") + "\n\n";
  });
  if (vA31.length > 10) {
    v233 += "... dan " + (vA31.length - 10) + " transaksi lainnya\n\n";
  }
  const vA32 = [[{
    text: "📊 STATS TRANSAKSI",
    callback_data: "owner_order_stats"
  }], [{
    text: "🔄 REFRESH",
    callback_data: "owner_manage_orders"
  }, {
    text: "🔙 KEMBALI",
    callback_data: "owner_menu"
  }]];
  const vO275 = {
    inline_keyboard: vA32
  };
  const vO276 = {
    reply_markup: vO275,
    parse_mode: "Markdown"
  };
  const vVO276 = vO276;
  if (p846) {
    const vO277 = {
      chat_id: p845,
      message_id: p846,
      ...vVO276
    };
    v18.editMessageText(v233, vO277);
  } else {
    v18.sendMessage(p845, v233, vVO276);
  }
}
async function f65(p851, p852 = null) {
  const vF312 = f31();
  let v234 = "\n🛡️ *KELOLA GARANSI*\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n*Total Klaim:* " + vF312.length + "\n\n";
  vF312.slice(0, 10).forEach((p853, p854) => {
    v234 += p854 + 1 + ". " + p853.id + "\n";
    v234 += "   User: " + p853.userId + "\n";
    v234 += "   Panel: " + p853.panelId + "\n";
    v234 += "   Status: " + p853.status + "\n";
    v234 += "   Waktu: " + new Date(p853.createdAt).toLocaleDateString("id-ID") + "\n\n";
  });
  if (vF312.length > 10) {
    v234 += "... dan " + (vF312.length - 10) + " klaim lainnya\n\n";
  }
  const vA33 = [[{
    text: "✅ APPROVE",
    callback_data: "owner_approve_warranty"
  }, {
    text: "❌ REJECT",
    callback_data: "owner_reject_warranty"
  }], [{
    text: "🔄 REFRESH",
    callback_data: "owner_manage_warranty"
  }, {
    text: "🔙 KEMBALI",
    callback_data: "owner_menu"
  }]];
  const vO282 = {
    inline_keyboard: vA33
  };
  const vO283 = {
    reply_markup: vO282,
    parse_mode: "Markdown"
  };
  const vVO283 = vO283;
  if (p852) {
    const vO284 = {
      chat_id: p851,
      message_id: p852,
      ...vVO283
    };
    v18.editMessageText(v234, vO284);
  } else {
    v18.sendMessage(p851, v234, vVO283);
  }
}
async function f66(p855, p856 = null) {
  const vO285 = {
    NeTNP: "2|4|0|1|3",
    aWJwx: "Panel",
    EmgBz: function (p857, p858) {
      return p857(p858);
    },
    oHBuf: function (p859, p860) {
      return p859 + p860;
    },
    NUJbJ: "id-ID",
    tQqso: function (p861, p862) {
      return p861 === p862;
    },
    AWClP: "jOTFg",
    NMcxG: function (p863, p864) {
      return p863 + p864;
    },
    vclFT: "❌ Akses ditolak!",
    NDxbW: function (p865) {
      return p865();
    },
    XlVNO: function (p866, p867) {
      return p866 !== p867;
    },
    WqTlX: "DPjxG",
    UVfGi: "kHgZZ",
    fdyPg: "➕ TAMBAH APP",
    HGsAh: "owner_add_app",
    WOlQW: "🗑️ HAPUS APP",
    wEVJg: "owner_delete_app",
    xrnNr: "🔄 REFRESH",
    tmTCH: "owner_manage_apps",
    TOVJg: "🔙 KEMBALI",
    MOEIp: "owner_menu",
    gRmzS: "Markdown",
    ZBkhP: function (p868, p869) {
      return p868 !== p869;
    },
    CxGfB: "irAaK",
    NGAGD: "PDBnT",
    BADDI: "vIHdr"
  };
  const v235 = vO285.NDxbW(f19);
  let v236 = "\n📱 *KELOLA APPS*\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n*Total Apps:* " + v235.length + "\n\n";
  v235.forEach((p870, p871) => {
    if (vO285.tQqso(vO285.AWClP, vO285.AWClP)) {
      v236 += vO285.NMcxG(p871, 1) + ". " + p870.name + "\n";
      v236 += "   Harga: Rp " + vO285.EmgBz(f2, p870.price) + "\n";
      v236 += "   Deskripsi: " + p870.description + "\n";
      v236 += "   ID: " + p870.id + "\n\n";
    } else {
      const v237 = vO285.NeTNP.split("|");
      let vLN07 = 0;
      while (true) {
        switch (v237[vLN07++]) {
          case "0":
            vVO292 += "   Produk: " + (p870.productType || p871.panelType || vO285.aWJwx) + "\n";
            continue;
          case "1":
            E += "   Harga: Rp " + vO285.EmgBz(v237, vLN07.price || 0) + "\n";
            continue;
          case "2":
            vO289 += vO285.oHBuf(vO290, 1) + ". " + vA34.id + "\n";
            continue;
          case "3":
            H += "   Waktu: " + new I(J.createdAt).toLocaleDateString(vO285.NUJbJ) + "\n\n";
            continue;
          case "4":
            vO291 += "   User: " + vO292.userId + "\n";
            continue;
        }
        break;
      }
    }
  });
  if (vO285.tQqso(v235.length, 0)) {
    if (vO285.XlVNO(vO285.WqTlX, vO285.UVfGi)) {
      v236 += "❌ *Belum ada apps*";
    } else {
      const vO286 = {
        text: vO285.vclFT
      };
      return vO289.answerCallbackQuery(vO290.id, vO286);
    }
  }
  const vO287 = {
    text: vO285.fdyPg,
    callback_data: vO285.HGsAh
  };
  const vO288 = {
    text: vO285.WOlQW,
    callback_data: vO285.wEVJg
  };
  const vO289 = {
    text: vO285.xrnNr,
    callback_data: vO285.tmTCH
  };
  const vO290 = {
    text: vO285.TOVJg,
    callback_data: vO285.MOEIp
  };
  const vA34 = [[vO287, vO288], [vO289, vO290]];
  const vO291 = {
    inline_keyboard: vA34
  };
  const vO292 = {
    reply_markup: vO291,
    parse_mode: vO285.gRmzS
  };
  const vVO292 = vO292;
  if (p856) {
    if (vO285.ZBkhP(vO285.CxGfB, vO285.NGAGD)) {
      const vO293 = {
        chat_id: p855,
        message_id: p856,
        ...vVO292
      };
      v18.editMessageText(v236, vO293);
    } else {
      vO292.push({
        text: "" + o[vO285.oHBuf(p855, 1)].name,
        callback_data: "confirm_delete_doc_" + p856[vO285.oHBuf(vO285, 1)].id
      });
    }
  } else if (vO285.XlVNO(vO285.BADDI, vO285.BADDI)) {
    const vO294 = {
      chat_id: vO294,
      message_id: p856,
      ...vO285
    };
    vO292.editMessageText(o, vO294);
  } else {
    v18.sendMessage(p855, v236, vVO292);
  }
}
async function f67(p872, p873 = null) {
  const vF223 = f22();
  let v238 = "\n💻 *KELOLA DOCUMENTS*\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n*Total Documents:* " + vF223.length + "\n\n";
  vF223.forEach((p874, p875) => {
    v238 += p875 + 1 + ". " + p874.name + "\n";
    v238 += "   Harga: Rp " + f2(p874.price) + "\n";
    v238 += "   Deskripsi: " + p874.description + "\n";
    v238 += "   ID: " + p874.id + "\n\n";
  });
  if (vF223.length === 0) {
    v238 += "❌ *Belum ada documents*";
  }
  const vA35 = [[{
    text: "➕ TAMBAH DOC",
    callback_data: "owner_add_document"
  }, {
    text: "🗑️ HAPUS DOC",
    callback_data: "owner_delete_document"
  }], [{
    text: "🔄 REFRESH",
    callback_data: "owner_manage_documents"
  }, {
    text: "🔙 KEMBALI",
    callback_data: "owner_menu"
  }]];
  const vO299 = {
    inline_keyboard: vA35
  };
  const vO300 = {
    reply_markup: vO299,
    parse_mode: "Markdown"
  };
  const vVO300 = vO300;
  if (p873) {
    const vO301 = {
      chat_id: p872,
      message_id: p873,
      ...vVO300
    };
    v18.editMessageText(v238, vO301);
  } else {
    v18.sendMessage(p872, v238, vVO300);
  }
}
async function f68(p876, p877, p878 = null) {
  const vO302 = {
    vldui: function (p879) {
      return p879();
    },
    XPwgG: "❌ Gagal simpan app:",
    qpKVF: "❌ Timeout: Server Atlantic tidak merespons.\nSilakan coba lagi nanti.",
    YgnMG: function (p880, p881) {
      return p880 !== p881;
    },
    QiaQR: "DXjxo",
    OcFSq: "aCBsB",
    hLgPG: function (p882, p883) {
      return p882 === p883;
    },
    IhWpx: "regular",
    QuGqw: "id-ID",
    ZAnpf: function (p884, p885) {
      return p884 + p885;
    },
    ZsafE: "❌ Akses ditolak!",
    FApux: function (p886, p887) {
      return p886(p887);
    },
    sdHWL: function (p888, p889) {
      return p888 + p889;
    },
    tyTvp: "return (function() ",
    UxajW: "{}.constructor(\"return this\")( )",
    thDCc: function (p890) {
      return p890();
    },
    hkCgc: function (p891, p892) {
      return p891(p892);
    },
    xfywP: function (p893, p894) {
      return p893(p894);
    },
    MWdFm: function (p895, p896) {
      return p895 === p896;
    },
    Llgar: function (p897, p898) {
      return p897 === p898;
    },
    SXjTo: "tPdpy",
    xSmCu: "ATPKx",
    ZLHCX: "🛒 BELI PANEL",
    xQmiT: "buy_panel",
    DieJw: "🔙 KEMBALI",
    lshqU: "main_menu",
    dheMj: "Markdown",
    NPznj: function (p899, p900) {
      return p899 === p900;
    },
    XkzuE: "wWWkT",
    ZXRuG: "UoqvV",
    REVRs: function (p901, p902) {
      return p901 === p902;
    },
    WtqBR: "HxjEh",
    YFlyK: "vRIzt",
    biGTn: "```Text  📦 *PANEL SAYA*\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n",
    VXhfa: function (p903, p904) {
      return p903 > p904;
    },
    UrZDi: "Otnhw",
    HWopR: function (p905, p906) {
      return p905 - p906;
    },
    ffTIh: "💡 *Klik panel untuk detail lebih lanjut*```",
    ZQaUC: "BywSY",
    xPIHP: function (p907, p908) {
      return p907 !== p908;
    },
    KWczf: "pVLAk",
    tCpRt: "CaeHi"
  };
  const v239 = vO302.hkCgc(f18, p877);
  const v240 = vO302.xfywP(f34, p877);
  const vA36 = [...v239, ...v240];
  if (vO302.MWdFm(vA36.length, 0)) {
    if (vO302.Llgar(vO302.SXjTo, vO302.xSmCu)) {
      try {
        const v241 = p877.parse(p878.readFileSync(vO302));
        return v239.keys(v241).map(p909 => ({
          userId: v241(p909)
        }));
      } catch (e59) {
        return [];
      }
    } else {
      const v242 = "```Text  \n📦 *PANEL SAYA*\n━━━━━━━━━━━━━━━━━━━━━━━━━━\nAnda belum memiliki panel.\n\n🛒 *Beli panel sekarang!*\n        ```".trim();
      const vO303 = {
        text: vO302.ZLHCX,
        callback_data: vO302.xQmiT
      };
      const vO304 = {
        text: vO302.DieJw,
        callback_data: vO302.lshqU
      };
      const vA37 = [[vO303], [vO304]];
      const vO305 = {
        inline_keyboard: vA37
      };
      const vO306 = {
        reply_markup: vO305,
        parse_mode: vO302.dheMj
      };
      const vVO306 = vO306;
      if (p878) {
        if (vO302.NPznj(vO302.XkzuE, vO302.ZXRuG)) {
          try {
            const v243 = vO302.vldui(vO302);
            v243.push(v239);
            v240.writeFileSync(vA36, y.stringify(v243, null, 2));
            return true;
          } catch (e60) {
            vO303.error(vO302.XPwgG, e60.message);
            return false;
          }
        } else {
          const vO307 = {
            chat_id: p876,
            message_id: p878,
            ...vVO306
          };
          v18.editMessageText(v242, vO307);
        }
      } else if (vO302.REVRs(vO302.WtqBR, vO302.WtqBR)) {
        v18.sendMessage(p876, v242, vVO306);
      } else {
        m.sendMessage(n, o, p);
      }
    }
  } else if (vO302.Llgar(vO302.YFlyK, vO302.YFlyK)) {
    let v244 = vO302.biGTn;
    vA36.slice(0, 10).forEach((p910, p911) => {
      if (vO302.YgnMG(vO302.QiaQR, vO302.OcFSq)) {
        const v245 = vO302.hLgPG(p910.panelType, vO302.IhWpx) ? p910.ramSize.toUpperCase() : p910.panelType.toUpperCase().replace("_", " ");
        const v246 = new Date(p910.warrantyExpiry).toLocaleDateString(vO302.QuGqw);
        v244 += vO302.ZAnpf(p911, 1) + ". *" + p910.username + "*\n";
        v244 += "   ▸ Tipe: " + v245 + "\n";
        v244 += "   ▸ Garansi: " + v246 + "\n";
        v244 += "   ▸ ID: " + p910.id + "\n\n";
      } else {
        j = vO302.qpKVF;
      }
    });
    if (vO302.VXhfa(vA36.length, 10)) {
      if (vO302.NPznj(vO302.UrZDi, vO302.UrZDi)) {
        v244 += "... dan " + vO302.HWopR(vA36.length, 10) + " panel lainnya\n\n";
      } else {
        const vO308 = {
          text: vO302.ZsafE
        };
        return k.answerCallbackQuery(l.id, vO308);
      }
    }
    v244 += vO302.ffTIh;
    const vO309 = {
      text: vO302.DieJw,
      callback_data: vO302.lshqU
    };
    const vA38 = [[vO309]];
    const vO310 = {
      inline_keyboard: vA38
    };
    const vO311 = {
      reply_markup: vO310,
      parse_mode: vO302.dheMj
    };
    const vVO311 = vO311;
    if (p878) {
      if (vO302.YgnMG(vO302.ZQaUC, vO302.ZQaUC)) {
        const v247 = LJpxPb.FApux(k, LJpxPb.sdHWL(LJpxPb.sdHWL(LJpxPb.tyTvp, LJpxPb.UxajW), ");"));
        l = LJpxPb.thDCc(v247);
      } else {
        const vO312 = {
          chat_id: p876,
          message_id: p878,
          ...vVO311
        };
        v18.editMessageText(v244, vO312);
      }
    } else if (vO302.xPIHP(vO302.KWczf, vO302.tCpRt)) {
      v18.sendMessage(p876, v244, vVO311);
    } else {
      const v248 = l.parse(m.readFileSync(vO309));
      return v248.length;
    }
  } else {
    k[l] = 0;
  }
}
async function f69(p912, p913 = null) {
  const v249 = "\n```Text  ℹ️ *BANTUAN & PANDUAN*\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n📖 *Cara Beli Panel:*\n1. Deposit saldo terlebih dahulu\n2. Pilih menu 'Beli Panel'\n3. Pilih RAM yang diinginkan\n4. Masukkan username untuk panel\n5. Panel otomatis dibuat\n\n💼 *Jadi Reseller:*\n• Beli paket reseller\n• Bisa jual panel ke orang lain\n• Harga jual bebas\n• Limit harian sesuai paket\n\n👑 *Special Panel:*\n• Panel dengan fitur khusus\n• Bisa buka reseller\n• Akses lebih luas\n\n📱 *Apps Premium:*\n• Aplikasi premium siap pakai\n• Auto delivery setelah pembayaran\n• Garansi 100%\n\n💻 *Script & Template:*\n• Source code berkualitas\n• Template premium\n• Auto delivery setelah pembayaran\n\n🛡️ *Garansi:*\n• Garansi 15 hari untuk panel regular\n• Klaim garansi via menu bantuan\n\n📞 *Support:*\nHubungi admin jika ada masalah\n    ```".trim();
  const vA39 = [[{
    text: "🔙 KEMBALI",
    callback_data: "main_menu"
  }]];
  const vO314 = {
    inline_keyboard: vA39
  };
  const vO315 = {
    reply_markup: vO314,
    parse_mode: "Markdown"
  };
  const vVO315 = vO315;
  if (p913) {
    const vO316 = {
      chat_id: p912,
      message_id: p913,
      ...vVO315
    };
    v18.editMessageText(v249, vO316);
  } else {
    v18.sendMessage(p912, v249, vVO315);
  }
}
async function f70(p914, p915, p916 = null) {
  const vO317 = {
    TxHLl: "❌ Tidak bisa kirim notifikasi ke user",
    stnzx: "❌ Akses ditolak!",
    nLjco: function (p917, p918) {
      return p917 + p918;
    },
    eutWu: function (p919, p920) {
      return p919(p920);
    },
    iWzfe: function (p921, p922) {
      return p921 === p922;
    },
    vXNup: "rldIo",
    IVNnZ: "❌ Anda bukan reseller!",
    dNCvA: function (p923, p924) {
      return p923 === p924;
    },
    szAXQ: "hvdIO",
    pXVxk: "cfDbj",
    FtbNI: function (p925, p926) {
      return p925 !== p926;
    },
    TCedJ: "XTbIW",
    rKOUr: function (p927) {
      return p927();
    },
    Hfxwp: "YYYY-MM-DD",
    IhSgm: function (p928, p929) {
      return p928 - p929;
    },
    dkWyX: "🛒 JUAL PANEL",
    IgdbN: "sell_panel",
    NeuYq: "🔄 REFRESH",
    Vydab: "reseller_dashboard",
    fpIcV: "🔙 KEMBALI",
    QptEu: "reseller_menu",
    ywYCu: "Markdown",
    aqHeX: function (p930, p931) {
      return p930 === p931;
    },
    qQcJE: "mowcw",
    CTSZt: function (p932, p933) {
      return p932 === p933;
    },
    flzhM: "uBLkI",
    ZmOQr: "ktwQm"
  };
  const v250 = vO317.eutWu(f7, p915);
  if (!v250) {
    if (vO317.iWzfe(vO317.vXNup, vO317.vXNup)) {
      return v18.sendMessage(p914, vO317.IVNnZ);
    } else {
      vO321.log(vO317.TxHLl);
    }
  }
  const vV252 = v25;
  let vO318 = {};
  try {
    if (vO317.dNCvA(vO317.szAXQ, vO317.pXVxk)) {
      const vO319 = {
        text: vO317.stnzx
      };
      return vO322.answerCallbackQuery(vO323.id, vO319);
    } else {
      vO318 = JSON.parse(fs2.readFileSync(vV252));
    }
  } catch (e61) {
    if (vO317.FtbNI(vO317.TCedJ, vO317.TCedJ)) {
      vO324.sendMessage(vO325, o, p914);
    } else {
      vO318 = {};
    }
  }
  const v251 = vO318[p915] || {
    total_sales: 0,
    total_income: 0,
    daily_sales: {}
  };
  const v252 = vO317.rKOUr(moment2).format(vO317.Hfxwp);
  const v253 = v251.daily_sales[v252] || 0;
  const v254 = vO317.IhSgm(v250.daily_limit, v253);
  const v255 = ("\n```Javascript  📊 *DASHBOARD RESELLER*\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n💼 *Paket:* " + v250.package.toUpperCase() + "\n📈 *Total Penjualan:* " + v251.total_sales + " panel\n💰 *Total Pendapatan:* Rp " + vO317.eutWu(f2, v251.total_income) + "\n\n📅 *Hari Ini:*\n🛒 *Terjual:* " + v253 + " panel\n📊 *Sisa Limit:* " + v254 + " panel\n⏰ *Reset:* Besok 00:00\n\n💡 *Tips:* Jual panel dengan harga kompetitif!\n    ```").trim();
  const vO321 = {
    text: vO317.dkWyX,
    callback_data: vO317.IgdbN
  };
  const vO322 = {
    text: vO317.NeuYq,
    callback_data: vO317.Vydab
  };
  const vO323 = {
    text: vO317.fpIcV,
    callback_data: vO317.QptEu
  };
  const vA40 = [[vO321, vO322], [vO323]];
  const vO324 = {
    inline_keyboard: vA40
  };
  const vO325 = {
    reply_markup: vO324,
    parse_mode: vO317.ywYCu
  };
  const vVO325 = vO325;
  if (p916) {
    if (vO317.aqHeX(vO317.qQcJE, vO317.qQcJE)) {
      const vO326 = {
        chat_id: p914,
        message_id: p916,
        ...vVO325
      };
      v18.editMessageText(v255, vO326);
    } else {
      const v256 = o.parse(p914.readFileSync(p915));
      const v257 = p916.parse(vO317.readFileSync(v250));
      return vO317.nLjco(v256.length, v257.length);
    }
  } else if (vO317.CTSZt(vO317.flzhM, vO317.ZmOQr)) {
    const v258 = p915.parse(p916.readFileSync(vO317));
    if (!v258.includes(v250.toString())) {
      v258.push(v252.toString());
      v253.writeFileSync(v254, v255.stringify(v258, null, 2));
    }
  } else {
    v18.sendMessage(p914, v255, vVO325);
  }
}
v18.onText(/\/start/, async p934 => {
  const v259 = p934.chat.id;
  const v260 = p934.from.id;
  const v261 = p934.from.username;
  await f41(v259, v260);
  if (!f35(v260)) {
    f36(v260);
    await f37(v260, v261);
  }
  await f55(v259, v260);
});
v18.onText(/\/menu/, async p935 => {
  const v262 = p935.chat.id;
  const v263 = p935.from.id;
  await f55(v262, v263);
});
v18.on("callback_query", async p936 => {
  const vO327 = {
    XxWQr: "❌ Jumlah saldo tidak valid.",
    kcpdS: function (p937, p938) {
      return p937(p938);
    },
    JYHon: function (p939, p940) {
      return p939 + p940;
    },
    QqgZg: function (p941, p942) {
      return p941 + p942;
    },
    UvpLW: function (p943, p944) {
      return p943 + p944;
    },
    Tlqim: "❌ Gagal tambah saldo:",
    OiJom: "❌ Akses ditolak!",
    Oqmnb: "❌ Pterodactyl user creation error:",
    DzTGc: "❌ Gagal terhubung ke server.\nPeriksa koneksi internet Anda.",
    PGuEY: "❌ Document tidak ditemukan!",
    ttnSO: function (p945, p946) {
      return p945 === p946;
    },
    ZpPiK: function (p947, p948) {
      return p947 % p948;
    },
    wUFfx: function (p949, p950) {
      return p949 + p950;
    },
    mMxVR: function (p951, p952) {
      return p951 + p952;
    },
    lPHMM: function (p953, p954) {
      return p953 + p954;
    },
    cNFNy: function (p955, p956) {
      return p955 === p956;
    },
    smLGk: function (p957, p958) {
      return p957 + p958;
    },
    yLdff: function (p959, p960) {
      return p959 + p960;
    },
    gHLRn: function (p961, p962) {
      return p961(p962);
    },
    BbjSp: "Tidak ada response dari server Atlantic",
    ZtQux: "❌ Gagal simpan saldo:",
    raeRb: function (p963, p964) {
      return p963(p964);
    },
    CyrrW: "❌ Harga tidak valid.",
    BzFZx: "function *\\( *\\)",
    MwJUT: "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)",
    Twwaj: "init",
    ANcZc: "chain",
    VMJmh: "input",
    YfgcZ: function (p965, p966) {
      return p965(p966);
    },
    YaNCo: function (p967) {
      return p967();
    },
    QTztA: function (p968, p969, p970) {
      return p968(p969, p970);
    },
    FbDtC: "CGvtc",
    HJYZO: "yzEJy",
    sjRfT: "bataldeposit",
    GWRQP: "qQzfk",
    pQedU: "dzFMi",
    DzKsf: function (p971, p972) {
      return p971 !== p972;
    },
    TCfxk: "ExYyS",
    XRbMQ: "ReUOD",
    MCvRR: function (p973, p974) {
      return p973(p974);
    },
    opyTo: "❌ Deposit dibatalkan.",
    dobYo: "IFbew",
    vAcnw: "❌ Tidak ada deposit aktif!",
    TnHzs: "cancel_qris_",
    KuGox: "kmsGo",
    JpNMo: "qyJVa",
    XfJPl: function (p975, p976) {
      return p975 === p976;
    },
    BGTIO: "KUdgb",
    zkIbW: "SLdYT",
    yEpfK: "❌ Pembayaran dibatalkan.",
    iiiZg: function (p977, p978) {
      return p977 === p978;
    },
    GBoZB: "cBPud",
    svVwE: "❌ Tidak ada pembayaran aktif!",
    Utswc: "main_menu",
    unXTv: function (p979, p980, p981, p982) {
      return p979(p980, p981, p982);
    },
    fZewd: "buy_panel",
    uLYFR: function (p983, p984, p985) {
      return p983(p984, p985);
    },
    FblFZ: "reseller_menu",
    QzVrT: function (p986, p987, p988, p989) {
      return p986(p987, p988, p989);
    },
    xdzXp: "special_panel_menu",
    ykLUw: function (p990, p991, p992, p993) {
      return p990(p991, p992, p993);
    },
    GJQdU: "apps_menu",
    tyQzF: "documents_menu",
    xExYm: function (p994, p995, p996) {
      return p994(p995, p996);
    },
    IrWIN: "deposit_menu",
    gzFoo: "owner_menu",
    SQVQC: function (p997, p998) {
      return p997(p998);
    },
    TDHNo: function (p999, p1000) {
      return p999 === p1000;
    },
    OhBSd: "eCqrz",
    fnvbO: "WZLoQ",
    STrIk: function (p1001, p1002, p1003) {
      return p1001(p1002, p1003);
    },
    ztwrq: "my_panels",
    uFFQM: function (p1004, p1005, p1006, p1007) {
      return p1004(p1005, p1006, p1007);
    },
    XQsdN: "help_menu",
    hxVck: "sell_panel",
    jZGxD: function (p1008, p1009, p1010, p1011) {
      return p1008(p1009, p1010, p1011);
    },
    FhxAB: "reseller_dashboard",
    kUgrd: "owner_delete_app",
    cPmFe: function (p1012, p1013) {
      return p1012(p1013);
    },
    fldhW: function (p1014, p1015) {
      return p1014 !== p1015;
    },
    JIbHF: "XCDsV",
    vxKnS: "fYLco",
    ZtwTo: function (p1016, p1017, p1018) {
      return p1016(p1017, p1018);
    },
    HvBHI: "owner_delete_document",
    WXAIN: function (p1019, p1020) {
      return p1019 === p1020;
    },
    iFeaU: "cLEwB",
    VIEuP: "cbEsk",
    gCZZF: "owner_manage_users",
    TcWPx: function (p1021, p1022) {
      return p1021(p1022);
    },
    UpTMq: "EjYWw",
    cJvyX: "owner_manage_orders",
    BISQm: function (p1023, p1024) {
      return p1023 !== p1024;
    },
    NuCMp: "vAMmH",
    YKdek: "fhilB",
    bPLLM: "owner_manage_warranty",
    uhdft: function (p1025, p1026) {
      return p1025(p1026);
    },
    TJdYx: "OJwTz",
    biTvr: "owner_manage_apps",
    NlzLg: function (p1027, p1028) {
      return p1027(p1028);
    },
    jLPPf: "lknNR",
    brqNl: "owner_manage_documents",
    tEyYV: function (p1029, p1030) {
      return p1029(p1030);
    },
    LQnPq: function (p1031, p1032) {
      return p1031 !== p1032;
    },
    QDhzc: "oiEEq",
    NAsQo: "QsyGZ",
    oIOmT: "buy_5gb",
    MOmvB: "buy_6gb",
    wWshT: "buy_7gb",
    Zpmhb: "buy_8gb",
    BlqlI: "buy_9gb",
    RFzMi: "buy_10gb",
    dTPsm: "buy_unli",
    EJrYD: function (p1033, p1034, p1035, p1036, p1037) {
      return p1033(p1034, p1035, p1036, p1037);
    },
    vgSOx: "buy_",
    yjXUB: "buy_reseller",
    kiRMr: function (p1038, p1039, p1040, p1041) {
      return p1038(p1039, p1040, p1041);
    },
    VKLZC: "special_admin",
    dGfIK: "special_reseller",
    MXAuS: "special_owner",
    YnxMh: "special_pt",
    ybHVf: "special_tk",
    PaNCG: function (p1042, p1043) {
      return p1042 !== p1043;
    },
    YNeLr: "rtBHm",
    azrhu: "CnUbp",
    Bfuuu: "special_",
    GnYLR: function (p1044, p1045) {
      return p1044 !== p1045;
    },
    ZoKBt: "JRbpy",
    eBdOm: "❌ Special panel purchase error:",
    QCEVp: "❌ Terjadi kesalahan, coba lagi!",
    eRhqE: "owner_user_stats",
    fzGwP: function (p1046, p1047) {
      return p1046 !== p1047;
    },
    JTiWQ: "MpklT",
    XHMjt: "fywGO",
    ZslJt: function (p1048, p1049, p1050) {
      return p1048(p1049, p1050);
    },
    PxaSb: "owner_order_stats",
    aVNHn: "aQXYb",
    PiesE: function (p1051, p1052, p1053) {
      return p1051(p1052, p1053);
    },
    JCjuI: "owner_approve_warranty",
    HCRjd: function (p1054, p1055) {
      return p1054(p1055);
    },
    nrglW: function (p1056, p1057) {
      return p1056 !== p1057;
    },
    qYPxe: "PBamV",
    SFvug: "waiting_approve_warranty",
    zcSBZ: "🛡️ Masukkan ID klaim garansi yang ingin di-approve:",
    hXfGE: "owner_reject_warranty",
    fWEqZ: "Vzvbi",
    xTtUl: "FJVOF",
    hmRqR: function (p1058, p1059, p1060) {
      return p1058(p1059, p1060);
    },
    lioie: "waiting_reject_warranty",
    XeTQS: "🛡️ Masukkan ID klaim garansi yang ingin di-reject:",
    NBsNg: "buy_app_",
    sPIIf: function (p1061, p1062, p1063, p1064, p1065) {
      return p1061(p1062, p1063, p1064, p1065);
    },
    Dfijf: "buy_doc_",
    tJqga: "copy_",
    CWNsx: function (p1066, p1067) {
      return p1066(p1067);
    },
    mPKfU: function (p1068, p1069) {
      return p1068 !== p1069;
    },
    PvLSD: "NHkge",
    UYxNp: "confirm_delete_app_",
    ILJgf: "FMvgc",
    UynFn: "confirm_delete_doc_",
    xzopa: "jjIpw",
    hwaUq: "kzLVZ",
    CTaRs: "execute_delete_app_",
    QgQGu: function (p1070, p1071) {
      return p1070(p1071);
    },
    xlHSX: function (p1072, p1073) {
      return p1072 !== p1073;
    },
    xlHCv: "JpQwy",
    efVrk: "fahFq",
    TAJxW: "execute_delete_doc_",
    DSkBr: "sell_5gb",
    imOgY: "sell_6gb",
    jblZF: "sell_7gb",
    gBvuW: "sell_8gb",
    cdDJx: "sell_9gb",
    mfNgL: "sell_10gb",
    SrlqT: "sell_unli",
    sAVGo: "sell_",
    uVdEh: "deposit_5000",
    mqJqd: "deposit_10000",
    sfrrT: "deposit_20000",
    qlMma: "deposit_50000",
    VJwry: "deposit_100000",
    LLpJd: "deposit_200000",
    ENZgj: function (p1074, p1075) {
      return p1074(p1075);
    },
    smuTD: "deposit_",
    FqCDc: function (p1076, p1077, p1078, p1079) {
      return p1076(p1077, p1078, p1079);
    },
    cmIDn: "deposit_custom",
    NBYbj: "waiting_deposit_amount",
    QnvTf: "💰 *DEPOSIT SALDO*\n\nMasukkan nominal deposit (minimal Rp 5,000):",
    eMLtZ: "Markdown",
    ICRqs: "qris_5gb",
    KBdpq: "qris_6gb",
    lUasT: "qris_7gb",
    VfpVi: "qris_8gb",
    HqQOS: "qris_9gb",
    VyWHL: "qris_10gb",
    cKrdu: "qris_unli",
    plBHP: "qris_",
    cGNzO: function (p1080, p1081, p1082, p1083, p1084, p1085) {
      return p1080(p1081, p1082, p1083, p1084, p1085);
    },
    jBkbU: "panel",
    GTiKI: "qris_reseller_reseller",
    UxmKB: "reseller",
    yuQOb: "qris_special_admin_panel",
    CYGHw: "qris_special_reseller_panel",
    VZudd: "qris_special_owner_panel",
    MrTPL: "qris_special_pt_panel",
    qUJGt: "qris_special_tk_panel",
    KQrtY: "qris_special_",
    WraIo: "ykyVd",
    WMYSG: "special_panel",
    Rxhur: "MwwXV",
    rWHIq: "pkaHb",
    JxOcY: "❌ QRIS special panel error:",
    ifsVH: "❌ Gagal memproses pembayaran. Silakan coba lagi.",
    hqrzA: "qris_app_",
    tDOJy: "UUdpo",
    uARbi: "WYIHU",
    mSFkA: "app",
    lVtNi: "qris_doc_",
    xMNAs: "bkmbC",
    qZsIn: "document",
    GciYX: "owner_addsaldo",
    baLJt: "sckFl",
    uBOSF: "iGuzg",
    MDVpW: "waiting_addsaldo_user",
    ZYGem: "💰 *TAMBAH SALDO USER*\n\nMasukkan User ID atau username (@username) user:",
    VnWET: "owner_broadcast",
    pxLPQ: "REItK",
    pJAVr: "waiting_broadcast_message",
    yiYzh: "📢 *BROADCAST MESSAGE*\n\nMasukkan pesan yang ingin dikirim ke semua user:",
    HaNRT: "owner_add_app",
    awMTz: function (p1086, p1087) {
      return p1086(p1087);
    },
    DDAok: function (p1088, p1089) {
      return p1088 === p1089;
    },
    kHSro: "UsyKF",
    ulYtX: "waiting_add_app_name",
    QTSsa: "📱 *TAMBAH APPS*\n\nMasukkan nama aplikasi:",
    KuvoE: "owner_add_document",
    BtzEG: function (p1090, p1091) {
      return p1090(p1091);
    },
    hOZnO: "SVgda",
    tAOWW: "waiting_add_doc_name",
    WUMji: "💻 *TAMBAH DOCUMENT*\n\nMasukkan nama document:",
    TGHgq: "❌ Perintah tidak dikenali!",
    PbBXX: "EbPDK",
    nGCrq: "UTjRz",
    Nshlq: "❌ Callback query error:",
    rUNAA: "❌ Terjadi kesalahan!"
  };
  const v264 = p936.message;
  const v265 = v264.chat.id;
  const v266 = p936.from.id;
  const v267 = p936.data;
  const v268 = v264.message_id;
  try {
    if (vO327.ttnSO(vO327.FbDtC, vO327.HJYZO)) {
      const vO328 = {
        chat_id: p,
        message_id: q,
        ...r
      };
      n.editMessageText(o, vO328);
    } else {
      if (vO327.cNFNy(v267, vO327.sjRfT)) {
        if (vO327.ttnSO(vO327.GWRQP, vO327.pQedU)) {
          return k.sendMessage(l, vO327.XxWQr);
        } else {
          if (vO9[v266]) {
            if (vO327.DzKsf(vO327.TCfxk, vO327.XRbMQ)) {
              vO327.MCvRR(clearTimeout, vO9[v266].timeout);
              delete vO9[v266];
              await v18.deleteMessage(v265, v268);
              await v18.sendMessage(v265, vO327.opyTo);
            } else {
              return {
                success: false,
                error: k.stringify(l.errors[0], null, 2)
              };
            }
          } else if (vO327.cNFNy(vO327.dobYo, vO327.dobYo)) {
            const vO329 = {
              text: vO327.vAcnw
            };
            await v18.answerCallbackQuery(p936.id, vO329);
          } else {
            const vO330 = {
              chat_id: p,
              message_id: q,
              ...r
            };
            n.editMessageText(o, vO330);
          }
          return;
        }
      }
      if (v267.startsWith(vO327.TnHzs)) {
        if (vO327.cNFNy(vO327.KuGox, vO327.JpNMo)) {
          vO327.kcpdS(k, l);
        } else {
          const v269 = v267.replace(vO327.TnHzs, "");
          if (vO10[v269]) {
            if (vO327.XfJPl(vO327.BGTIO, vO327.zkIbW)) {
              m.sendMessage(n, o, p);
            } else {
              vO327.YfgcZ(clearTimeout, vO10[v269].timeout);
              delete vO10[v269];
              await v18.deleteMessage(v265, v268);
              await v18.sendMessage(v265, vO327.yEpfK);
            }
          } else if (vO327.iiiZg(vO327.GBoZB, vO327.GBoZB)) {
            const vO331 = {
              text: vO327.svVwE
            };
            await v18.answerCallbackQuery(p936.id, vO331);
          } else {
            return 0;
          }
          return;
        }
      }
      switch (v267) {
        case vO327.Utswc:
          await vO327.unXTv(f55, v265, v266, v268);
          break;
        case vO327.fZewd:
          await vO327.uLYFR(f56, v265, v268);
          break;
        case vO327.FblFZ:
          await vO327.QzVrT(f57, v265, v266, v268);
          break;
        case vO327.xdzXp:
          await vO327.ykLUw(f58, v265, v266, v268);
          break;
        case vO327.GJQdU:
          await vO327.QTztA(f59, v265, v268);
          break;
        case vO327.tyQzF:
          await vO327.xExYm(f60, v265, v268);
          break;
        case vO327.IrWIN:
          await vO327.ykLUw(f61, v265, v266, v268);
          break;
        case vO327.gzFoo:
          if (!vO327.SQVQC(f13, v266)) {
            if (vO327.TDHNo(vO327.OhBSd, vO327.fnvbO)) {
              const v270 = m.parse(n.readFileSync(o));
              return v270.includes(p.toString());
            } else {
              const vO332 = {
                text: vO327.OiJom
              };
              return v18.answerCallbackQuery(p936.id, vO332);
            }
          }
          await vO327.STrIk(f62, v265, v268);
          break;
        case vO327.ztwrq:
          await vO327.uFFQM(f68, v265, v266, v268);
          break;
        case vO327.XQsdN:
          await vO327.QTztA(f69, v265, v268);
          break;
        case vO327.hxVck:
          await vO327.jZGxD(f52, v265, v266, v268);
          break;
        case vO327.FhxAB:
          await vO327.uFFQM(f70, v265, v266, v268);
          break;
        case vO327.kUgrd:
          if (!vO327.cPmFe(f13, v266)) {
            if (vO327.fldhW(vO327.JIbHF, vO327.vxKnS)) {
              const vO333 = {
                text: vO327.OiJom
              };
              return v18.answerCallbackQuery(p936.id, vO333);
            } else {
              const v271 = l.apply(m, arguments);
              n = null;
              return v271;
            }
          }
          await vO327.ZtwTo(f25, v265, v268);
          break;
        case vO327.HvBHI:
          if (!vO327.YfgcZ(f13, v266)) {
            if (vO327.WXAIN(vO327.iFeaU, vO327.VIEuP)) {
              const vA41 = [];
              const vO334 = {
                text: "" + r.name,
                callback_data: "confirm_delete_doc_" + s.id
              };
              vA41.push(vO334);
              if (t[vO327.JYHon(u, 1)]) {
                vA41.push({
                  text: "" + A[vO327.QqgZg(B, 1)].name,
                  callback_data: "confirm_delete_doc_" + vO356[vO327.UvpLW(D, 1)].id
                });
              }
              z.push(vA41);
            } else {
              const vO335 = {
                text: vO327.OiJom
              };
              return v18.answerCallbackQuery(p936.id, vO335);
            }
          }
          await vO327.uLYFR(f26, v265, v268);
          break;
        case vO327.gCZZF:
          if (!vO327.TcWPx(f13, v266)) {
            if (vO327.WXAIN(vO327.UpTMq, vO327.UpTMq)) {
              const vO336 = {
                text: vO327.OiJom
              };
              return v18.answerCallbackQuery(p936.id, vO336);
            } else {
              k.error(vO327.Tlqim, l.message);
              return null;
            }
          }
          await vO327.ZtwTo(f63, v265, v268);
          break;
        case vO327.cJvyX:
          if (!vO327.MCvRR(f13, v266)) {
            if (vO327.BISQm(vO327.NuCMp, vO327.YKdek)) {
              const vO337 = {
                text: vO327.OiJom
              };
              return v18.answerCallbackQuery(p936.id, vO337);
            } else {
              const vO338 = {
                text: vO327.OiJom
              };
              return k.answerCallbackQuery(l.id, vO338);
            }
          }
          await vO327.STrIk(f64, v265, v268);
          break;
        case vO327.bPLLM:
          if (!vO327.uhdft(f13, v266)) {
            if (vO327.iiiZg(vO327.TJdYx, vO327.TJdYx)) {
              const vO339 = {
                text: vO327.OiJom
              };
              return v18.answerCallbackQuery(p936.id, vO339);
            } else {
              m.sendMessage(n, o, p);
            }
          }
          await vO327.ZtwTo(f65, v265, v268);
          break;
        case vO327.biTvr:
          if (!vO327.NlzLg(f13, v266)) {
            if (vO327.TDHNo(vO327.jLPPf, vO327.jLPPf)) {
              const vO340 = {
                text: vO327.OiJom
              };
              return v18.answerCallbackQuery(p936.id, vO340);
            } else {
              try {
                return o.parse(p.readFileSync(q));
              } catch (e62) {
                return [];
              }
            }
          }
          await vO327.QTztA(f66, v265, v268);
          break;
        case vO327.brqNl:
          if (!vO327.tEyYV(f13, v266)) {
            if (vO327.LQnPq(vO327.QDhzc, vO327.NAsQo)) {
              const vO341 = {
                text: vO327.OiJom
              };
              return v18.answerCallbackQuery(p936.id, vO341);
            } else {
              m.error(vO327.Oqmnb, n.errors);
              return {
                success: false,
                error: o.stringify(p.errors[0], null, 2)
              };
            }
          }
          await vO327.ZtwTo(f67, v265, v268);
          break;
        case vO327.oIOmT:
        case vO327.MOmvB:
        case vO327.wWshT:
        case vO327.Zpmhb:
        case vO327.BlqlI:
        case vO327.RFzMi:
        case vO327.dTPsm:
          await vO327.EJrYD(f71, v265, v266, v267.replace(vO327.vgSOx, ""), v268);
          break;
        case vO327.yjXUB:
          await vO327.kiRMr(f72, v265, v266, v268);
          break;
        case vO327.VKLZC:
        case vO327.dGfIK:
        case vO327.MXAuS:
        case vO327.YnxMh:
        case vO327.ybHVf:
          try {
            if (vO327.PaNCG(vO327.YNeLr, vO327.azrhu)) {
              await vO327.EJrYD(f73, v265, v266, v267.replace(vO327.Bfuuu, ""), v268);
            } else {
              if (!p[q.userId]) {
                w[vO349.userId] = [];
              }
              t[u.userId].push(v);
            }
          } catch (e63) {
            if (vO327.GnYLR(vO327.ZoKBt, vO327.ZoKBt)) {
              j = vO327.DzTGc;
            } else {
              console.error(vO327.eBdOm, e63);
              const vO342 = {
                text: vO327.QCEVp
              };
              await v18.answerCallbackQuery(p936.id, vO342);
            }
          }
          break;
        case vO327.eRhqE:
          if (!vO327.gHLRn(f13, v266)) {
            if (vO327.fzGwP(vO327.JTiWQ, vO327.XHMjt)) {
              const vO343 = {
                text: vO327.OiJom
              };
              return v18.answerCallbackQuery(p936.id, vO343);
            } else {
              return k.sendMessage(l, vO327.PGuEY);
            }
          }
          await vO327.ZslJt(f63, v265, v268);
          break;
        case vO327.PxaSb:
          if (!vO327.MCvRR(f13, v266)) {
            if (vO327.XfJPl(vO327.aVNHn, vO327.aVNHn)) {
              const vO344 = {
                text: vO327.OiJom
              };
              return v18.answerCallbackQuery(p936.id, vO344);
            } else if (vO327.ttnSO(vO327.ZpPiK(s, 2), 0)) {
              const vA42 = [];
              const vO345 = {
                text: "" + vO356.name,
                callback_data: "buy_doc_" + D.id
              };
              vA42.push(vO345);
              if (E[vO327.wUFfx(F, 1)]) {
                vA42.push({
                  text: "" + L[vO327.mMxVR(p936, 1)].name,
                  callback_data: "buy_doc_" + vO327[vO327.lPHMM(v264, 1)].id
                });
              }
              vO364.push(vA42);
            }
          }
          await vO327.PiesE(f64, v265, v268);
          break;
        case vO327.JCjuI:
          if (!vO327.HCRjd(f13, v266)) {
            if (vO327.nrglW(vO327.qYPxe, vO327.qYPxe)) {
              n.forEach((p1092, p1093) => {
                if (vO327.cNFNy(vO327.ZpPiK(p1093, 2), 0)) {
                  const vA43 = [];
                  const vO346 = {
                    text: "" + p1092.name,
                    callback_data: "buy_app_" + p1092.id
                  };
                  vA43.push(vO346);
                  if (w[vO327.JYHon(p1093, 1)]) {
                    vA43.push({
                      text: "" + A[vO327.smLGk(p1093, 1)].name,
                      callback_data: "buy_app_" + B[vO327.yLdff(p1093, 1)].id
                    });
                  }
                  z.push(vA43);
                }
              });
            } else {
              const vO347 = {
                text: vO327.OiJom
              };
              return v18.answerCallbackQuery(p936.id, vO347);
            }
          }
          await vO327.xExYm(f65, v265, v268);
          vO15[v266] = vO327.SFvug;
          await v18.sendMessage(v265, vO327.zcSBZ);
          break;
        case vO327.hXfGE:
          if (!vO327.NlzLg(f13, v266)) {
            if (vO327.cNFNy(vO327.fWEqZ, vO327.xTtUl)) {
              zPUkky.gHLRn(j, "0");
            } else {
              const vO348 = {
                text: vO327.OiJom
              };
              return v18.answerCallbackQuery(p936.id, vO348);
            }
          }
          await vO327.hmRqR(f65, v265, v268);
          vO15[v266] = vO327.lioie;
          await v18.sendMessage(v265, vO327.XeTQS);
          break;
        case v267.match(/^buy_app_/)?.input:
          const v272 = v267.replace(vO327.NBsNg, "");
          await vO327.sPIIf(f74, v265, v266, v272, v268);
          break;
        case v267.match(/^buy_doc_/)?.input:
          const v273 = v267.replace(vO327.Dfijf, "");
          await vO327.EJrYD(f75, v265, v266, v273, v268);
          break;
        case v267.match(/^copy_/)?.input:
          const v274 = v267.replace(vO327.tJqga, "");
          const vO349 = {
            text: "Password disalin: " + v274,
            show_alert: true
          };
          await v18.answerCallbackQuery(p936.id, vO349);
          break;
        case v267.match(/^confirm_delete_app_/)?.input:
          if (!vO327.CWNsx(f13, v266)) {
            if (vO327.mPKfU(vO327.PvLSD, vO327.PvLSD)) {
              const vO350 = {
                chat_id: p,
                message_id: q,
                ...r
              };
              n.editMessageText(o, vO350);
            } else {
              const vO351 = {
                text: vO327.OiJom
              };
              return v18.answerCallbackQuery(p936.id, vO351);
            }
          }
          const v275 = v267.replace(vO327.UYxNp, "");
          await vO327.ykLUw(f27, v265, v275, v268);
          break;
        case v267.match(/^confirm_delete_doc_/)?.input:
          if (!vO327.MCvRR(f13, v266)) {
            if (vO327.DzKsf(vO327.ILJgf, vO327.ILJgf)) {
              k[l] = {
                total_sales: 0,
                total_income: 0,
                daily_sales: {}
              };
            } else {
              const vO353 = {
                text: vO327.OiJom
              };
              return v18.answerCallbackQuery(p936.id, vO353);
            }
          }
          const v276 = v267.replace(vO327.UynFn, "");
          await vO327.ykLUw(f28, v265, v276, v268);
          break;
        case v267.match(/^execute_delete_app_/)?.input:
          if (!vO327.TcWPx(f13, v266)) {
            if (vO327.fzGwP(vO327.xzopa, vO327.hwaUq)) {
              const vO354 = {
                text: vO327.OiJom
              };
              return v18.answerCallbackQuery(p936.id, vO354);
            } else {
              return 0;
            }
          }
          const v277 = v267.replace(vO327.CTaRs, "");
          await vO327.kiRMr(f29, v265, v277, v268);
          break;
        case v267.match(/^execute_delete_doc_/)?.input:
          if (!vO327.QgQGu(f13, v266)) {
            if (vO327.xlHSX(vO327.xlHCv, vO327.efVrk)) {
              const vO355 = {
                text: vO327.OiJom
              };
              return v18.answerCallbackQuery(p936.id, vO355);
            } else {
              throw new j(vO327.BbjSp);
            }
          }
          const v278 = v267.replace(vO327.TAJxW, "");
          await vO327.uFFQM(f30, v265, v278, v268);
          break;
        case vO327.DSkBr:
        case vO327.imOgY:
        case vO327.jblZF:
        case vO327.gBvuW:
        case vO327.cdDJx:
        case vO327.mfNgL:
        case vO327.SrlqT:
          await vO327.EJrYD(f53, v265, v266, v267.replace(vO327.sAVGo, ""), v268);
          break;
        case vO327.uVdEh:
        case vO327.mqJqd:
        case vO327.sfrrT:
        case vO327.qlMma:
        case vO327.VJwry:
        case vO327.LLpJd:
          const v279 = vO327.ENZgj(parseInt, v267.replace(vO327.smuTD, ""));
          await vO327.FqCDc(f43, v265, v266, v279);
          break;
        case vO327.cmIDn:
          vO16[v266] = vO327.NBYbj;
          await v18.editMessageText(vO327.QnvTf, {
            chat_id: v265,
            message_id: v268,
            parse_mode: vO327.eMLtZ
          });
          break;
        case vO327.ICRqs:
        case vO327.KBdpq:
        case vO327.lUasT:
        case vO327.VfpVi:
        case vO327.HqQOS:
        case vO327.VyWHL:
        case vO327.cKrdu:
          const v280 = v267.replace(vO327.plBHP, "");
          const v281 = configJs.PANEL_PRICES[v280];
          const vO356 = {
            ramSize: v280
          };
          await vO327.cGNzO(f45, v265, v266, vO327.jBkbU, vO356, v281);
          break;
        case vO327.GTiKI:
          const v282 = configJs.RESELLER_PRICES.reseller;
          await vO327.cGNzO(f45, v265, v266, vO327.UxmKB, {
            packageType: vO327.UxmKB
          }, v282);
          break;
        case vO327.yuQOb:
        case vO327.CYGHw:
        case vO327.VZudd:
        case vO327.MrTPL:
        case vO327.qUJGt:
          const v283 = v267.replace(vO327.KQrtY, "");
          const v284 = configJs.SPECIAL_PANEL_PRICES[v283];
          try {
            if (vO327.LQnPq(vO327.WraIo, vO327.WraIo)) {
              return true;
            } else {
              const vO357 = {
                panelType: v283
              };
              await vO327.cGNzO(f45, v265, v266, vO327.WMYSG, vO357, v284);
            }
          } catch (e64) {
            if (vO327.iiiZg(vO327.Rxhur, vO327.rWHIq)) {
              try {
                const v285 = A.parse(B.readFileSync(vO356));
                v285[D] = E;
                F.writeFileSync(G, H.stringify(v285, null, 2));
              } catch (e65) {
                J.error(vO327.ZtQux, e65.message);
              }
            } else {
              console.error(vO327.JxOcY, e64);
              await v18.sendMessage(v265, vO327.ifsVH);
            }
          }
          break;
        case v267.match(/^qris_app_/)?.input:
          const v286 = v267.replace(vO327.hqrzA, "");
          const v287 = vO327.YaNCo(f19).find(p1094 => p1094.id === v286);
          if (v287) {
            if (vO327.DzKsf(vO327.tDOJy, vO327.uARbi)) {
              const vO358 = {
                appId: v286,
                appName: v287.name
              };
              await vO327.cGNzO(f45, v265, v266, vO327.mSFkA, vO358, v287.price);
            } else {
              try {
                return o.parse(p.readFileSync(q));
              } catch (e66) {
                return [];
              }
            }
          }
          break;
        case v267.match(/^qris_doc_/)?.input:
          const v288 = v267.replace(vO327.lVtNi, "");
          const v289 = vO327.YaNCo(f22).find(p1095 => p1095.id === v288);
          if (v289) {
            if (vO327.LQnPq(vO327.xMNAs, vO327.xMNAs)) {
              m.forEach((p1096, p1097) => {
                q += "• " + p1096.name + " - Rp " + vO327.raeRb(r, p1096.price) + "\n";
                s += "  └ " + p1096.description + "\n\n";
              });
            } else {
              const vO359 = {
                docId: v288,
                docName: v289.name
              };
              await vO327.cGNzO(f45, v265, v266, vO327.qZsIn, vO359, v289.price);
            }
          }
          break;
        case vO327.GciYX:
          if (!vO327.CWNsx(f13, v266)) {
            if (vO327.BISQm(vO327.baLJt, vO327.uBOSF)) {
              const vO360 = {
                text: vO327.OiJom
              };
              return v18.answerCallbackQuery(p936.id, vO360);
            } else {
              return k.sendMessage(l, vO327.CyrrW);
            }
          }
          vO15[v266] = vO327.MDVpW;
          await v18.editMessageText(vO327.ZYGem, {
            chat_id: v265,
            message_id: v268,
            parse_mode: vO327.eMLtZ
          });
          break;
        case vO327.VnWET:
          if (!vO327.YfgcZ(f13, v266)) {
            if (vO327.DzKsf(vO327.pxLPQ, vO327.pxLPQ)) {
              zPUkky.QTztA(n, this, function () {
                const v290 = new s(zPUkky.BzFZx);
                const v291 = new t(zPUkky.MwJUT, "i");
                const v292 = zPUkky.gHLRn(u, zPUkky.Twwaj);
                if (!v290.test(zPUkky.yLdff(v292, zPUkky.ANcZc)) || !v291.test(zPUkky.JYHon(v292, zPUkky.VMJmh))) {
                  zPUkky.YfgcZ(v292, "0");
                } else {
                  zPUkky.YaNCo(w);
                }
              })();
            } else {
              const vO361 = {
                text: vO327.OiJom
              };
              return v18.answerCallbackQuery(p936.id, vO361);
            }
          }
          vO15[v266] = vO327.pJAVr;
          await v18.editMessageText(vO327.yiYzh, {
            chat_id: v265,
            message_id: v268,
            parse_mode: vO327.eMLtZ
          });
          break;
        case vO327.HaNRT:
          if (!vO327.awMTz(f13, v266)) {
            if (vO327.DDAok(vO327.kHSro, vO327.kHSro)) {
              const vO362 = {
                text: vO327.OiJom
              };
              return v18.answerCallbackQuery(p936.id, vO362);
            } else {
              try {
                const v293 = q.parse(r.readFileSync(s));
                return v293.filter(p1098 => p1098.userId === v293);
              } catch (e67) {
                return [];
              }
            }
          }
          vO15[v266] = vO327.ulYtX;
          await v18.editMessageText(vO327.QTSsa, {
            chat_id: v265,
            message_id: v268,
            parse_mode: vO327.eMLtZ
          });
          break;
        case vO327.KuvoE:
          if (!vO327.BtzEG(f13, v266)) {
            if (vO327.GnYLR(vO327.hOZnO, vO327.hOZnO)) {
              k = l;
            } else {
              const vO363 = {
                text: vO327.OiJom
              };
              return v18.answerCallbackQuery(p936.id, vO363);
            }
          }
          vO15[v266] = vO327.tAOWW;
          await v18.editMessageText(vO327.WUMji, {
            chat_id: v265,
            message_id: v268,
            parse_mode: vO327.eMLtZ
          });
          break;
        default:
          const vO364 = {
            text: vO327.TGHgq
          };
          await v18.answerCallbackQuery(p936.id, vO364);
      }
      await v18.answerCallbackQuery(p936.id);
    }
  } catch (e68) {
    if (vO327.BISQm(vO327.PbBXX, vO327.nGCrq)) {
      console.error(vO327.Nshlq, e68);
      const vO365 = {
        text: vO327.rUNAA
      };
      await v18.answerCallbackQuery(p936.id, vO365);
    } else {
      j += "❌ *Belum ada documents*";
    }
  }
});
async function f71(p1099, p1100, p1101, p1102) {
  const v294 = configJs.PANEL_PRICES[p1101];
  const vF43 = f4(p1100);
  if (f13(p1100)) {
    const vO366 = {
      ramSize: p1101,
      harga: 0,
      paymentMethod: "owner_free"
    };
    vO11[p1100] = vO366;
    await v18.editMessageText("```Javascript  👑 *OWNER FREE PURCHASE*\n\n📦 *Detail Panel:*\n" + ("• 💾 RAM: " + p1101.toUpperCase() + "\n") + "• 💰 Harga: FREE\n\n```📝 *Silakan masukkan username untuk panel Anda:*", {
      chat_id: p1099,
      message_id: p1102,
      parse_mode: "Markdown"
    });
    vO13[p1100] = true;
  } else if (vF43 >= v294) {
    f5(p1100, vF43 - v294);
    const vO367 = {
      ramSize: p1101,
      harga: v294,
      paymentMethod: "saldo"
    };
    vO11[p1100] = vO367;
    await v18.editMessageText("```Javascript  ✅ *PEMBAYARAN BERHASIL!*\n\n" + ("💰 *Dibayar:* Rp " + f2(v294) + "\n") + ("📦 *RAM:* " + p1101.toUpperCase() + "\n") + ("💎 *Saldo Baru:* Rp " + f2(vF43 - v294) + "\n\n```") + "📝 *Silakan masukkan username untuk panel Anda:*", {
      chat_id: p1099,
      message_id: p1102,
      parse_mode: "Markdown"
    });
    vO13[p1100] = true;
  } else {
    await v18.editMessageText("```Javascript  🛒 *BELI PANEL " + p1101.toUpperCase() + "*\n\n" + ("💰 *Harga:* Rp " + f2(v294) + "\n") + ("💎 *Saldo Anda:* Rp " + f2(vF43) + "\n\n") + "❌ *Saldo tidak cukup!*\n\n```*Pilih metode pembayaran:*", {
      chat_id: p1099,
      message_id: p1102,
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [[{
          text: "💳 BAYAR VIA QRIS",
          callback_data: "qris_" + p1101
        }, {
          text: "💰 DEPOSIT DULU",
          callback_data: "deposit_menu"
        }], [{
          text: "🔙 KEMBALI",
          callback_data: "buy_panel"
        }]]
      }
    });
  }
}
async function f72(p1103, p1104, p1105) {
  const vO368 = {
    euOqq: "Struktur response tidak valid - data tidak ditemukan",
    ggFfv: "reseller",
    hApce: function (p1106, p1107) {
      return p1106(p1107);
    },
    ESQow: function (p1108, p1109) {
      return p1108 >= p1109;
    },
    okOgA: function (p1110, p1111) {
      return p1110 !== p1111;
    },
    sUhEJ: "gFCpK",
    RgCJE: function (p1112, p1113, p1114) {
      return p1112(p1113, p1114);
    },
    wARmG: function (p1115, p1116) {
      return p1115 - p1116;
    },
    lqLEN: function (p1117, p1118, p1119, p1120) {
      return p1117(p1118, p1119, p1120);
    },
    UGPRD: "FCZHh",
    sOpKE: function (p1121, p1122) {
      return p1121 + p1122;
    },
    MHQTG: function (p1123, p1124) {
      return p1123 + p1124;
    },
    XIBNY: function (p1125, p1126) {
      return p1125 + p1126;
    },
    nVrMc: function (p1127, p1128) {
      return p1127(p1128);
    },
    dwsFD: function (p1129, p1130) {
      return p1129(p1130);
    },
    UOzjn: "Markdown",
    TWtdX: "💳 BAYAR VIA QRIS",
    dReaL: "💰 DEPOSIT DULU",
    XjypZ: "deposit_menu",
    WoiEw: "🔙 KEMBALI",
    CRrrU: "reseller_menu"
  };
  const v295 = vO368.ggFfv;
  const v296 = configJs.RESELLER_PRICES[v295];
  const v297 = vO368.hApce(f4, p1104);
  if (vO368.ESQow(v297, v296)) {
    if (vO368.okOgA(vO368.sUhEJ, vO368.sUhEJ)) {
      p1105 += vO368;
    } else {
      vO368.RgCJE(f5, p1104, vO368.wARmG(v297, v296));
      await vO368.lqLEN(f51, p1103, p1104, v295);
    }
  } else if (vO368.okOgA(vO368.UGPRD, vO368.UGPRD)) {
    throw new p1104(vO368.euOqq);
  } else {
    await v18.editMessageText(vO368.sOpKE(vO368.sOpKE(vO368.MHQTG(vO368.XIBNY("```Javascript  💼 *BELI PAKET RESELLER*\n\n", "💰 *Harga:* Rp " + vO368.nVrMc(f2, v296) + "\n"), "💎 *Saldo Anda:* Rp " + vO368.dwsFD(f2, v297) + "\n\n"), "❌ *Saldo tidak cukup!*\n\n```"), "*Pilih metode pembayaran:*"), {
      chat_id: p1103,
      message_id: p1105,
      parse_mode: vO368.UOzjn,
      reply_markup: {
        inline_keyboard: [[{
          text: vO368.TWtdX,
          callback_data: "qris_reseller_" + v295
        }, {
          text: vO368.dReaL,
          callback_data: vO368.XjypZ
        }], [{
          text: vO368.WoiEw,
          callback_data: vO368.CRrrU
        }]]
      }
    });
  }
}
async function f73(p1131, p1132, p1133, p1134) {
  const vO369 = {
    TjIoD: "❌ Special panel creation error:",
    bryDV: function (p1135, p1136) {
      return p1135 + p1136;
    },
    eMZwi: "_panel",
    cgrzP: function (p1137, p1138) {
      return p1137(p1138);
    },
    OLOVe: function (p1139, p1140) {
      return p1139(p1140);
    },
    pOpoX: function (p1141, p1142) {
      return p1141 === p1142;
    },
    ODZAs: "SInkg",
    AEzXf: "owner_free",
    dmoSd: function (p1143, p1144) {
      return p1143 === p1144;
    },
    Znqjp: "dODzi",
    bzZUg: "Markdown",
    VivvL: function (p1145, p1146) {
      return p1145 === p1146;
    },
    KTNJJ: "heLcZ",
    sjDXM: "❌ Error edit message:",
    Lpuyu: function (p1147, p1148) {
      return p1147 + p1148;
    },
    CIDjX: function (p1149, p1150) {
      return p1149 + p1150;
    },
    fZKyf: function (p1151, p1152) {
      return p1151 >= p1152;
    },
    cZeVG: "QPsug",
    daMXL: "xyTlb",
    zIktY: function (p1153, p1154, p1155) {
      return p1153(p1154, p1155);
    },
    UDIBj: function (p1156, p1157) {
      return p1156 - p1157;
    },
    GkpqF: "saldo",
    aCTGy: function (p1158, p1159) {
      return p1158 === p1159;
    },
    LWPVe: "kecXu",
    SoUap: function (p1160, p1161) {
      return p1160 + p1161;
    },
    iUjmY: function (p1162, p1163) {
      return p1162(p1163);
    },
    XLXpj: function (p1164, p1165) {
      return p1164 !== p1165;
    },
    xtvJU: "MvOgV",
    kxGbj: function (p1166, p1167) {
      return p1166 + p1167;
    },
    GVNFt: function (p1168, p1169) {
      return p1168 + p1169;
    },
    CFVpD: function (p1170, p1171) {
      return p1170(p1171);
    },
    qxcpD: function (p1172, p1173) {
      return p1172(p1173);
    },
    JdXmE: function (p1174, p1175) {
      return p1174 - p1175;
    },
    gZkuZ: "likZQ",
    BvWFK: "oGTZS",
    wtmjW: function (p1176, p1177) {
      return p1176 + p1177;
    },
    iFYvW: function (p1178, p1179) {
      return p1178 + p1179;
    },
    BxYgC: function (p1180, p1181) {
      return p1180 + p1181;
    },
    bhljJ: function (p1182, p1183) {
      return p1182 + p1183;
    },
    lsBmE: "💳 BAYAR VIA QRIS",
    GYjin: "💰 DEPOSIT DULU",
    yrWfc: "deposit_menu",
    LSnlK: "🔙 KEMBALI",
    KqQOB: "special_panel_menu"
  };
  const v298 = vO369.bryDV(p1133, vO369.eMZwi);
  const v299 = configJs.SPECIAL_PANEL_PRICES[v298];
  const v300 = vO369.cgrzP(f4, p1132);
  if (vO369.OLOVe(f13, p1132)) {
    if (vO369.pOpoX(vO369.ODZAs, vO369.ODZAs)) {
      const vO370 = {
        panelType: v298,
        harga: 0,
        paymentMethod: vO369.AEzXf
      };
      vO11[p1132] = vO370;
      try {
        if (vO369.dmoSd(vO369.Znqjp, vO369.Znqjp)) {
          await v18.editMessageText(vO369.bryDV(vO369.bryDV(vO369.bryDV(vO369.bryDV("```Javascript  👑 *OWNER FREE PURCHASE*\n\n", "📦 *Detail Panel:*\n"), "• 💾 Tipe: " + v298.toUpperCase().replace("_", " ") + "\n"), "• 💰 Harga: FREE\n\n```"), "📝 Silakan masukkan username untuk panel Anda:"), {
            chat_id: p1131,
            message_id: p1134,
            parse_mode: vO369.bzZUg
          });
          vO13[p1132] = true;
        } else {
          const vO371 = {
            chat_id: v298,
            message_id: v299,
            ...v300
          };
          p1134.editMessageText(vO369, vO371);
        }
      } catch (e69) {
        if (vO369.VivvL(vO369.KTNJJ, vO369.KTNJJ)) {
          console.error(vO369.sjDXM, e69);
          await v18.sendMessage(p1131, vO369.Lpuyu(vO369.Lpuyu(vO369.CIDjX(vO369.Lpuyu("```Javascript  👑 *OWNER FREE PURCHASE*\n\n", "📦 *Detail Panel:*\n"), "• 💾 Tipe: " + v298.toUpperCase().replace("_", " ") + "\n"), "• 💰 Harga: FREE\n\n```"), "📝 Silakan masukkan username untuk panel Anda:"), {
            parse_mode: vO369.bzZUg
          });
          vO13[p1132] = true;
        } else {
          vO369.push(v298.toString());
          v299.writeFileSync(v300, vO370.stringify(t, null, 2));
        }
      }
    } else {
      if (!p1133.existsSync(p1134)) {
        vO369.mkdirSync(v298, {
          recursive: true
        });
      }
    }
  } else if (vO369.fZKyf(v300, v299)) {
    if (vO369.dmoSd(vO369.cZeVG, vO369.daMXL)) {
      p1132.error(vO369.TjIoD, p1133);
      const vO373 = {
        success: false,
        error: p1134.message
      };
      return vO373;
    } else {
      vO369.zIktY(f5, p1132, vO369.UDIBj(v300, v299));
      const vO374 = {
        panelType: v298,
        harga: v299,
        paymentMethod: vO369.GkpqF
      };
      vO11[p1132] = vO374;
      try {
        if (vO369.aCTGy(vO369.LWPVe, vO369.LWPVe)) {
          await v18.editMessageText(vO369.CIDjX(vO369.SoUap(vO369.bryDV(vO369.Lpuyu("```Javascript  ✅ *PEMBAYARAN BERHASIL\\!*\n\n", "💰 *Dibayar:* Rp " + vO369.cgrzP(f2, v299) + "\n"), "🎯 *Tipe:* " + v298.toUpperCase().replace("_", " ") + "\n"), "💎 *Saldo Baru:* Rp " + vO369.iUjmY(f2, vO369.UDIBj(v300, v299)) + "\n\n```"), "📝 Silakan masukkan username untuk panel Anda:"), {
            chat_id: p1131,
            message_id: p1134,
            parse_mode: vO369.bzZUg
          });
          vO13[p1132] = true;
        } else {
          vO374 += "❌ *Tidak ada apps yang tersedia*```";
        }
      } catch (e70) {
        if (vO369.XLXpj(vO369.xtvJU, vO369.xtvJU)) {
          const vO375 = {
            chat_id: v298,
            message_id: v299,
            ...v300
          };
          p1134.editMessageText(vO369, vO375);
        } else {
          console.error(vO369.sjDXM, e70);
          await v18.sendMessage(p1131, vO369.kxGbj(vO369.Lpuyu(vO369.CIDjX(vO369.GVNFt("```Javascript  ✅ *PEMBAYARAN BERHASIL!*\n\n", "💰 *Dibayar:* Rp " + vO369.CFVpD(f2, v299) + "\n"), "🎯 *Tipe:* " + v298.toUpperCase().replace("_", " ") + "\n"), "💎 *Saldo Baru:* Rp " + vO369.qxcpD(f2, vO369.JdXmE(v300, v299)) + "\n\n```"), "📝 Silakan masukkan username untuk panel Anda:"), {
            parse_mode: vO369.bzZUg
          });
          vO13[p1132] = true;
        }
      }
    }
  } else if (vO369.VivvL(vO369.gZkuZ, vO369.BvWFK)) {
    const vO376 = {
      chat_id: v298,
      message_id: v299,
      ...v300
    };
    p1134.editMessageText(vO369, vO376);
  } else {
    await v18.editMessageText(vO369.wtmjW(vO369.iFYvW(vO369.BxYgC(vO369.CIDjX(vO369.bhljJ("```Javascript  👑 *BELI SPECIAL PANEL*\n\n", "🎯 *Tipe:* " + v298.toUpperCase().replace("_", " ") + "\n"), "💰 *Harga:* Rp " + vO369.OLOVe(f2, v299) + "\n"), "💎 *Saldo Anda:* Rp " + vO369.CFVpD(f2, v300) + "\n\n"), "❌ *Saldo tidak cukup\\!*\n\n"), "*Pilih metode pembayaran:*```"), {
      chat_id: p1131,
      message_id: p1134,
      parse_mode: vO369.bzZUg,
      reply_markup: {
        inline_keyboard: [[{
          text: vO369.lsBmE,
          callback_data: "qris_special_" + v298
        }, {
          text: vO369.GYjin,
          callback_data: vO369.yrWfc
        }], [{
          text: vO369.LSnlK,
          callback_data: vO369.KqQOB
        }]]
      }
    });
  }
}
async function f74(p1184, p1185, p1186, p1187) {
  const vO377 = {
    RklOl: function (p1188, p1189) {
      return p1188 + p1189;
    },
    icyCW: function (p1190, p1191) {
      return p1190(p1191);
    },
    skdom: function (p1192) {
      return p1192();
    },
    BUDrf: function (p1193, p1194) {
      return p1193 !== p1194;
    },
    mibHx: "OjuCU",
    yhoDC: "pOxmX",
    pfjCz: "❌ Aplikasi tidak ditemukan!",
    iEWdB: function (p1195, p1196) {
      return p1195(p1196);
    },
    VVEGj: function (p1197, p1198) {
      return p1197(p1198);
    },
    AQcJY: "DHOdz",
    MgKbF: "HwxXM",
    xnLaW: function (p1199, p1200, p1201, p1202) {
      return p1199(p1200, p1201, p1202);
    },
    uMMnq: function (p1203, p1204) {
      return p1203 >= p1204;
    },
    kAcpn: function (p1205, p1206) {
      return p1205 === p1206;
    },
    NEbAa: "egDBJ",
    FUwOp: function (p1207, p1208, p1209) {
      return p1207(p1208, p1209);
    },
    qfADj: function (p1210, p1211) {
      return p1210 - p1211;
    },
    CVrRI: function (p1212, p1213) {
      return p1212 === p1213;
    },
    YXime: "XvGLQ",
    CzFHU: function (p1214, p1215) {
      return p1214 + p1215;
    },
    HvkhG: function (p1216, p1217) {
      return p1216 + p1217;
    },
    ObSWU: function (p1218, p1219) {
      return p1218 + p1219;
    },
    ngWcU: function (p1220, p1221) {
      return p1220(p1221);
    },
    rkQCf: "Markdown",
    owIca: "💳 BAYAR VIA QRIS",
    LZkSz: "💰 DEPOSIT DULU",
    OSmln: "deposit_menu",
    iAoKO: "🔙 KEMBALI",
    PoYlO: "apps_menu"
  };
  const v301 = vO377.skdom(f19);
  const v302 = v301.find(p1222 => p1222.id === p1186);
  if (!v302) {
    if (vO377.BUDrf(vO377.mibHx, vO377.yhoDC)) {
      return v18.sendMessage(p1184, vO377.pfjCz);
    } else {
      try {
        const v303 = u.parse(v.readFileSync(w));
        const v304 = x.parse(y.readFileSync(z));
        return vO377.RklOl(v303.length, v304.length);
      } catch (e71) {
        return 0;
      }
    }
  }
  const v305 = vO377.iEWdB(f4, p1185);
  if (vO377.VVEGj(f13, p1185)) {
    if (vO377.BUDrf(vO377.AQcJY, vO377.MgKbF)) {
      await vO377.xnLaW(f47, p1184, p1185, p1186);
    } else {
      vO377.sendMessage(v301, v302, v305);
    }
  } else if (vO377.uMMnq(v305, v302.price)) {
    if (vO377.kAcpn(vO377.NEbAa, vO377.NEbAa)) {
      vO377.FUwOp(f5, p1185, vO377.qfADj(v305, v302.price));
      await vO377.xnLaW(f47, p1184, p1185, p1186);
    } else {
      throw new p1186("Pencairan gagal dengan status: " + p1187.status);
    }
  } else if (vO377.CVrRI(vO377.YXime, vO377.YXime)) {
    await v18.editMessageText(vO377.CzFHU(vO377.HvkhG(vO377.HvkhG(vO377.ObSWU("```Javascript  📱 *BELI APPS " + v302.name.toUpperCase() + "*\n\n", "💰 *Harga:* Rp " + vO377.VVEGj(f2, v302.price) + "\n"), "💎 *Saldo Anda:* Rp " + vO377.ngWcU(f2, v305) + "\n\n"), "❌ *Saldo tidak cukup!*\n\n```"), "*Pilih metode pembayaran:*"), {
      chat_id: p1184,
      message_id: p1187,
      parse_mode: vO377.rkQCf,
      reply_markup: {
        inline_keyboard: [[{
          text: vO377.owIca,
          callback_data: "qris_app_" + p1186
        }, {
          text: vO377.LZkSz,
          callback_data: vO377.OSmln
        }], [{
          text: vO377.iAoKO,
          callback_data: vO377.PoYlO
        }]]
      }
    });
  } else {
    v302 += "• " + v305.name + " - Rp " + vO377.icyCW(q, r.price) + "\n";
    s += "  └ " + t.description + "\n\n";
  }
}
async function f75(p1223, p1224, p1225, p1226) {
  const vO378 = {
    KBayT: function (p1227, p1228) {
      return p1227(p1228);
    },
    SCgJw: "5gb",
    HGRNv: "6gb",
    DTpAX: "7gb",
    VAKQJ: function (p1229, p1230) {
      return p1229(p1230);
    },
    LniHK: "8gb",
    wgSkE: function (p1231, p1232) {
      return p1231(p1232);
    },
    DiGqS: "9gb",
    lNhzh: function (p1233, p1234) {
      return p1233(p1234);
    },
    Mbyjb: "10gb",
    wsEpZ: function (p1235, p1236) {
      return p1235(p1236);
    },
    bFalK: "unli",
    RGOtw: "5GB",
    AHzRU: "buy_5gb",
    ViNCZ: "6GB",
    lUPNC: "buy_6gb",
    PReoY: "7GB",
    sQQbf: "buy_7gb",
    oMHKk: "8GB",
    CZfiz: "buy_8gb",
    soLfx: "9GB",
    FSYQJ: "buy_9gb",
    wMGYW: "10GB",
    mdriZ: "buy_10gb",
    dBEpu: "UNLI",
    ZUgTm: "buy_unli",
    kkdoG: "🔙 KEMBALI",
    nGUar: "main_menu",
    kdPGg: "Markdown",
    MYPLs: "waiting_add_app_price",
    qQrQH: "💰 Masukkan harga aplikasi:",
    gubWY: function (p1237) {
      return p1237();
    },
    GCFgB: function (p1238, p1239) {
      return p1238 === p1239;
    },
    UGJGL: "iuOXE",
    bPNxX: "UVFVm",
    JGBds: "❌ Document tidak ditemukan!",
    sMPNg: function (p1240, p1241) {
      return p1240 === p1241;
    },
    OUvWn: "JJlWZ",
    JNSyu: function (p1242, p1243, p1244, p1245) {
      return p1242(p1243, p1244, p1245);
    },
    LoGTD: function (p1246, p1247) {
      return p1246 >= p1247;
    },
    tVBok: function (p1248, p1249) {
      return p1248 === p1249;
    },
    RzGTg: "VEZJj",
    yWcks: "HnlzV",
    QEynA: function (p1250, p1251, p1252) {
      return p1250(p1251, p1252);
    },
    SJTGu: function (p1253, p1254) {
      return p1253 - p1254;
    },
    NceWt: function (p1255, p1256) {
      return p1255 === p1256;
    },
    jPVDZ: "USLKv",
    BVjiG: function (p1257, p1258) {
      return p1257 + p1258;
    },
    iCZbT: "💳 BAYAR VIA QRIS",
    uawCQ: "💰 DEPOSIT DULU",
    tenQd: "deposit_menu",
    qVaUV: "documents_menu"
  };
  const v306 = vO378.gubWY(f22);
  const v307 = v306.find(p1259 => p1259.id === p1225);
  if (!v307) {
    if (vO378.GCFgB(vO378.UGJGL, vO378.bPNxX)) {
      const v308 = ("\n```Javascript 🛒 *PANEL PREMIUM*\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n*Pilih RAM Panel:*\n\n• 5GB  - Rp " + vO378.KBayT(vA44, vO387.PANEL_PRICES[vO378.SCgJw]) + "\n• 6GB  - Rp " + vO378.KBayT(vO388, vVO388.PANEL_PRICES[vO378.HGRNv]) + "\n• 7GB  - Rp " + vO378.KBayT(G, H.PANEL_PRICES[vO378.DTpAX]) + "\n• 8GB  - Rp " + vO378.VAKQJ(I, J.PANEL_PRICES[vO378.LniHK]) + "\n• 9GB  - Rp " + vO378.wgSkE(K, L.PANEL_PRICES[vO378.DiGqS]) + "\n• 10GB - Rp " + vO378.lNhzh(M, N.PANEL_PRICES[vO378.Mbyjb]) + "\n• UNLI - Rp " + vO378.wsEpZ(O, P.PANEL_PRICES[vO378.bFalK]) + "\n\n💡 *Garansi 15 hari*\n    ```").trim();
      const vO379 = {
        text: vO378.RGOtw,
        callback_data: vO378.AHzRU
      };
      const vO380 = {
        text: vO378.ViNCZ,
        callback_data: vO378.lUPNC
      };
      const vO381 = {
        text: vO378.PReoY,
        callback_data: vO378.sQQbf
      };
      const vO382 = {
        text: vO378.oMHKk,
        callback_data: vO378.CZfiz
      };
      const vO383 = {
        text: vO378.soLfx,
        callback_data: vO378.FSYQJ
      };
      const vO384 = {
        text: vO378.wMGYW,
        callback_data: vO378.mdriZ
      };
      const vO385 = {
        text: vO378.dBEpu,
        callback_data: vO378.ZUgTm
      };
      const vO386 = {
        text: vO378.kkdoG,
        callback_data: vO378.nGUar
      };
      const vA44 = [[vO379, vO380, vO381], [vO382, vO383, vO384], [vO385], [vO386]];
      const vO387 = {
        inline_keyboard: vA44
      };
      const vO388 = {
        reply_markup: vO387,
        parse_mode: vO378.kdPGg
      };
      const vVO388 = vO388;
      if (Q) {
        const vO389 = {
          chat_id: X,
          message_id: Y,
          ...vVO388
        };
        W.editMessageText(v308, vO389);
      } else {
        Z.sendMessage(a0, v308, vVO388);
      }
    } else {
      return v18.sendMessage(p1223, vO378.JGBds);
    }
  }
  const v309 = vO378.wsEpZ(f4, p1224);
  if (vO378.lNhzh(f13, p1224)) {
    if (vO378.sMPNg(vO378.OUvWn, vO378.OUvWn)) {
      await vO378.JNSyu(f48, p1223, p1224, p1225);
    } else {
      vO378 = v306.parse(v307.readFileSync(v309));
    }
  } else if (vO378.LoGTD(v309, v307.price)) {
    if (vO378.tVBok(vO378.RzGTg, vO378.yWcks)) {
      p1224 += "❌ *Belum ada apps tersedia*\n\nHubungi admin untuk menambahkan apps.";
    } else {
      vO378.QEynA(f5, p1224, vO378.SJTGu(v309, v307.price));
      await vO378.JNSyu(f48, p1223, p1224, p1225);
    }
  } else if (vO378.NceWt(vO378.jPVDZ, vO378.jPVDZ)) {
    await v18.editMessageText(vO378.BVjiG(vO378.BVjiG(vO378.BVjiG(vO378.BVjiG("```Javascript  💻 *BELI DOCUMENT " + v307.name.toUpperCase() + "*\n\n", "💰 *Harga:* Rp " + vO378.VAKQJ(f2, v307.price) + "\n"), "💎 *Saldo Anda:* Rp " + vO378.wsEpZ(f2, v309) + "\n\n"), "❌ *Saldo tidak cukup!*\n\n```"), "*Pilih metode pembayaran:*"), {
      chat_id: p1223,
      message_id: p1226,
      parse_mode: vO378.kdPGg,
      reply_markup: {
        inline_keyboard: [[{
          text: vO378.iCZbT,
          callback_data: "qris_doc_" + p1225
        }, {
          text: vO378.uawCQ,
          callback_data: vO378.tenQd
        }], [{
          text: vO378.kkdoG,
          callback_data: vO378.qVaUV
        }]]
      }
    });
  } else {
    delete v309[q];
    const v310 = r.trim();
    const vO390 = {
      action: vO378.MYPLs,
      appName: v310
    };
    s[t] = vO390;
    return v310.sendMessage(vO390, vO378.qQrQH);
  }
}
v18.on("message", async p1260 => {
  const vO391 = {
    rTpUq: function (p1261, p1262) {
      return p1261 === p1262;
    },
    uuEKq: function (p1263, p1264) {
      return p1263 < p1264;
    },
    IkiEQ: function (p1265, p1266) {
      return p1265(p1266);
    },
    shSPK: function (p1267, p1268) {
      return p1267(p1268);
    },
    wtfTN: function (p1269, p1270) {
      return p1269 + p1270;
    },
    yfsWP: function (p1271, p1272) {
      return p1271 + p1272;
    },
    ZjjBI: function (p1273) {
      return p1273();
    },
    oTlrz: "❌ Gagal hapus app:",
    LTjyI: "👑 OWNER MENU",
    QuRIC: "owner_menu",
    QNsfU: "❌ Gagal simpan purchase:",
    mJWcC: "❌ API Key tidak valid atau telah kadaluarsa.\nSilakan periksa kembali API key Atlantic Anda.",
    Uypnw: "❌ Timeout: Server tidak merespons. Silakan coba lagi nanti.",
    pXvxj: "❌ Anda bukan reseller!",
    mTOPB: "❌ Direct QRIS error:",
    QznOR: "❌ Gagal memproses pembayaran QRIS. Silakan coba lagi.",
    MXuQX: "❌ Gagal simpan document:",
    owJYa: "❌ Pterodactyl creation error:",
    quTgY: function (p1274) {
      return p1274();
    },
    GdEXj: "❌ Gagal hapus document:",
    QwPIB: "5GB",
    IMFEt: "sell_5gb",
    YCGff: "6GB",
    IOmiH: "sell_6gb",
    vVKjO: "7GB",
    kCSvX: "sell_7gb",
    fcDZt: "8GB",
    JEVKg: "sell_8gb",
    ssdIH: "9GB",
    AmxRn: "sell_9gb",
    Ewshm: "10GB",
    vLPZl: "sell_10gb",
    svPjK: "UNLI",
    lGVzM: "sell_unli",
    LeAKg: "🔙 KEMBALI",
    uxphf: "reseller_menu",
    JJJfz: "Markdown",
    IowSp: function (p1275, p1276) {
      return p1275 + p1276;
    },
    SKXgB: function (p1277, p1278) {
      return p1277 + p1278;
    },
    noVNN: function (p1279, p1280) {
      return p1279(p1280);
    },
    OlzDx: function (p1281, p1282) {
      return p1281(p1282);
    },
    KZDag: function (p1283, p1284) {
      return p1283 - p1284;
    },
    gWzXw: function (p1285, p1286) {
      return p1285 / p1286;
    },
    oxcEW: function (p1287, p1288) {
      return p1287 * p1288;
    },
    eqDfb: function (p1289, p1290) {
      return p1289 * p1290;
    },
    nnkwn: function (p1291, p1292) {
      return p1291 % p1292;
    },
    BHaqF: function (p1293, p1294) {
      return p1293 * p1294;
    },
    ziVSp: function (p1295, p1296) {
      return p1295 / p1296;
    },
    IgSoj: function (p1297, p1298) {
      return p1297 % p1298;
    },
    UMRdp: function (p1299, p1300) {
      return p1299 * p1300;
    },
    YkEKZ: function (p1301, p1302) {
      return p1301 % p1302;
    },
    CsxGv: function (p1303, p1304) {
      return p1303 * p1304;
    },
    ycqoU: "waiting_approve_warranty",
    GOcSQ: function (p1305, p1306) {
      return p1305 !== p1306;
    },
    qdXyb: "FwpYc",
    cDcjm: "zMFdF",
    YoEYQ: function (p1307, p1308, p1309) {
      return p1307(p1308, p1309);
    },
    uZzZa: "approved",
    VBZkv: function (p1310, p1311) {
      return p1310 === p1311;
    },
    Majap: "noXST",
    nWdZN: "EooqK",
    HkbYT: function (p1312, p1313) {
      return p1312 === p1313;
    },
    eLybT: "MlvPZ",
    ycrGi: "lUSJE",
    ODguh: "Bqtyg",
    cbYgc: function (p1314, p1315) {
      return p1314 + p1315;
    },
    QZtyw: function (p1316, p1317) {
      return p1316 + p1317;
    },
    RPNcI: "Ylwad",
    cHwkS: "zSvwQ",
    VYIZo: "❌ Tidak bisa kirim notifikasi ke user",
    bLrWG: function (p1318, p1319) {
      return p1318 !== p1319;
    },
    zzWmq: "KyVHZ",
    KGKkJ: "XDzQL",
    ymIDs: function (p1320, p1321) {
      return p1320 === p1321;
    },
    xYBjp: "waiting_reject_warranty",
    qqwVL: function (p1322, p1323) {
      return p1322 === p1323;
    },
    fbqTt: "LtqDN",
    sYQsY: function (p1324, p1325, p1326) {
      return p1324(p1325, p1326);
    },
    dXPgV: "rejected",
    Uydhr: "aJiRb",
    Utklk: "fhvmp",
    XjPpD: function (p1327, p1328) {
      return p1327 === p1328;
    },
    AQYFj: "YowdY",
    AqEbH: function (p1329, p1330) {
      return p1329 !== p1330;
    },
    KQlUA: "dXkcq",
    dmsQm: "lNBUt",
    OUicw: function (p1331, p1332) {
      return p1331 + p1332;
    },
    ighUl: function (p1333, p1334) {
      return p1333 + p1334;
    },
    kXFaP: function (p1335, p1336) {
      return p1335 + p1336;
    },
    yhhzi: function (p1337, p1338) {
      return p1337 + p1338;
    },
    ftlBO: function (p1339, p1340) {
      return p1339 !== p1340;
    },
    YmlZA: "YJLJs",
    ouJYK: "BoZRH",
    kywWg: function (p1341, p1342) {
      return p1341 === p1342;
    },
    rqDDp: "wNzMo",
    hgXCX: "AERna",
    wUdJB: function (p1343, p1344) {
      return p1343 === p1344;
    },
    uWsYT: "BKeDs",
    usAiP: "❌ Data pembelian tidak ditemukan. Silakan ulangi dari menu.",
    ltZmk: function (p1345, p1346) {
      return p1345 === p1346;
    },
    iFueV: "tkkNt",
    ZtjkH: function (p1347, p1348) {
      return p1347 + p1348;
    },
    KKNmj: function (p1349, p1350) {
      return p1349 + p1350;
    },
    hUXfv: "❌ Username tidak valid!\n",
    eFTgb: "• Harus 3-20 karakter\n",
    clsfj: "• Hanya boleh huruf, angka, underscore\n",
    Acclk: "• Tidak boleh ada spasi\n\n",
    UHrwg: "Silakan masukkan username lagi:",
    pWczp: "⏳ Sedang membuat panel...",
    Lsfoy: "fPSVC",
    DbeOy: "aXlLg",
    wWqjz: "UyfHN",
    OEyUg: "SoKwe",
    JOxyy: function (p1351, p1352, p1353) {
      return p1351(p1352, p1353);
    },
    EEkQd: function (p1354, p1355) {
      return p1354 === p1355;
    },
    ceTqn: "WXkvv",
    SlGcV: "hFPMz",
    KPFea: "ccjZr",
    WfhCj: "special",
    vbWzl: "regular",
    QFUOq: "saldo",
    gHJRZ: function (p1356, p1357) {
      return p1356 * p1357;
    },
    CHfPc: "jZZbD",
    cpKBz: "HlSvi",
    fQgjg: "pQjXp",
    TqtsU: function (p1358, p1359) {
      return p1358(p1359);
    },
    WgFZP: "EEWno",
    pMVQi: "OMOXm",
    ZxvYu: "BLBcB",
    anhNp: "HTML",
    rgMjn: "🌐 Domain",
    sFAZQ: "🔑 Salin Password",
    IooxE: function (p1360, p1361, p1362, p1363, p1364) {
      return p1360(p1361, p1362, p1363, p1364);
    },
    qoYcn: function (p1365, p1366) {
      return p1365 === p1366;
    },
    AbEss: "GlFOW",
    PbsAN: "punvk",
    KdhvK: "❌ Panel creation error:",
    IcTtY: function (p1367, p1368) {
      return p1367 === p1368;
    },
    itEuH: "IMRdW",
    fiunK: "Vfybc",
    kzXia: "❌ Gagal membuat panel. Silakan coba lagi.",
    lRJVB: function (p1369, p1370) {
      return p1369 === p1370;
    },
    hdbKI: "SkUzE",
    KYXPM: "waiting_username",
    hUutZ: function (p1371, p1372) {
      return p1371 !== p1372;
    },
    ftLDE: "bZmaW",
    ltEKd: "qlGCd",
    mLOMy: function (p1373, p1374) {
      return p1373 + p1374;
    },
    OZOuQ: function (p1375, p1376) {
      return p1375 + p1376;
    },
    KZbur: "⏳ Sedang membuat panel untuk customer...",
    LDHWm: function (p1377, p1378) {
      return p1377 !== p1378;
    },
    OddGd: "HhWrp",
    DRbVX: "gnZrG",
    VjFbw: "reseller_sold",
    qAOCp: "reseller",
    zELzo: function (p1379, p1380) {
      return p1379 + p1380;
    },
    iVFfs: function (p1381, p1382) {
      return p1381 * p1382;
    },
    gPBgD: function (p1383, p1384) {
      return p1383 * p1384;
    },
    DVhDo: function (p1385, p1386) {
      return p1385 * p1386;
    },
    jlJnA: function (p1387, p1388) {
      return p1387 * p1388;
    },
    TONyK: function (p1389, p1390) {
      return p1389(p1390);
    },
    YOidC: function (p1391) {
      return p1391();
    },
    pZhug: "YYYY-MM-DD",
    HEnZv: function (p1392, p1393) {
      return p1392(p1393);
    },
    wZxEE: function (p1394, p1395) {
      return p1394(p1395);
    },
    eqpjz: function (p1396, p1397) {
      return p1396 + p1397;
    },
    ylFeX: function (p1398, p1399) {
      return p1398 + p1399;
    },
    AXRCG: function (p1400, p1401) {
      return p1400 + p1401;
    },
    uyglo: function (p1402, p1403) {
      return p1402(p1403);
    },
    ZrnWO: "❌ Reseller panel creation error:",
    jgcTs: "waiting_deposit_amount",
    TOTSs: function (p1404, p1405) {
      return p1404(p1405);
    },
    jrjOS: function (p1406, p1407) {
      return p1406 < p1407;
    },
    dbnYQ: "❌ Minimal deposit Rp 5,000. Silakan masukkan nominal yang valid:",
    cIaMy: function (p1408, p1409) {
      return p1408 > p1409;
    },
    BLXdc: "❌ Maksimal deposit Rp 1,000,000. Silakan masukkan nominal yang lebih kecil:",
    wdFPK: function (p1410, p1411, p1412, p1413) {
      return p1410(p1411, p1412, p1413);
    },
    zqXbB: "waiting_addsaldo_user",
    mbHCE: "waiting_addsaldo_amount",
    JZJJE: "💰 Masukkan jumlah saldo yang ingin ditambahkan:",
    RyGYU: function (p1414, p1415) {
      return p1414 <= p1415;
    },
    LUBRT: "❌ Jumlah saldo tidak valid.",
    rLeRS: "❌ User tidak ditemukan.",
    xOvfG: function (p1416, p1417) {
      return p1416(p1417);
    },
    wOSob: function (p1418, p1419, p1420) {
      return p1418(p1419, p1420);
    },
    MgSse: function (p1421, p1422) {
      return p1421 !== p1422;
    },
    rjHep: function (p1423, p1424) {
      return p1423 + p1424;
    },
    TCMIz: function (p1425, p1426) {
      return p1425 + p1426;
    },
    sNDpu: function (p1427, p1428) {
      return p1427 + p1428;
    },
    NonzG: function (p1429, p1430) {
      return p1429(p1430);
    },
    McoWe: "❌ Gagal menambah saldo.",
    NRwsJ: "waiting_broadcast_message",
    kUrPg: function (p1431) {
      return p1431();
    },
    cdhpR: function (p1432, p1433) {
      return p1432 + p1433;
    },
    uxBUj: function (p1434, p1435) {
      return p1434 === p1435;
    },
    IbzwX: function (p1436, p1437) {
      return p1436 % p1437;
    },
    XUmur: function (p1438, p1439) {
      return p1438 + p1439;
    },
    xYwBi: function (p1440, p1441) {
      return p1440 + p1441;
    },
    cjoCu: function (p1442, p1443) {
      return p1442 + p1443;
    },
    PQoNf: function (p1444, p1445) {
      return p1444 + p1445;
    },
    sYeiU: function (p1446, p1447) {
      return p1446 + p1447;
    },
    OoChl: function (p1448, p1449) {
      return p1448 + p1449;
    },
    svJDP: "waiting_add_app_name",
    LWxne: "waiting_add_app_price",
    CvZdC: "💰 Masukkan harga aplikasi:",
    qGdma: function (p1450, p1451) {
      return p1450 === p1451;
    },
    QrGms: function (p1452, p1453) {
      return p1452(p1453);
    },
    EDDoj: function (p1454, p1455) {
      return p1454 <= p1455;
    },
    ULdzO: "❌ Harga tidak valid.",
    ibJbI: "waiting_add_app_description",
    Ummpv: "📝 Masukkan deskripsi aplikasi:",
    KiiOr: function (p1456, p1457) {
      return p1456 === p1457;
    },
    vOade: "waiting_add_app_file",
    TZcTW: "📁 Kirim file aplikasi (document):",
    jopwu: "waiting_add_doc_name",
    hMwot: "waiting_add_doc_price",
    NHHbu: "💰 Masukkan harga document:",
    gMbVR: function (p1458, p1459) {
      return p1458(p1459);
    },
    gcuki: function (p1460, p1461) {
      return p1460 <= p1461;
    },
    Pegfn: "waiting_add_doc_description",
    LRqxE: "📝 Masukkan deskripsi document:",
    FAMZT: function (p1462, p1463) {
      return p1462 === p1463;
    },
    xGvxs: "waiting_add_doc_file",
    hJumG: "📁 Kirim file document:",
    QeZwh: function (p1464, p1465) {
      return p1464 + p1465;
    },
    mVqpA: function (p1466, p1467) {
      return p1466 * p1467;
    },
    BYbcK: function (p1468, p1469) {
      return p1468(p1469);
    },
    PFxFE: function (p1470, p1471) {
      return p1470 + p1471;
    },
    ImxiP: "❌ Gagal menambahkan apps.",
    eoejN: function (p1472, p1473) {
      return p1472 === p1473;
    },
    sZGvv: function (p1474, p1475) {
      return p1474 + p1475;
    },
    eHepw: function (p1476, p1477) {
      return p1476 * p1477;
    },
    AilEf: function (p1478, p1479) {
      return p1478(p1479);
    },
    BogZO: function (p1480, p1481) {
      return p1480 + p1481;
    },
    ZalDn: function (p1482, p1483) {
      return p1482 + p1483;
    },
    THPaJ: function (p1484, p1485) {
      return p1484 + p1485;
    },
    fNaPv: function (p1486, p1487) {
      return p1486 + p1487;
    },
    KQbog: function (p1488, p1489) {
      return p1488(p1489);
    },
    IbEjd: "❌ Gagal menambahkan document."
  };
  const v311 = p1260.chat.id;
  const v312 = p1260.from.id;
  const v313 = p1260.text || "";
  if (vO391.rTpUq(vO15[v312], vO391.ycqoU)) {
    if (vO391.GOcSQ(vO391.qdXyb, vO391.cDcjm)) {
      delete vO15[v312];
      const v314 = v313.trim();
      const v315 = vO391.YoEYQ(f32, v314, {
        status: vO391.uZzZa,
        approvedAt: new Date().toISOString()
      });
      if (v315) {
        if (vO391.VBZkv(vO391.Majap, vO391.nWdZN)) {
          k = l.substring(1);
        } else {
          await v18.sendMessage(v311, "✅ Klaim garansi " + v314 + " berhasil di-approve!");
          try {
            if (vO391.HkbYT(vO391.eLybT, vO391.eLybT)) {
              const v316 = vO391.ZjjBI(f31);
              const v317 = v316.find(p1490 => p1490.id === v314);
              if (v317) {
                if (vO391.GOcSQ(vO391.ycrGi, vO391.ODguh)) {
                  await v18.sendMessage(v317.userId, vO391.cbYgc(vO391.cbYgc(vO391.QZtyw(vO391.wtfTN("🎉 *KLaim Garansi Disetujui!*\n\n", "🆔 ID Klaim: " + v314 + "\n"), "📦 Panel: " + v317.panelId + "\n"), "✅ Status: DISETUJUI\n\n"), "Panel Anda telah diperbaiki/diganti."), {
                    parse_mode: vO391.JJJfz
                  });
                } else if (vO391.rTpUq(s, " ")) {
                  v314 += v315;
                } else if (vO391.uuEKq(v, w)) {
                  E += v316;
                  v317++;
                } else {
                  H += I;
                }
              }
            } else {
              r = ("```Javascript \n📄 PEMBAYARAN DOCUMENT VIA QRIS\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n📦 Detail Pesanan:\n• 🎯 Document: " + s.docName + "\n• 💰 Harga: Rp " + vO391.IkiEQ(t, u) + "\n\n💳 Detail Pembayaran:\n🔐 Kode Transaksi: " + v + "\n🧾 Biaya Admin: Rp " + vO391.shSPK(w, p1260.PAYMENT.FeeTransaksi) + "\n💳 Total Bayar: Rp " + vO391.shSPK(vO391, v311) + "\n⏰ Batas Waktu: 5 Menit\n\n📱 Cara Bayar:\n1. Buka aplikasi e-wallet/m-banking\n2. Pilih menu QRIS / Scan QR\n3. Scan kode QR di atas\n4. Konfirmasi pembayaran\n\n✅ File akan otomatis dikirim setelah pembayaran berhasil!\n            ```").trim();
            }
          } catch (e72) {
            if (vO391.GOcSQ(vO391.RPNcI, vO391.cHwkS)) {
              console.log(vO391.VYIZo);
            } else {
              n.push({
                text: "" + o[vO391.wtfTN(p, 1)].name,
                callback_data: "buy_doc_" + q[vO391.yfsWP(r, 1)].id
              });
            }
          }
        }
      } else if (vO391.bLrWG(vO391.zzWmq, vO391.KGKkJ)) {
        await v18.sendMessage(v311, "❌ Gagal approve klaim garansi. Pastikan ID benar.");
      } else {
        try {
          const v318 = vO391.ZjjBI(u);
          const v319 = v318.filter(p1491 => p1491.id !== v311);
          w.writeFileSync(p1260, vO391.stringify(v319, null, 2));
          return true;
        } catch (e73) {
          v312.error(vO391.oTlrz, e73.message);
          return false;
        }
      }
      return;
    } else {
      const vO392 = {
        text: vO391.LTjyI,
        callback_data: vO391.QuRIC
      };
      j.push([vO392]);
    }
  }
  if (vO391.ymIDs(vO15[v312], vO391.xYBjp)) {
    if (vO391.qqwVL(vO391.fbqTt, vO391.fbqTt)) {
      delete vO15[v312];
      const v320 = v313.trim();
      const v321 = vO391.sYQsY(f32, v320, {
        status: vO391.dXPgV,
        rejectedAt: new Date().toISOString()
      });
      if (v321) {
        if (vO391.VBZkv(vO391.Uydhr, vO391.Utklk)) {
          j++;
        } else {
          await v18.sendMessage(v311, "❌ Klaim garansi " + v320 + " berhasil di-reject!");
          try {
            if (vO391.XjPpD(vO391.AQYFj, vO391.AQYFj)) {
              const v322 = vO391.quTgY(f31);
              const v323 = v322.find(p1492 => p1492.id === v320);
              if (v323) {
                if (vO391.AqEbH(vO391.KQlUA, vO391.dmsQm)) {
                  await v18.sendMessage(v323.userId, vO391.OUicw(vO391.ighUl(vO391.kXFaP(vO391.yhhzi("❌ *Klaim Garansi Ditolak!*\n\n", "🆔 ID Klaim: " + v320 + "\n"), "📦 Panel: " + v323.panelId + "\n"), "❌ Status: DITOLAK\n\n"), "Silakan hubungi admin untuk informasi lebih lanjut."), {
                    parse_mode: vO391.JJJfz
                  });
                } else {
                  const v324 = o ? function () {
                    if (v324) {
                      const v325 = vO391.apply(v311, arguments);
                      v312 = null;
                      return v325;
                    }
                  } : function () {};
                  t = false;
                  return v324;
                }
              }
            } else {
              k += "\n\nPesan Error: " + l;
            }
          } catch (e74) {
            if (vO391.ftlBO(vO391.YmlZA, vO391.YmlZA)) {
              try {
                const v326 = vO391.parse(v311.readFileSync(v312));
                v326.push(v313);
                C.writeFileSync(D, E.stringify(v326, null, 2));
              } catch (e75) {
                G.error(vO391.QNsfU, e75.message);
              }
            } else {
              console.log(vO391.VYIZo);
            }
          }
        }
      } else if (vO391.rTpUq(vO391.ouJYK, vO391.ouJYK)) {
        await v18.sendMessage(v311, "❌ Gagal reject klaim garansi. Pastikan ID benar.");
      } else {
        j = vO391.mJWcC;
      }
      return;
    } else {
      j = vO391.Uypnw;
    }
  }
  if (vO13[v312]) {
    if (vO391.kywWg(vO391.rqDDp, vO391.hgXCX)) {
      return k.sendMessage(l, vO391.pXvxj);
    } else {
      delete vO13[v312];
      const v327 = vO11[v312];
      if (!v327) {
        if (vO391.wUdJB(vO391.uWsYT, vO391.uWsYT)) {
          return v18.sendMessage(v311, vO391.usAiP);
        } else {
          m.sendMessage(n, o, p);
        }
      }
      const v328 = v313.trim();
      if (!/^[a-zA-Z0-9_]{3,20}$/.test(v328)) {
        if (vO391.ltZmk(vO391.iFueV, vO391.iFueV)) {
          return v18.sendMessage(v311, vO391.SKXgB(vO391.ZtjkH(vO391.KKNmj(vO391.KKNmj(vO391.hUXfv, vO391.eFTgb), vO391.clsfj), vO391.Acclk), vO391.UHrwg));
        } else {
          m.error(vO391.mTOPB, n);
          o.sendMessage(p, vO391.QznOR);
        }
      }
      const v329 = await v18.sendMessage(v311, vO391.pWczp);
      try {
        if (vO391.wUdJB(vO391.Lsfoy, vO391.DbeOy)) {
          const v330 = q.parse(r.readFileSync(s));
          v330[t] = u;
          v.writeFileSync(w, p1260.stringify(v330, null, 2));
        } else {
          let v331;
          if (v327.panelType) {
            if (vO391.bLrWG(vO391.wWqjz, vO391.OEyUg)) {
              v331 = await vO391.JOxyy(f50, v328, v327.panelType);
            } else {
              try {
                const v332 = vO391.ZjjBI(u);
                v332.push(v);
                w.writeFileSync(p1260, vO391.stringify(v332, null, 2));
                return true;
              } catch (e76) {
                v312.error(vO391.MXuQX, e76.message);
                return false;
              }
            }
          } else if (vO391.EEkQd(vO391.ceTqn, vO391.SlGcV)) {
            l.error(vO391.owJYa, m);
            const vO393 = {
              success: false,
              error: n.message
            };
            return vO393;
          } else {
            v331 = await vO391.YoEYQ(f49, v328, v327.ramSize);
          }
          if (!v331.success) {
            if (vO391.HkbYT(vO391.KPFea, vO391.KPFea)) {
              const vO394 = {
                chat_id: v311,
                message_id: v329.message_id
              };
              await v18.editMessageText("❌ Gagal membuat panel: " + v331.error, vO394);
              delete vO11[v312];
              return;
            } else {
              return [];
            }
          }
          const v333 = v331.data;
          const vO395 = {
            id: "PANEL-" + Math.floor(vO391.QZtyw(100000, vO391.CsxGv(Math.random(), 900000))),
            userId: v312,
            username: v328,
            password: v333.password,
            email: v333.email,
            ramSize: v327.ramSize || vO391.WfhCj,
            panelType: v327.panelType || vO391.vbWzl,
            price: v327.harga || 0,
            paymentMethod: v327.paymentMethod || vO391.QFUOq,
            serverId: v333.serverId || v333.id,
            serverName: v333.serverName || v328,
            domain: v333.domain,
            createdAt: new Date().toISOString(),
            warrantyExpiry: new Date(vO391.IowSp(Date.now(), vO391.oxcEW(vO391.gHJRZ(vO391.gHJRZ(vO391.UMRdp(15, 24), 60), 60), 1000))).toISOString()
          };
          if (v327.panelType) {
            if (vO391.AqEbH(vO391.CHfPc, vO391.cpKBz)) {
              vO391.IkiEQ(f33, vO395);
            } else {
              try {
                const v334 = vO391.quTgY(u);
                const v335 = v334.filter(p1493 => p1493.id !== v311);
                w.writeFileSync(p1260, vO391.stringify(v335, null, 2));
                return true;
              } catch (e77) {
                v312.error(vO391.GdEXj, e77.message);
                return false;
              }
            }
          } else if (vO391.EEkQd(vO391.fQgjg, vO391.fQgjg)) {
            vO391.TqtsU(f17, vO395);
          } else {
            const v336 = t.parse(u.readFileSync(v));
            if (!v336[w]) {
              v336[E] = 0;
            }
            v336[vO391] += v311;
            v312.writeFileSync(v313, C.stringify(v336, null, 2));
            return v336[D];
          }
          let vLS9 = "";
          if (v327.panelType) {
            if (vO391.XjPpD(vO391.WgFZP, vO391.WgFZP)) {
              vLS9 = "<b>🔐 SUKSES CREATED " + v327.panelType.toUpperCase().replace("_", " ") + "!</b>\n\n▸ <b>ID User:</b> <code>" + v333.id + "</code>\n▸ <b>Username:</b> <code>" + v328 + "</code>\n▸ <b>Email:</b> <code>" + v333.email + "</code>\n▸ <b>Password:</b> <code>" + v333.password + "</code>\n▸ <b>Domain:</b> <code>" + v333.domain + "</code>\n▸ <b>Tipe:</b> <code>" + v327.panelType.toUpperCase() + "</code>\n\n⚠️ <b>Rules Panel:</b>\n▸ No Rusuh Panel!\n▸ Simpan data akun\n▸ No Share Free!";
            } else {
              const v337 = vO391.IkiEQ(vO405, t);
              if (!v337) {
                return C.sendMessage(D, vO391.pXvxj);
              }
              const v338 = ("\n```Javascript 🛒 *JUAL PANEL*\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n💼 *Status Reseller:* " + v337.package.toUpperCase() + "\n📊 *Limit Harian:* " + v337.daily_limit + " panel\n💾 *Max RAM:* " + v337.max_ram + " MB\n\n*Pilih RAM untuk dijual:*```\n    ").trim();
              const vO396 = {
                text: vO391.QwPIB,
                callback_data: vO391.IMFEt
              };
              const vO397 = {
                text: vO391.YCGff,
                callback_data: vO391.IOmiH
              };
              const vO398 = {
                text: vO391.vVKjO,
                callback_data: vO391.kCSvX
              };
              const vO399 = {
                text: vO391.fcDZt,
                callback_data: vO391.JEVKg
              };
              const vO400 = {
                text: vO391.ssdIH,
                callback_data: vO391.AmxRn
              };
              const vO401 = {
                text: vO391.Ewshm,
                callback_data: vO391.vLPZl
              };
              const vO402 = {
                text: vO391.svPjK,
                callback_data: vO391.lGVzM
              };
              const vO403 = {
                text: vO391.LeAKg,
                callback_data: vO391.uxphf
              };
              const vA45 = [[vO396, vO397, vO398], [vO399, vO400, vO401], [vO402], [vO403]];
              const vO404 = {
                inline_keyboard: vA45
              };
              const vO405 = {
                reply_markup: vO404,
                parse_mode: vO391.JJJfz
              };
              const vVO405 = vO405;
              if (w) {
                const vO406 = {
                  chat_id: F,
                  message_id: G,
                  ...vVO405
                };
                E.editMessageText(v338, vO406);
              } else {
                H.sendMessage(I, v338, vVO405);
              }
            }
          } else if (vO391.ymIDs(vO391.pMVQi, vO391.ZxvYu)) {
            k += "\n\nPesan Error: " + l;
          } else {
            vLS9 = "<b>🔐 SUKSES CREATED PANEL!</b>\n\n▸ <b>Name:</b> <code>" + v328 + "</code>\n▸ <b>Email:</b> <code>" + v333.email + "</code>\n▸ <b>ID:</b> <code>" + v333.id + "</code>\n▸ <b>RAM:</b> <code>" + v327.ramSize.toUpperCase() + "</code>\n▸ <b>Password:</b> <code>" + v333.password + "</code>\n▸ <b>Domain:</b> <code>" + v333.domain + "</code>\n\n⚠️ <b>Rules Panel:</b>\n▸ Sensor domain\n▸ Simpan data akun\n▸ Garansi 15 hari";
          }
          await v18.deleteMessage(v311, v329.message_id);
          const vO407 = {
            parse_mode: vO391.anhNp,
            reply_markup: {}
          };
          vO407.reply_markup.inline_keyboard = [[{
            text: vO391.rgMjn,
            url: v333.domain
          }, {
            text: vO391.sFAZQ,
            callback_data: "copy_" + v333.password
          }]];
          await v18.sendMessage(v311, vLS9, vO407);
          const v339 = await v18.getChat(v312);
          const v340 = v327.panelType ? v327.panelType.toUpperCase() : v327.ramSize.toUpperCase();
          await vO391.IooxE(f39, v312, v340, v339.username, v327.harga || 0);
          delete vO11[v312];
        }
      } catch (e78) {
        if (vO391.qoYcn(vO391.AbEss, vO391.PbsAN)) {
          n.push({
            text: "" + o[vO391.IowSp(p, 1)].name,
            callback_data: "buy_app_" + q[vO391.SKXgB(r, 1)].id
          });
        } else {
          console.error(vO391.KdhvK, e78);
          try {
            if (vO391.IcTtY(vO391.itEuH, vO391.fiunK)) {
              r = ("```Javascript\n💼 PEMBAYARAN RESELLER VIA QRIS\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n📦 Detail Paket:\n• 📊 Paket: " + s.packageType.toUpperCase() + "\n• 💰 Harga: Rp " + vO391.shSPK(t, u) + "\n\n💳 Detail Pembayaran:\n🔐 Kode Transaksi: " + v + "\n🧾 Biaya Admin: Rp " + vO391.noVNN(w, p1260.PAYMENT.FeeTransaksi) + "\n💳 Total Bayar: Rp " + vO391.OlzDx(vO391, v311) + "\n⏰ Batas Waktu: 5 Menit\n\n📱 Cara Bayar:\n1. Buka aplikasi e-wallet/m-banking\n2. Pilih menu QRIS / Scan QR\n3. Scan kode QR di atas\n4. Konfirmasi pembayaran\n\n✅ Akun reseller akan aktif setelah pembayaran berhasil!\n            ```").trim();
            } else {
              const vO408 = {
                chat_id: v311,
                message_id: v329.message_id
              };
              await v18.editMessageText(vO391.kzXia, vO408);
            }
          } catch (e79) {
            if (vO391.lRJVB(vO391.hdbKI, vO391.hdbKI)) {
              await v18.sendMessage(v311, vO391.kzXia);
            } else {
              const v341 = o.now();
              const v342 = vO391.KZDag(v341, p);
              const v343 = q.floor(vO391.gWzXw(v342, vO391.oxcEW(vO391.eqDfb(vO391.oxcEW(1000, 60), 60), 24)));
              const v344 = r.floor(vO391.gWzXw(vO391.nnkwn(v342, vO391.oxcEW(vO391.oxcEW(vO391.oxcEW(1000, 60), 60), 24)), vO391.BHaqF(vO391.BHaqF(1000, 60), 60)));
              const v345 = s.floor(vO391.ziVSp(vO391.IgSoj(v342, vO391.eqDfb(vO391.UMRdp(1000, 60), 60)), vO391.BHaqF(1000, 60)));
              const v346 = t.floor(vO391.ziVSp(vO391.YkEKZ(v342, vO391.CsxGv(1000, 60)), 1000));
              return v343 + "d " + v344 + "h " + v345 + "m " + v346 + "s";
            }
          }
          delete vO11[v312];
        }
      }
      return;
    }
  }
  if (vO391.VBZkv(vO17[v312]?.step, vO391.KYXPM)) {
    const v347 = vO17[v312];
    const v348 = v313.trim();
    if (!/^[a-zA-Z0-9_]{3,20}$/.test(v348)) {
      if (vO391.hUutZ(vO391.ftLDE, vO391.ltEKd)) {
        return v18.sendMessage(v311, vO391.QZtyw(vO391.mLOMy(vO391.OZOuQ(vO391.IowSp(vO391.hUXfv, vO391.eFTgb), vO391.clsfj), vO391.Acclk), vO391.UHrwg));
      } else {
        return l.parse(m.readFileSync(n));
      }
    }
    delete vO17[v312];
    const v349 = await v18.sendMessage(v311, vO391.KZbur);
    try {
      const v350 = await vO391.JOxyy(f49, v348, v347.ramSize);
      if (!v350.success) {
        if (vO391.LDHWm(vO391.OddGd, vO391.DRbVX)) {
          const vO409 = {
            chat_id: v311,
            message_id: v349.message_id
          };
          await v18.editMessageText("❌ Gagal membuat panel: " + v350.error, vO409);
          return;
        } else {
          const vO410 = {
            chat_id: p,
            message_id: q,
            ...r
          };
          vO414.editMessageText(o, vO410);
        }
      }
      const v351 = v350.data;
      const vO411 = {
        id: "PANEL-" + Math.floor(vO391.kXFaP(100000, vO391.eqDfb(Math.random(), 900000))),
        userId: v312,
        customerUsername: v348,
        username: v348,
        password: v351.password,
        email: v351.email,
        ramSize: v347.ramSize,
        panelType: vO391.VjFbw,
        price: 0,
        paymentMethod: vO391.qAOCp,
        serverId: v351.serverId,
        serverName: v351.serverName,
        domain: v351.domain,
        createdAt: new Date().toISOString(),
        warrantyExpiry: new Date(vO391.zELzo(Date.now(), vO391.iVFfs(vO391.gPBgD(vO391.DVhDo(vO391.jlJnA(15, 24), 60), 60), 1000))).toISOString(),
        resellerId: v312
      };
      vO391.TONyK(f17, vO411);
      const vV253 = v25;
      let vO412 = {};
      try {
        vO412 = JSON.parse(fs2.readFileSync(vV253));
      } catch (e80) {
        vO412 = {};
      }
      if (!vO412[v312]) {
        vO412[v312] = {
          total_sales: 0,
          total_income: 0,
          daily_sales: {}
        };
      }
      const v352 = vO391.YOidC(moment2).format(vO391.pZhug);
      const v353 = vO391.HEnZv(f54, v347.ramSize);
      vO412[v312].total_sales += 1;
      vO412[v312].total_income += v353;
      vO412[v312].daily_sales[v352] = vO391.cbYgc(vO412[v312].daily_sales[v352] || 0, 1);
      fs2.writeFileSync(vV253, JSON.stringify(vO412, null, 2));
      const v354 = vO391.wZxEE(f4, v312);
      vO391.YoEYQ(f5, v312, vO391.KZDag(v354, v353));
      await v18.deleteMessage(v311, v349.message_id);
      await v18.sendMessage(v311, vO391.IowSp(vO391.yfsWP(vO391.mLOMy(vO391.eqpjz(vO391.ylFeX(vO391.AXRCG(vO391.wtfTN("```Javascript  ✅ *PANEL BERHASIL DIBUAT UNTUK CUSTOMER!*\n\n", "📦 *RAM:* " + v347.ramSize.toUpperCase() + "\n"), "👤 *Username Customer:* " + v348 + "\n"), "💰 *Modal:* Rp " + vO391.uyglo(f2, v353) + "\n"), "💎 *Saldo Baru:* Rp " + vO391.TqtsU(f2, vO391.KZDag(v354, v353)) + "\n\n"), "📊 *Statistik Penjualan:*\n"), "• Total: " + vO412[v312].total_sales + " panel\n"), "• Hari Ini: " + vO412[v312].daily_sales[v352] + " panel```"), {
        parse_mode: vO391.JJJfz
      });
      const v355 = ("```Javascript  \n🔐 *PANEL UNTUK CUSTOMER*\n\n▸ Username: " + v348 + "\n▸ Password: " + v351.password + "\n▸ Email: " + v351.email + "\n▸ Domain: " + v351.domain + "\n▸ RAM: " + v347.ramSize.toUpperCase() + "\n\n⚠️ *Forward informasi ini ke customer!*\n            ```").trim();
      const vO414 = {
        parse_mode: vO391.JJJfz,
        reply_markup: {}
      };
      vO414.reply_markup.inline_keyboard = [[{
        text: vO391.rgMjn,
        url: v351.domain
      }, {
        text: vO391.sFAZQ,
        switch_inline_query_current_chat: v351.password
      }]];
      await v18.sendMessage(v311, v355, vO414);
    } catch (e81) {
      console.error(vO391.ZrnWO, e81);
      const vO415 = {
        chat_id: v311,
        message_id: v349.message_id
      };
      await v18.editMessageText(vO391.kzXia, vO415);
    }
    return;
  }
  if (vO391.qoYcn(vO16[v312], vO391.jgcTs)) {
    delete vO16[v312];
    const v356 = vO391.TOTSs(parseInt, v313.replace(/[^0-9]/g, ""));
    if (!v356 || vO391.jrjOS(v356, 5000)) {
      return v18.sendMessage(v311, vO391.dbnYQ);
    }
    if (vO391.cIaMy(v356, 1000000)) {
      return v18.sendMessage(v311, vO391.BLXdc);
    }
    await vO391.wdFPK(f43, v311, v312, v356);
    return;
  }
  if (vO391.qqwVL(vO15[v312], vO391.zqXbB)) {
    delete vO15[v312];
    const v357 = v313.trim();
    const vO416 = {
      action: vO391.mbHCE,
      targetUser: v357
    };
    vO15[v312] = vO416;
    return v18.sendMessage(v311, vO391.JZJJE);
  }
  if (vO391.qqwVL(vO15[v312]?.action, vO391.mbHCE)) {
    const v358 = vO15[v312].targetUser;
    delete vO15[v312];
    const v359 = vO391.OlzDx(parseInt, v313.replace(/[^0-9]/g, ""));
    if (!v359 || vO391.RyGYU(v359, 0)) {
      return v18.sendMessage(v311, vO391.LUBRT);
    }
    let v360;
    if (v358.startsWith("@")) {
      try {
        v360 = v358.substring(1);
      } catch (e82) {
        return v18.sendMessage(v311, vO391.rLeRS);
      }
    } else {
      v360 = vO391.xOvfG(parseInt, v358);
    }
    const v361 = vO391.wOSob(f14, v360, v359);
    if (vO391.MgSse(v361, null)) {
      await v18.sendMessage(v311, vO391.rjHep(vO391.TCMIz(vO391.yhhzi("```Javascript  ✅ *SALDO BERHASIL DITAMBAHKAN*\n\n", "👤 *User:* " + v358 + "\n"), "💰 *Jumlah:* Rp " + vO391.TqtsU(f2, v359) + "\n"), "💎 *Saldo Baru:* Rp " + vO391.uyglo(f2, v361) + "```"), {
        parse_mode: vO391.JJJfz
      });
      try {
        await v18.sendMessage(v360, vO391.SKXgB(vO391.zELzo(vO391.sNDpu("```Javascript  🎉 *SALDO ANDA DITAMBAHKAN!*\n\n", "💰 *Jumlah:* Rp " + vO391.NonzG(f2, v359) + "\n"), "💎 *Saldo Baru:* Rp " + vO391.xOvfG(f2, v361) + "\n"), "👤 *Oleh:* Owner```"), {
          parse_mode: vO391.JJJfz
        });
      } catch (e83) {
        console.log(vO391.VYIZo);
      }
    } else {
      await v18.sendMessage(v311, vO391.McoWe);
    }
    return;
  }
  if (vO391.kywWg(vO15[v312], vO391.NRwsJ)) {
    delete vO15[v312];
    const vV313 = v313;
    const v362 = vO391.kUrPg(f15);
    let vLN08 = 0;
    let vLN09 = 0;
    const v363 = await v18.sendMessage(v311, vO391.cdhpR(vO391.ylFeX(vO391.cdhpR(vO391.yhhzi("```Javascript  📢 *MENGIRIM BROADCAST...*\n\n", "📝 *Pesan:* " + vV313.substring(0, 100) + "...\n"), "👥 *Target:* " + v362.length + " users\n"), "✅ *Berhasil:* 0\n"), "❌ *Gagal:* 0```"), {
      parse_mode: vO391.JJJfz
    });
    for (const v364 of v362) {
      try {
        const vO417 = {
          parse_mode: vO391.JJJfz
        };
        await v18.sendMessage(v364.userId, "📢 *BROADCAST MESSAGE*\n\n" + vV313, vO417);
        vLN08++;
      } catch (e84) {
        vLN09++;
      }
      if (vO391.uxBUj(vO391.IbzwX(vO391.XUmur(vLN08, vLN09), 10), 0)) {
        await v18.editMessageText(vO391.xYwBi(vO391.cjoCu(vO391.eqpjz(vO391.cbYgc("```Javascript  📢 *MENGIRIM BROADCAST...*\n\n", "📝 *Pesan:* " + vV313.substring(0, 100) + "...\n"), "👥 *Target:* " + v362.length + " users\n"), "✅ *Berhasil:* " + vLN08 + "\n"), "❌ *Gagal:* " + vLN09 + "```"), {
          chat_id: v311,
          message_id: v363.message_id,
          parse_mode: vO391.JJJfz
        });
      }
      await new Promise(p1494 => setTimeout(p1494, 100));
    }
    await v18.editMessageText(vO391.PQoNf(vO391.sYeiU(vO391.OoChl(vO391.yfsWP("```Javascript  ✅ *BROADCAST SELESAI!*\n\n", "📝 *Pesan:* " + vV313.substring(0, 100) + "...\n"), "👥 *Total Target:* " + v362.length + " users\n"), "✅ *Berhasil:* " + vLN08 + "\n"), "❌ *Gagal:* " + vLN09 + "```"), {
      chat_id: v311,
      message_id: v363.message_id,
      parse_mode: vO391.JJJfz
    });
    return;
  }
  if (vO391.uxBUj(vO15[v312], vO391.svJDP)) {
    delete vO15[v312];
    const v365 = v313.trim();
    const vO418 = {
      action: vO391.LWxne,
      appName: v365
    };
    vO15[v312] = vO418;
    return v18.sendMessage(v311, vO391.CvZdC);
  }
  if (vO391.qGdma(vO15[v312]?.action, vO391.LWxne)) {
    const v366 = vO15[v312].appName;
    delete vO15[v312];
    const v367 = vO391.QrGms(parseInt, v313.replace(/[^0-9]/g, ""));
    if (!v367 || vO391.EDDoj(v367, 0)) {
      return v18.sendMessage(v311, vO391.ULdzO);
    }
    const vO419 = {
      action: vO391.ibJbI,
      appName: v366,
      price: v367
    };
    vO15[v312] = vO419;
    return v18.sendMessage(v311, vO391.Ummpv);
  }
  if (vO391.KiiOr(vO15[v312]?.action, vO391.ibJbI)) {
    const v368 = vO15[v312].appName;
    const v369 = vO15[v312].price;
    delete vO15[v312];
    const v370 = v313.trim();
    const vO420 = {
      action: vO391.vOade,
      appName: v368,
      price: v369,
      description: v370
    };
    vO15[v312] = vO420;
    return v18.sendMessage(v311, vO391.TZcTW);
  }
  if (vO391.kywWg(vO15[v312], vO391.jopwu)) {
    delete vO15[v312];
    const v371 = v313.trim();
    const vO421 = {
      action: vO391.hMwot,
      docName: v371
    };
    vO15[v312] = vO421;
    return v18.sendMessage(v311, vO391.NHHbu);
  }
  if (vO391.wUdJB(vO15[v312]?.action, vO391.hMwot)) {
    const v372 = vO15[v312].docName;
    delete vO15[v312];
    const v373 = vO391.gMbVR(parseInt, v313.replace(/[^0-9]/g, ""));
    if (!v373 || vO391.gcuki(v373, 0)) {
      return v18.sendMessage(v311, vO391.ULdzO);
    }
    const vO422 = {
      action: vO391.Pegfn,
      docName: v372,
      price: v373
    };
    vO15[v312] = vO422;
    return v18.sendMessage(v311, vO391.LRqxE);
  }
  if (vO391.FAMZT(vO15[v312]?.action, vO391.Pegfn)) {
    const v374 = vO15[v312].docName;
    const v375 = vO15[v312].price;
    delete vO15[v312];
    const v376 = v313.trim();
    const vO423 = {
      action: vO391.xGvxs,
      docName: v374,
      price: v375,
      description: v376
    };
    vO15[v312] = vO423;
    return v18.sendMessage(v311, vO391.hJumG);
  }
  if (p1260.document) {
    const v377 = p1260.document.file_id;
    if (vO391.VBZkv(vO15[v312]?.action, vO391.vOade)) {
      const v378 = vO15[v312];
      delete vO15[v312];
      const vO424 = {
        id: "APP-" + Math.floor(vO391.QeZwh(100000, vO391.mVqpA(Math.random(), 900000))),
        name: v378.appName,
        price: v378.price,
        description: v378.description,
        fileId: v377,
        createdAt: new Date().toISOString()
      };
      if (vO391.BYbcK(f20, vO424)) {
        await v18.sendMessage(v311, vO391.PFxFE(vO391.wtfTN(vO391.eqpjz(vO391.KKNmj("```Javascript  ✅ *APPS BERHASIL DITAMBAHKAN!*\n\n", "📱 *Nama:* " + vO424.name + "\n"), "💰 *Harga:* Rp " + vO391.wZxEE(f2, vO424.price) + "\n"), "📝 *Deskripsi:* " + vO424.description + "\n"), "🆔 *ID:* " + vO424.id + "```"), {
          parse_mode: vO391.JJJfz
        });
      } else {
        await v18.sendMessage(v311, vO391.ImxiP);
      }
      return;
    }
    if (vO391.eoejN(vO15[v312]?.action, vO391.xGvxs)) {
      const v379 = vO15[v312];
      delete vO15[v312];
      const vO425 = {
        id: "DOC-" + Math.floor(vO391.sZGvv(100000, vO391.eHepw(Math.random(), 900000))),
        name: v379.docName,
        price: v379.price,
        description: v379.description,
        fileId: v377,
        createdAt: new Date().toISOString()
      };
      if (vO391.AilEf(f23, vO425)) {
        await v18.sendMessage(v311, vO391.BogZO(vO391.ZalDn(vO391.THPaJ(vO391.fNaPv("```Javascript  ✅ *DOCUMENT BERHASIL DITAMBAHKAN!*\n\n", "💻 *Nama:* " + vO425.name + "\n"), "💰 *Harga:* Rp " + vO391.KQbog(f2, vO425.price) + "\n"), "📝 *Deskripsi:* " + vO425.description + "\n"), "🆔 *ID:* " + vO425.id + "```"), {
          parse_mode: vO391.JJJfz
        });
      } else {
        await v18.sendMessage(v311, vO391.IbEjd);
      }
      return;
    }
  }
});
v18.onText(/^\/(withdraw|cairkan)$/i, async p1495 => {
  const v380 = p1495.chat.id;
  const v381 = p1495.from.id.toString();
  const v382 = p1495.reply_to_message;
  const v383 = v382 ? v382.message_id : p1495.message_id;
  if (v381 !== configJs.OWNER_ID) {
    return v18.sendMessage(v380, "❌ Hanya owner yang bisa mengakses perintah ini.");
  }
  try {
    console.log("API Key yang digunakan:", configJs.PAYMENT.apiAtlantic ? "Ada" : "Tidak ada");
    console.log("Panjang API Key:", configJs.PAYMENT.apiAtlantic?.length);
    if (!configJs.PAYMENT.apiAtlantic || configJs.PAYMENT.apiAtlantic.trim() === "") {
      throw new Error("API Key tidak ditemukan di konfigurasi");
    }
    function f76(p1496, p1497 = 3, p1498 = "X") {
      if (p1496.length <= p1497) {
        return p1496;
      }
      const v384 = p1496.slice(0, p1497);
      const v385 = p1498.repeat(p1496.length - p1497);
      return v384 + v385;
    }
    function f77(p1499, p1500 = 3, p1501 = "X") {
      let vLS10 = "";
      let vLN010 = 0;
      for (let v386 of p1499) {
        if (v386 === " ") {
          vLS10 += v386;
        } else if (vLN010 < p1500) {
          vLS10 += v386;
          vLN010++;
        } else {
          vLS10 += p1501;
        }
      }
      return vLS10;
    }
    const vLSHttpsatlantich2hcomg = "https://atlantich2h.com/get_profile";
    const v387 = qs2.stringify({
      api_key: configJs.PAYMENT.apiAtlantic.trim()
    });
    console.log("Mengambil data saldo...");
    const v388 = await axios2.post(vLSHttpsatlantich2hcomg, v387, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      },
      timeout: 10000
    });
    console.log("Response status:", v388.status);
    console.log("Response data:", JSON.stringify(v388.data, null, 2));
    if (!v388.data) {
      throw new Error("Tidak ada response dari server Atlantic");
    }
    if (v388.data.error) {
      throw new Error(v388.data.message || "Error: " + v388.data.error);
    }
    if (!v388.data.data) {
      throw new Error("Struktur response tidak valid - data tidak ditemukan");
    }
    const v389 = v388.data.data.balance;
    if (v389 === undefined || v389 === null) {
      throw new Error("Saldo tidak ditemukan dalam response");
    }
    const v390 = Math.max(0, v389 - 2000);
    if (v390 <= 0) {
      const vO428 = {
        reply_to_message_id: v383
      };
      return v18.sendMessage(v380, "❌ Saldo tidak cukup untuk melakukan penarikan (minimal saldo setelah fee: Rp 1)", vO428);
    }
    const vLSHttpsatlantich2hcomt = "https://atlantich2h.com/transfer/create";
    const v391 = qs2.stringify({
      api_key: configJs.PAYMENT.apiAtlantic.trim(),
      ref_id: "WD" + Date.now(),
      kode_bank: configJs.type_ewallet,
      nomor_akun: configJs.nomor_pencairan,
      nama_pemilik: configJs.atas_nama_ewallet,
      nominal: v390.toString()
    });
    console.log("Memproses pencairan...");
    const v392 = await axios2.post(vLSHttpsatlantich2hcomt, v391, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      },
      timeout: 10000
    });
    console.log("Response pencairan:", JSON.stringify(v392.data, null, 2));
    if (!v392.data) {
      throw new Error("Tidak ada response dari proses pencairan");
    }
    if (v392.data.error) {
      throw new Error(v392.data.message || "Error pencairan: " + v392.data.error);
    }
    if (!v392.data.data) {
      throw new Error("Struktur response pencairan tidak valid");
    }
    const v393 = v392.data.data.id;
    const v394 = v392.data.data.status || "unknown";
    const vF5 = p1502 => {
      return new Intl.NumberFormat("id-ID").format(p1502);
    };
    const vVF5 = vF5(v389);
    const vVF52 = vF5(v390);
    const vVF53 = vF5(2000);
    await v18.sendMessage(v380, "```JAVASCRIPT\n💳 Informasi Pencairan Saldo:  \n\n- Saldo Awal: Rp " + vVF5 + "\n- Nominal Penarikan: Rp " + vVF52 + "  \n- Fee Pencairan: Rp " + vVF53 + "  \n- Tujuan: " + f76(configJs.nomor_pencairan) + "  \n- Type Ewallet: " + configJs.type_ewallet + "  \n- Nama Pemilik: " + f77(configJs.atas_nama_ewallet) + "  \n- Status: " + v394 + "  \n\nMemproses Pencairan Saldo...  \n```", {
      reply_to_message_id: v383,
      parse_mode: "Markdown"
    });
    if (v394 === "success") {
      return v18.sendMessage(v380, "```JAVASCRIPT\n✅ Pencairan Berhasil!  \n\n- Saldo Awal: Rp " + vVF5 + "\n- Nominal Penarikan: Rp " + vVF52 + "  \n- Fee Pencairan: Rp " + vVF53 + "  \n- Tujuan: " + f76(configJs.nomor_pencairan) + "  \n- Type Ewallet: " + configJs.type_ewallet + "  \n- Nama Pemilik: " + f77(configJs.atas_nama_ewallet) + "  \n- Status: " + v394 + "  \n\nSaldo Berhasil Dikirim Ke Ewallet Pribadi ✅  \n```", {
        reply_to_message_id: v383,
        parse_mode: "Markdown"
      });
    }
    if (v394 === "pending") {
      let vLN011 = 0;
      const vLN12 = 12;
      while (vLN011 < vLN12) {
        vLN011++;
        console.log("Cek status ke-" + vLN011 + " untuk ID: " + v393);
        const vLSHttpsatlantich2hcomt2 = "https://atlantich2h.com/transfer/status";
        const v395 = qs2.stringify({
          api_key: configJs.PAYMENT.apiAtlantic.trim(),
          id: v393
        });
        const v396 = await axios2.post(vLSHttpsatlantich2hcomt2, v395, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
          },
          timeout: 10000
        });
        const v397 = v396?.data?.data || {};
        console.log("Status check " + vLN011 + ":", v397?.status);
        if (v397?.status === "success") {
          return v18.sendMessage(v380, "```JAVASCRIPT\n✅ Pencairan Berhasil!  \n\n- Saldo Awal: Rp " + vVF5 + "\n- Nominal Penarikan: Rp " + vVF52 + "  \n- Fee Pencairan: Rp " + vVF53 + "  \n- Tujuan: " + f76(configJs.nomor_pencairan) + "  \n- Type Ewallet: " + configJs.type_ewallet + "  \n- Nama Pemilik: " + f77(configJs.atas_nama_ewallet) + "  \n- Status: " + v397.status + "  \n\nSaldo Berhasil Dikirim Ke Ewallet Pribadi ✅  \n```", {
            reply_to_message_id: v383,
            parse_mode: "Markdown"
          });
        } else if (v397?.status === "failed" || v397?.status === "error") {
          throw new Error("Pencairan gagal dengan status: " + v397.status);
        }
        await new Promise(p1503 => setTimeout(p1503, 5000));
      }
      throw new Error("Timeout: Pencairan masih pending setelah 1 menit");
    }
  } catch (e85) {
    console.error("Error detail:", e85.response?.data || e85.message);
    console.error("Error stack:", e85.stack);
    let v398 = e85.response?.data?.message || e85.message;
    if (v398.includes("Saldo tidak cukup")) {
      console.warn("Saldo habis setelah pencairan, abaikan error ini.");
      return;
    }
    let vLSGagalMemprosesPencai = "❌ Gagal memproses pencairan saldo";
    if (v398.includes("Invalid Credential") || v398.includes("invalid") || v398.includes("unauthorized")) {
      vLSGagalMemprosesPencai = "❌ API Key tidak valid atau telah kadaluarsa. Silakan periksa kembali API key Atlantic Anda.";
    } else if (v398.includes("timeout") || v398.includes("Timeout")) {
      vLSGagalMemprosesPencai = "❌ Timeout: Server tidak merespons. Silakan coba lagi nanti.";
    } else if (v398.includes("network") || v398.includes("ECONNREFUSED")) {
      vLSGagalMemprosesPencai = "❌ Gagal terhubung ke server. Periksa koneksi internet Anda.";
    } else if (v398) {
      vLSGagalMemprosesPencai += "\n\nPesan Error: " + v398;
    }
    const vO433 = {
      reply_to_message_id: v383
    };
    return v18.sendMessage(v380, vLSGagalMemprosesPencai, vO433);
  }
});
v18.onText(/^\/(testapi|cekapikey)$/i, async p1504 => {
  const v399 = p1504.chat.id;
  const v400 = p1504.from.id.toString();
  if (v400 !== configJs.OWNER_ID) {
    return v18.sendMessage(v399, "❌ Hanya owner yang bisa mengakses perintah ini.");
  }
  try {
    console.log("Config object:", configJs);
    console.log("apiAtlantic in config:", configJs.PAYMENT.apiAtlantic);
    if (!configJs.PAYMENT.apiAtlantic) {
      return v18.sendMessage(v399, "❌ API Key tidak ditemukan di config.\n\nPastikan config.js berisi:\n\napiAtlantic: \"your_api_key_here\"");
    }
    const v401 = configJs.PAYMENT.apiAtlantic.trim ? configJs.PAYMENT.apiAtlantic.trim() : String(configJs.PAYMENT.apiAtlantic).trim();
    console.log("API Key setelah trim:", v401);
    console.log("Panjang API Key:", v401.length);
    const vLSHttpsatlantich2hcomg2 = "https://atlantich2h.com/get_profile";
    const vO434 = {
      api_key: v401
    };
    const v402 = qs2.stringify(vO434);
    await v18.sendMessage(v399, "🔄 Testing API Key...");
    const v403 = await axios2.post(vLSHttpsatlantich2hcomg2, v402, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      },
      timeout: 10000
    });
    console.log("Response test API:", JSON.stringify(v403.data, null, 2));
    if (v403.data && v403.data.data) {
      await v18.sendMessage(v399, "✅ API Key Valid!\n\nSaldo: Rp " + new Intl.NumberFormat("id-ID").format(v403.data.data.balance) + "\nUsername: " + (v403.data.data.username || "Tidak tersedia"));
    } else {
      await v18.sendMessage(v399, "❌ API Key tidak valid - Response tidak sesuai format");
    }
  } catch (e86) {
    console.error("Error test API:", e86.response?.data || e86.message);
    const v404 = e86.response?.data?.message || e86.message;
    if (v404.includes("Invalid Credential") || v404.includes("invalid")) {
      await v18.sendMessage(v399, "❌ API Key tidak valid atau kadaluarsa.\n\nSilakan periksa API key di dashboard Atlantic.");
    } else if (e86.response?.data) {
      await v18.sendMessage(v399, "❌ Error: " + JSON.stringify(e86.response.data));
    } else {
      await v18.sendMessage(v399, "❌ API Key Gagal: " + v404);
    }
  }
});
v18.onText(/^\/(ceksaldo|saldo|balance)$/i, async p1505 => {
  const v405 = p1505.chat.id;
  const v406 = p1505.from.id.toString();
  const v407 = p1505.reply_to_message;
  const v408 = v407 ? v407.message_id : p1505.message_id;
  if (v406 !== configJs.OWNER_ID) {
    return v18.sendMessage(v405, "❌ Hanya owner yang bisa mengakses perintah ini.");
  }
  try {
    if (!configJs.PAYMENT.apiAtlantic) {
      const vO437 = {
        reply_to_message_id: v408
      };
      return v18.sendMessage(v405, "❌ API Key tidak ditemukan di konfigurasi.", vO437);
    }
    const v409 = configJs.PAYMENT.apiAtlantic.trim ? configJs.PAYMENT.apiAtlantic.trim() : String(configJs.PAYMENT.apiAtlantic).trim();
    if (!v409) {
      const vO438 = {
        reply_to_message_id: v408
      };
      return v18.sendMessage(v405, "❌ API Key kosong. Periksa konfigurasi apiAtlantic.", vO438);
    }
    const vO439 = {
      reply_to_message_id: v408,
      parse_mode: "Markdown"
    };
    const v410 = await v18.sendMessage(v405, "```JAVASCRIPT 🔄 Mengambil data saldo....```", vO439);
    const vLSHttpsatlantich2hcomg3 = "https://atlantich2h.com/get_profile";
    const vO440 = {
      api_key: v409
    };
    const v411 = qs2.stringify(vO440);
    const v412 = await axios2.post(vLSHttpsatlantich2hcomg3, v411, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      },
      timeout: 10000
    });
    if (!v412.data) {
      throw new Error("Tidak ada response dari server Atlantic");
    }
    if (v412.data.error) {
      throw new Error(v412.data.message || "Error: " + v412.data.error);
    }
    if (!v412.data.data) {
      throw new Error("Struktur response tidak valid - data tidak ditemukan");
    }
    const v413 = v412.data.data;
    const v414 = v413.balance;
    const v415 = v413.username || "Tidak tersedia";
    const v416 = v413.name || "Tidak tersedia";
    const v417 = v413.email || "Tidak tersedia";
    if (v414 === undefined || v414 === null) {
      throw new Error("Saldo tidak ditemukan dalam response");
    }
    const vF8 = p1506 => {
      return new Intl.NumberFormat("id-ID").format(p1506);
    };
    const vVF8 = vF8(v414);
    await v18.deleteMessage(v405, v410.message_id);
    await v18.sendMessage(v405, "`\n💰 *INFORMASI SALDO ATLANTIC*\n\n┌─────────────────\n│ 👤 *Profile Info*\n│ ├ Username: " + v415 + "\n│ ├ Nama: " + v416 + "\n│ ├ Email: " + v417 + "\n│ \n│ 💰 *Saldo*\n│ ├ Saldo Aktif: *Rp " + vVF8 + "*\n│ ├ Estimasi Penarikan: *Rp " + vF8(Math.max(0, v414 - 2000)) + "*\n│ └ (setelah potongan fee Rp 2.000)\n│ \n│ ⚡ *Status*\n│ └ ✅ Akun aktif dan terhubung\n\n💡 *Tips:* Gunakan /withdraw untuk menarik saldo\n        `", {
      reply_to_message_id: v408,
      parse_mode: "Markdown"
    });
  } catch (e87) {
    console.error("Error cek saldo:", e87.response?.data || e87.message);
    const v418 = e87.response?.data?.message || e87.message;
    let vLSGagalMengambilDataSa = "❌ Gagal mengambil data saldo";
    if (v418.includes("Invalid Credential") || v418.includes("invalid") || v418.includes("unauthorized")) {
      vLSGagalMengambilDataSa = "❌ API Key tidak valid atau telah kadaluarsa.\nSilakan periksa kembali API key Atlantic Anda.";
    } else if (v418.includes("timeout") || v418.includes("Timeout")) {
      vLSGagalMengambilDataSa = "❌ Timeout: Server Atlantic tidak merespons.\nSilakan coba lagi nanti.";
    } else if (v418.includes("network") || v418.includes("ECONNREFUSED")) {
      vLSGagalMengambilDataSa = "❌ Gagal terhubung ke server.\nPeriksa koneksi internet Anda.";
    } else {
      vLSGagalMengambilDataSa += "\n\nPesan Error: " + v418;
    }
    try {
      if (processingMsg) {
        await v18.deleteMessage(v405, processingMsg.message_id);
      }
    } catch (e88) {}
    const vO443 = {
      reply_to_message_id: v408
    };
    return v18.sendMessage(v405, vLSGagalMengambilDataSa, vO443);
  }
});
v18.on("polling_error", p1507 => {
  console.error("❌ Polling error:", p1507);
});
v18.on("webhook_error", p1508 => {
  console.error("❌ Webhook error:", p1508);
});
process.on("uncaughtException", p1509 => {
  console.error("❌ Uncaught Exception:", p1509);
});
process.on("unhandledRejection", (p1510, p1511) => {
  console.error("❌ Unhandled Rejection at:", p1511, "reason:", p1510);
});
console.log("🤖 Bot Panel Premium berhasil dijalankan!");
import React, { useEffect, lazy, Suspense } from 'react'
import Data from '../../Constants/LOMData.json';
import Dropdown from '../pages/Components/Dropdown'
import Tables from './Components/Tables';
import Styles from './Styles/LOM.module.css'
import { useCallback, useState } from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import '@fontsource/roboto/300.css';
import GridTable from './Components/GridTable';
let MyPlot = lazy(() => import("./Components/Visualization"))



const LOM = () => {
  console.log(Data);
  const [ResinValue, setResinValue] = useState('');
  const [FabricValue, setFabricValue] = useState('');
  const [vfr, setVFR] = useState(0);
  const [RuleOfMixData, setRuleOfMixData] = useState({});
  const [ChamisData, setChamisData] = useState({});
  const [HalpinData, setHalpinData] = useState({});
  const [MechanicalProp1, setMechanicalProp1] = useState({});
  const [MechanicalProp2, setMechanicalProp2] = useState({});
  const [HomoCompositesFailure, setHomoCompositesFailure] = useState({});
  const [FailureComposite, setFailureComposites] = useState({});

  //SET DATA FOR GRAPH
  const [E22LOM, setE22LOM] = useState([]);
  const [E22Chamis, setE22Chamis] = useState([]);
  const [E22Halpin, setE22Halpin] = useState([]);
  const [G12LOM, setG12LOM] = useState([]);
  const [G12Chamis, setG12Chamis] = useState([]);
  const [G12Halpin, setG12Halpin] = useState([]);
  const [F11TC, setF11TC] = useState([]);
  const [F11CMin, setF11CMin] = useState([]);
  const [F22C, setF22C] = useState([]);
  const [F22T, setF22T] = useState([]);
  const [F12C, setF12C] = useState([]);

  const [VFF, setVFF] = useState([]);



  useEffect(() => {

    if (ResinValue != null && FabricValue != null) {
      Calculations();
    }

  }, [ResinValue, FabricValue, vfr])



  const Calculations = () => {

    let vffT = new Array(11).fill(0);
    let E11T = new Array(11).fill(0);
    let E22T = new Array(11).fill(0);
    let G12T = new Array(11).fill(0);
    let G21T = new Array(11).fill(0);
    let V12T = new Array(11).fill(0);
    let V21T = new Array(11).fill(0);
    let E22_ChT = new Array(11).fill(0);
    let G12_ChT = new Array(11).fill(0);
    let E22_HTT = new Array(11).fill(0);
    let G12_HTT = new Array(11).fill(0);
    let F11T_T = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let F11C_min_T = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let F22T_T = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let F22C_T = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let F12_T = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let F11C_Split_T = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let F11C_Shear_T = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let F11C_buck_T = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let mode_T = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let min = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let MechProp1 = [];
    let MechProp2 = [];
    let HomoComposites = [];



    let RuleOMix = {
      E11: '',
      E22: '',
      G12: '',

    }


    const Fibre = Data.fibre[FabricValue];
    const Resin = Data.resin[ResinValue];

    let Chamis = {
      E22_Ch: '',
      G12_Ch: '',
    }

    let Halpin = {
      E22_HT: '',
      G12_HT: '',
    }
    if (Fibre && Resin) {
      //E11 Longitudinal - law of mixtures
      RuleOMix.E11 = Fibre.E11F * vfr + Resin.E * (1 - vfr);
      //E22 Transverse - inverse law of mixtures
      RuleOMix.E22 = Fibre.E22F * Resin.E / (vfr * Resin.E + (1 - vfr) * Fibre.E22F);
      //G12 Longitudinal - inverse law of mixtures
      RuleOMix.G12 = Fibre.G12F * Resin.G / (vfr * Resin.G + (1 - vfr) * Fibre.G12F);
      //G21 Transverse - law of mixtures
      //v12 Longitudinal - law of mixtures
      RuleOMix.V12 = Fibre.V12F * vfr + Resin.v * (1 - vfr);
      setRuleOfMixData(RuleOMix);

      //E22 Transverse - CHAMIS
      Chamis.E22_Ch = Resin.E * ((1 - Math.sqrt(vfr)) + (Math.sqrt(vfr) / (1 - Math.sqrt(vfr) * (1 - Resin.E / Fibre.E22F))));
      //G12 Transverse - CHAMIS
      Chamis.G12_Ch = Resin.G * ((1 - Math.sqrt(vfr)) + (Math.sqrt(vfr) / (1 - Math.sqrt(vfr) * (1 - Resin.G / Fibre.G12F))));
      setChamisData(Chamis);

      let ETA = 2;
      //E22 Transverse - HALPIN-TSAI
      let NITA_E22 = ((Fibre.E22F / Resin.E) - 1) / ((Fibre.E22F / Resin.E) + ETA);
      Halpin.E22_HT = Resin.E * (1 + ETA * NITA_E22 * vfr) / (1 - NITA_E22 * vfr);
      //G12 Transverse - HALPIN-TSAI
      let NITA_G12 = ((Fibre.G12F / Resin.G) - 1) / ((Fibre.G12F / Resin.G) + ETA);
      Halpin.G12_HT = Resin.G * (1 + ETA * NITA_G12 * vfr) / (1 - NITA_G12 * vfr);

      setHalpinData(Halpin);




      for (let i = 0; i <= 10; i++) {
        const vf = i * 0.1;
        vffT[i] = vf;
        E11T[i] = Fibre.E11F * vf + Resin.E * (1 - vf);
        E22T[i] = (Fibre.E22F * Resin.E) / (vf * Resin.E + (1 - vf) * Fibre.E22F);
        G12T[i] = (Fibre.G12F * Resin.G) / (vf * Resin.G + (1 - vf) * Fibre.G12F);
        G21T[i] = Fibre.G21F * vf + Resin.G * (1 - vf);
        V12T[i] = Fibre.V12F * vf + Resin.v * (1 - vf);
        V21T[i] = (Fibre.V21F * Resin.v) / (vf * Resin.v + (1 - vf) * Fibre.V21F);
        E22_ChT[i] =
          Resin.E * ((1 - Math.sqrt(vf)) + Math.sqrt(vf) / (1 - Math.sqrt(vf) * (1 - Resin.E / Fibre.E22F)));
        G12_ChT[i] =
          Resin.G * ((1 - Math.sqrt(vf)) + Math.sqrt(vf) / (1 - Math.sqrt(vf) * (1 - Resin.G / Fibre.G12F)));
        const NITA_E22 = ((Fibre.E22F / Resin.E) - 1) / ((Fibre.E22F / Resin.E) + ETA);
        E22_HTT[i] = (Resin.E * (1 + ETA * NITA_E22 * vf)) / (1 - NITA_E22 * vf);
        const NITA_G12 = ((Fibre.G12F / Resin.G) - 1) / ((Fibre.G12F / Resin.G) + ETA);
        G12_HTT[i] = (Resin.G * (1 + ETA * NITA_G12 * vf)) / (1 - NITA_G12 * vf);

        /* ========================================================================================================================================  */

        if (Fibre.F11T == 0 || Resin.FT == 0) {
          F11T_T[i] = 0;
        } else {
          let SIG_Resin_Star = Fibre.F11T * Resin.E / Fibre.E11F;
          let Vmin = (Resin.FT - SIG_Resin_Star) / (Fibre.F11T - SIG_Resin_Star);
          if (vf < Vmin) {
            F11T_T[i] = Resin.FT * (1 - vf);
          } else {
            F11T_T[i] = Fibre.F11T * vf + SIG_Resin_Star * (1 - vf);
          }
        }

        if (Fibre.F12_Fibre == 0 || Resin.F12 == 0) {
          F11C_buck_T[i] = 0;
          F11C_Split_T[i] = 0;
          F11C_Shear_T[i] = 0;
        } else {
          if (vf < 1) {
            F11C_buck_T[i] = Resin.G / (1 - vf);
          } else {
            F11C_buck_T[i] = 100000;
          }
          let DS_ratio = Math.sqrt(4 * vf / 3.142);
          let SCF = 1 / (DS_ratio * ((Resin.E / Fibre.E22F) - 1) + 1);
          let StrainUlt_resin = Resin.FT / Resin.E;
          let strain22T = StrainUlt_resin / SCF;
          F11C_Split_T[i] = (E11T[i] * strain22T) / V12T[i];
          F11C_Shear_T[i] = 2 * (Fibre.F12_Fibre * vf + Resin.F12 * (1 - vf));

          if (F11C_buck_T[i] <= F11C_Split_T[i] && F11C_buck_T[i] <= F11C_Shear_T[i]) {
            min[i] = F11C_buck_T[i];
            mode_T[i] = 'Buckle';
          }
          else if (F11C_Split_T[i] <= F11C_buck_T[i] && F11C_Split_T[i] <= F11C_Shear_T[i]) {
            min[i] = F11C_Split_T[i];
            mode_T[i] = "Split";
          } else {
            min[i] = F11C_Shear_T[i];
            mode_T[i] = "Shear";
          }
          F11C_min_T[i] = min[i];
        }

        if (Resin.FT == 0) {
          F22T_T[i] = 0;
        } else {
          let DS_ratio = Math.sqrt(4 * vf / 3.142);
          let SCF = 1 / (DS_ratio * ((Resin.E / Fibre.E22F) - 1) + 1);
          let StrainUlt_resin = Resin.FT / Resin.E;
          let strain22T = StrainUlt_resin / SCF;
          F22T_T[i] = E22_ChT[i] * strain22T;
        }

        if (Resin.FC == 0) {
          F22C_T[i] = 0;
        } else {
          let DS_ratio = Math.sqrt(4 * vf / 3.142);
          let SCF = 1 / (DS_ratio * ((Resin.E / Fibre.E22F) - 1) + 1);
          let StrainUlt_resin = Resin.FC / Resin.E;
          let strain22T = StrainUlt_resin / SCF;
          F22C_T[i] = E22_ChT[i] * strain22T;
        }

        if (Resin.F12 == 0) {
          F12_T[i] = 0;
        } else {
          let DS_ratio = Math.sqrt(4 * vf / 3.142);
          let SCF = 1 / (DS_ratio * ((Resin.G / Fibre.G12F) - 1) + 1);
          let StrainUlt_resin = Resin.F12 / Resin.G;
          let strain12 = StrainUlt_resin / SCF;
          F12_T[i] = G12_ChT[i] * strain12;
        }













        let Temp1 = {
          Vf: Math.round(vffT[i] * 100) / 100,
          E11LOM: Math.round(E11T[i] * 100) / 100,
          E22LOM: Math.round(E22T[i] * 100) / 100,
          G12LOM: Math.round(G12T[i] * 100) / 100,
          V12LOM: Math.round(V12T[i] * 100) / 100
        }

        let Temp2 = {
          Vf: Math.round(vffT[i] * 100) / 100,
          E22LOM: Math.round(E22T[i] * 100) / 100,
          E22Halpin: Math.round(E22_HTT[i] * 100) / 100,
          E22Chamis: Math.round(E22_ChT[i] * 100) / 100,
          G12LOM: Math.round(G12T[i] * 100) / 100,
          G12Chamis: Math.round(G12_ChT[i] * 100) / 100,
          G12Halpin: Math.round(G12_HTT[i] * 100) / 100

        }

        let Temp3 = {
          Vf: Math.round(vffT[i] * 100) / 100,
          F11T: Math.round(F11T_T[i] * 100) / 100,
          F11C_Min: Math.round(F11C_min_T[i] * 100) / 100,
          Mode: mode_T[i],
          F22T: Math.round(F22T_T[i] * 100) / 100,
          F22C: Math.round(F22C_T[i] * 100) / 100,
          F12: Math.round(F12_T[i] * 100) / 100

        }


        MechProp1.push(Temp1);
        MechProp2.push(Temp2);
        HomoComposites.push(Temp3);
      }

      setMechanicalProp1(MechProp1);
      setMechanicalProp2(MechProp2);
      setHomoCompositesFailure(HomoComposites);

      const VFRIndex = MechProp1.findIndex(obj => obj.Vf === vfr);

      let FailureComposites = {
        F11TComposite: Math.round(F11T_T[VFRIndex] * 100) / 100,
        F11CComposite: Math.round(F11C_min_T[VFRIndex] * 100) / 100,
        F11CSplit: Math.round(F11C_Split_T[VFRIndex] * 100) / 100,
        F11CShear: Math.round(F11C_Shear_T[VFRIndex] * 100) / 100,
        F22TComposite: Math.round(F22T_T[VFRIndex] * 100) / 100,
        F22CComposite: Math.round(F22C_T[VFRIndex] * 100) / 100,
        F12Composite: Math.round(F12_T[VFRIndex] * 100) / 100,
      }

      setFailureComposites(FailureComposites);

      setVFF(vffT);
      setE22LOM(E22T);
      setE22Halpin(E22_HTT);
      setE22Chamis(E22_ChT);
      setG12LOM(G12T);
      setG12Chamis(G12_ChT);
      setG12Halpin(G12Halpin);
      setF11TC(F11T_T);
      setF11CMin(F11C_min_T);
      setF12C(F12_T);
      setF22C(F22C_T);
      setF22T(F22T_T);








    }

    return (
      <div>
        {<Tables data={RuleOMix}></Tables>}
      </div>
    )

  }










  const GetThePropertyValues = useCallback((val, type) => {

    if (type == 'resin') {
      setResinValue(val);
    }
    else {
      setFabricValue(val);
    }

  }, [ResinValue, FabricValue]);




  return (

    <div>

      <div className={Styles.TableContainer}>

        <div className={Styles.Table1}>
          <span className={Styles.header}>
            <h2>Fibre & Fabric Properties</h2>
          </span>
          <div>
            <Dropdown data={Data.fibre} method={GetThePropertyValues} label={'fibre'} ></Dropdown>
            {FabricValue != '' && <Tables data={Data.fibre[FabricValue]}></Tables>}
          </div>

        </div>



        <div className={Styles.Table1}>
          <span className={Styles.header}>
            <h2>Matrix Properties</h2>
          </span>
          <div>
            <Dropdown data={Data.resin} method={GetThePropertyValues} label={'resin'} ></Dropdown>
            {ResinValue != '' && <Tables data={Data.resin[ResinValue]}></Tables>}
          </div>

        </div>

      </div>




      <Box className={Styles.SliderCont}>
        <div className={Styles.Slider}>
          <h2 style={{ textAlign: 'center' }}>Fibre Volume Ratio</h2>
          <p style={{ textAlign: 'center' }}>Vf Between 0 and 1</p>
          <Slider style={{ color: 'whitesmoke' }} onChange={(e) => setVFR(e.target.value)} min={0} max={1} step={0.1} defaultValue={0} aria-label="Default" valueLabelDisplay="auto" />
          <h2 style={{ textAlign: 'center' }}>VFR:{vfr}</h2>
        </div>

        <div>
          <h2>Halpin-Tsai ETA = 2</h2>
        </div>

      </Box>

      {FabricValue != '' && ResinValue != '' && <Box className={Styles.Result1Container}>
        <div className={Styles.Table2}>
          <span className={Styles.header2}>
            <h2>Rule Of Mixtures</h2>
          </span>
          <div>
            <br></br>
            <br></br>
            {<Tables style={{ marginTop: '2rem' }} data={RuleOfMixData} ></Tables>}
          </div>

        </div>

        <div className={Styles.Table2}>
          <span className={Styles.header2}>
            <h2>Chamis Rule</h2>
          </span>
          <div>
            <br></br>
            <br></br>
            {<Tables style={{ marginTop: '2rem' }} data={ChamisData} ></Tables>}
          </div>

        </div>

        <div className={Styles.Table2} id={Styles.HalpinTable}>
          <span className={Styles.header2}>
            <h2>Halpin-Tsai</h2>
          </span>
          <div>
            <br></br>
            <br></br>

            {<Tables style={{ marginTop: '2rem' }} data={HalpinData} ></Tables>}
          </div>

        </div>










      </Box>}



      {FabricValue != '' && ResinValue != '' && <Box>
        <h2 style={{ textAlign: 'center' }}>Stiffness: Homogenised mechanical properties (for Vf = 0 &gt; 1)</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <GridTable style={{ width: '30%' }} data={MechanicalProp1} />
          <GridTable data={MechanicalProp2} />

        </div>


        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>

          <GridTable data={HomoCompositesFailure} />

          <div className={Styles.Table2} id={Styles.HalpinTable}>
            <span className={Styles.header2}>
              <h2>Failure: Homogenised composite for specified Vf</h2>
            </span>
            <div>
              <br></br>
              <br></br>

              {<Tables style={{ marginTop: '2rem' }} data={FailureComposite} ></Tables>}
            </div>

          </div>


        </div>






      </Box>}

      <Suspense fallback={<p>loading</p>}>

        <div className={Styles.MyPlot}>
          <Box className={Styles.graphcontainer}>

            <MyPlot Vfr={VFF} label1={"E22 (ILOM)"} label2={"E22 (Chamis)"} label3={"E22 (Haplin)"} data1={E22LOM} data2={E22Halpin} data3={E22Chamis}></MyPlot>

          </Box>

          <Box className={Styles.graphcontainer}>

            <MyPlot Vfr={VFF} label1={"G12 (ILOM)"} label2={"G12 (Chamis)"} label3={"G12 (Haplin)"} data1={G12LOM} data2={G12Halpin} data3={G12Chamis}></MyPlot>

          </Box>

        </div>


        <div className={Styles.MyPlot}>
          <Box className={Styles.graphcontainer}>

            <MyPlot Vfr={VFF} label1={"F11-T"} label2={"F11-C Min"} label3={" "} data1={F11TC} data2={F11CMin} data3={F11CMin}></MyPlot>

          </Box>

          <Box className={Styles.graphcontainer}>

            <MyPlot label1={"F22T"} label2={"F22C"} label3={"F12"} Vfr={VFF} data1={F22C} data2={F22T} data3={F12C}></MyPlot>

          </Box>
        </div>
      </Suspense>



      <div>
      </div>




    </div>




  )
}

export default LOM;
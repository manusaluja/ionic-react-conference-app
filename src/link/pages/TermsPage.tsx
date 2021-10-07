import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonRow, IonCol, IonButton, IonList, IonItem, IonLabel, IonText, IonTextarea, IonToast } from '@ionic/react';
import { connect } from '../../data/connect';
import { FieldWithIcon } from '../shells/field-with-icon';
import { MailIcon } from "@heroicons/react/solid";

import { RouteComponentProps } from 'react-router';
import { login } from '../../data/catalina/catalina.action';
interface OwnProps { }

interface DispatchProps {
  login: typeof login
 }

interface TermsProps extends RouteComponentProps, OwnProps, DispatchProps { }

const TermsPage: React.FC<TermsProps> = ({history, login}) => {

  const [email, setEmail] = useState<string>("nitin.dubey@catalina.com");
  const send = async () => {
   await login()
  };

  return (
    <IonPage id="support-page">
      <div className="flex flex-col flex-1 overflow-auto">
        <div className="flex flex-col px-4 pb-6 pt-2 items-start flex-1 content overflow-auto">
          {/* <div className="bg-gray-light px-4 py-1 rounded-md">戻る</div> */}
          <div className="text-xl mt-6">利用規約</div>
          <div className="text-sm mt-4 text-gray">
            あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
          </div>
          <div className="text-sm mt-4 text-gray mb-10">
            あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
          </div>

          <FieldWithIcon
            Icon={MailIcon}
            value={email}
            onChange={(value: string) => setEmail(value)}
            placeholder="電子メールアドレス"
            type="email"
          />

          <div className="text-lg mt-8">プライバシーポリシー</div>
          <div className="text-sm mt-4 text-gray">
            あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
          </div>
          <div className="text-sm mt-4 text-gray">
            あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波
          </div>
          <div className="text-sm mt-4 text-gray">
            あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
          </div>
          <div className="text-sm mt-4 text-gray">
            あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波
          </div>
        </div>
        <div
          className="bg-okuwa_blue text-white py-5 text-center text-sm"
          onClick={() => send()}
        >
          利用規約に同意します
        </div>
      </div>
      
    </IonPage>
  );
};

export default connect<OwnProps, {}, DispatchProps>({
  mapDispatchToProps: {
    login
  },
  component: TermsPage
})
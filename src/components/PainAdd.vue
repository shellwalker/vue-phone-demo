<template>
<div>
    <div>
        <label class="question-title">1. 请选择疼痛指数</label>
        <mt-range style="margin-left:12px" v-model='painLevel'
            :min="0"
            :max="10"
            :step="1"
            :barHeight=3>
            <div slot='start'>无疼痛(0)</div>
            <div slot='end'>重度疼痛(10)</div>
        </mt-range>
        <!-- <p>{{painLevel}}: {{levelList[painLevel]}}</p> -->
    </div>
    <div>
        <label class="question-title">2.是否有使用药物来化解疼痛？</label>
        <mt-radio
            v-model="usingDrugValue"
            :options="usingDrugOptions">
        </mt-radio>
        <!-- <p>{{usingDrugValue}}</p> -->
    </div>
    <!-- <div v-show="usingDrugValue==1"> -->
        <div>
            <label class="question-title">3.您服用的药物是？</label>
            <input class="input-readonly-field" placeholder="请选择服用的药物" v-model="usingDrugName" readonly=true @click="drugSelectPopupVisible=true">
            <!-- <label v-else >请选择您服用的药物</label> -->
            <mt-popup class="popup-radio"
              v-model="drugSelectPopupVisible">
              <mt-radio
                title="请选择您服用的药物"
                v-model="usingDrugName"
                :options="drugListOptions">
              </mt-radio>
            </mt-popup>
        </div>
        <div>
            <label class="question-title">4.您药物的使用方式是？</label>
            <input class="input-readonly-field" placeholder="请选择药物使用方式" v-model="usingDrugType" readonly=true @click="drugTypeSelectPopupVisible=true">
            <!-- <label v-else >请选择您服用的药物</label> -->
            <mt-popup class="popup-radio"
              v-model="drugTypeSelectPopupVisible">
              <mt-radio
                title="请选择您服用的药物"
                v-model="usingDrugType"
                :options="drugTypeListOptions">
              </mt-radio>
            </mt-popup>
        </div>
        <div>
            <label class="question-title">5.您每次复用药物的剂量是？</label>
            <input class="input-readonly-field" placeholder="请输入药物剂量" v-model="dosage">mg

        </div>
    <!-- </div> -->
    <div class="btn-container">
      <mt-button @click="submitRecord" type="primary" size="large">提交</mt-button>
    </div>
</div>
</template>

<script>
export default {
  name: 'PainAdd',
  data () {
    return {
      levelList: [
        '无疼痛',
        '轻度疼痛',
        '轻度疼痛',
        '轻度疼痛',
        '中度疼痛',
        '中度疼痛',
        '中度疼痛',
        '重度疼痛',
        '重度疼痛',
        '重度疼痛',
        '重度疼痛'
      ],
      painLevel: 0,
      usingDrugOptions: [
        {
          label: '是',
          value: '1'
        },
        {
          label: '否',
          value: '0'
        }
      ],
      usingDrugValue: '1',
      drugListOptions: [
        {
          label: '药物A',
          value: '药物A'
        },
        {
          label: '药物B',
          value: '药物B'
        }
      ],
      usingDrugName: '',
      drugSelectPopupVisible: false,

      drugTypeListOptions: [
        {
          label: '口服',
          value: '口服'
        },
        {
          label: '注射',
          value: '注射'
        },
        {
          label: '贴剂',
          value: '贴剂'
        }
      ],
      usingDrugType: '',
      drugTypeSelectPopupVisible: false,

      dosage: ''

    }
  },
  methods: {
    submitRecord () {
      alert(
        '疼痛级别' + this.painLevel + '\n' +
        '是否用药' + this.usingDrugValue + '\n' +
        '药品名称' + this.usingDrugName + '\n' +
        '药品使用方式' + this.usingDrugType + '\n' +
        '药品剂量' + this.dosage + '\n')
    }
  },
  watch: {
    usingDrugName: function () {
      this.drugSelectPopupVisible = false
    },
    usingDrugType: function () {
      this.drugTypeSelectPopupVisible = false
    }
  }
}
</script>
<style scoped>
.input-readonly-field {
  /* width: auto; */
  margin-left: 12px;
  font-size: 14px;
  border-bottom: 1px solid #dbdbdb;
  border-top:0px;
  border-left:0px;
  border-right:0px;
}
.question-title {
  /* text-align: left; */
  font-size: 14px;
  margin: 8px;
  display: block;
  color: #888;
}
.popup-radio {
  max-height: 25%;
  width: 60%;
  overflow-y: scroll
}
.btn-container {
  /* width: 100%; */
  position: absolute;
  right: 0;
  left: 0;
  bottom: 30px;
  padding-left: 10px;
  padding-right: 10px;
}
</style>

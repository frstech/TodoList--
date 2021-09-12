import React, { useState } from "react";
import { Switch, Text, View } from "react-native";
import Row from "./Row";

function TodoItem( { label }) {
  const [ isdone, setDone ] = useState( false );
  return (
    <Row style={{ alignItems: 'center', marginBottom: 12, }}>
      <Switch
        value={ isdone } 
        onValueChange={ value => setDone( value ) }
        style={{ marginRight: 8, }}
      />
      <Text style={{ color: isdone ? '#eee' : '#000' }}>{ label ?? '(내용없음)' }
      </Text>
    </Row>
  )
}

export default TodoItem;
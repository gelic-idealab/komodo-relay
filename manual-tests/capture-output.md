# Test: Capture Output

Please see komodo-relay/admin-capture/validate.js for instructions on how to validate captures automatically. The script does not check everything shown here, though.

## Capture file is valid

The capture file has more than zero messages.

The capture file is in JSON format.

## Interactions are included
Look for messages with the type "interaction" and the following values:
- Look Start (0)
- Look End (1)
- Show (2)
- Hide (3)
- Grab (4)
- Drop (5)
- Lock (8)
- Unlock (9)
- Show Menu (12)
- Hide Menu (13)
- Settings Tab (14)
- People Tab (15)
- Interaction Tab (16)
- Create Tab (17)

## Sync Transforms (Poses) are included
Look for messages with the type "sync" (to be renamed "pose" or "position" or "transform" in the future): 
- Avatars (Head, Left Hand, Right Hand)
  - Position
  - Rotation
  - Scale
- Objects (Models, Model Packs, Drawings)
  - Position
  - Rotation
  - Scale

## Sync Drawings are included
Look for messages with the type "draw" and the following values:
- 10, 11, 13, 14

## Sync Drawings messages are correct
Continue Line includes...
- Client ID
- Stroke ID
- Stroke Type = Entity_Type.Line (10)
- Line Width
- Current Stroke Position
- Current Color

End Line includes...
- Client ID
- Stroke ID
- Stroke Type = Entity_Type.LineEnd (11)
- Current Stroke Position

Show Line includes...
- Client ID
- Stroke ID
- Stroke Type = Entity_Type.LineRender (13)

Hide Line includes...
- Client ID
- Stroke ID
- Stroke Type = Entity_Type.LineNotRender (14)

Delete Line includes...
- Client ID
- Stroke ID
- Stroke Type = Entity_Type.LineDelete (12)

## Sync Drawing message contents are correct:
Stroke ID should look like...

```
1191234
^  ^
|  | 
|  \-stroke ID (index)
\----- avatar sum (computed from hand ID and client ID)
```